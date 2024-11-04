import React, {useState, useCallback} from 'react';
import {View, FlatList, Button, StyleSheet} from 'react-native';
import {AnimatedTaskItem} from './AnimatedTaskItem';

interface Task {
    id: string;
    name: string;
}

let taskCounter = 2;

export const LazyTaskList = () => {
    const [tasks, setTasks] = useState<Task[]>([
        {id: '1', name: 'Task 1'},
        {id: '2', name: 'Task 2'},
    ]);

    const renderItem = useCallback(({item}: { item: Task }) => (
        <AnimatedTaskItem
            task={item}
            onDelete={() => {
                setTasks((prevTasks) => prevTasks.filter((t) => t.id !== item.id));
            }}
        />
    ), [tasks]);

    return (
        <View style={styles.container}>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
            <Button
                title="Add Task"
                onPress={() => {
                    taskCounter++;
                    setTasks((prevTasks) => [...prevTasks, {id: `${taskCounter}`, name: `Task ${taskCounter}`}]);
                }}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
});

