import React, {Suspense} from 'react';
import {ActivityIndicator} from 'react-native';
import {LazyTaskList} from './LazyTaskList';

export const TaskListWrapper = () => (
    <Suspense fallback={<ActivityIndicator size="large" color="#0000ff"/>}>
        <LazyTaskList/>
    </Suspense>
);

