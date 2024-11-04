import React, {useEffect} from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import Animated, {Easing, useSharedValue, useAnimatedStyle, withTiming, runOnJS} from 'react-native-reanimated';

interface Task {
    id: string;
    name: string;
}

interface AnimatedTaskItemProps {
    task: Task;
    onDelete: () => void;
}

export const AnimatedTaskItem: React.FC<AnimatedTaskItemProps> = ({task, onDelete}) => {
    const opacity = useSharedValue(0);
    const height = useSharedValue(60);

    useEffect(() => {
        opacity.value = withTiming(1, {
            duration: 2500,
            easing: Easing.out(Easing.exp),
        });
    }, [opacity]);

    const handleDelete = () => {
        opacity.value = withTiming(0, {duration: 500}, () => {
            height.value = withTiming(0, {duration: 300}, () => {
                runOnJS(onDelete)();
            });
        });
    };

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        height: height.value,
        marginVertical: height.value > 0 ? 5 : 0,
    }));

    return (
        <Animated.View style={[styles.taskContainer, animatedStyle]}>
            <Pressable onPress={handleDelete}>
                <Text style={styles.taskText}>{task.name}</Text>
            </Pressable>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    taskContainer: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
    },
    taskText: {
        fontSize: 16,
    },
});
