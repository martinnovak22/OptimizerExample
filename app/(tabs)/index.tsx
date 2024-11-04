import {StyleSheet, View, Text} from 'react-native';
import {TaskListWrapper} from "@/components/TaskList";
import React from "react";

export default function HomeScreen() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 36,
            }}
        >
            <TaskListWrapper/>
        </View>
    );
}
