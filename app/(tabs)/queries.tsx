import React, {useState} from 'react';
import {View, Text, ActivityIndicator, StyleSheet, Button} from 'react-native';
import {useQuery} from 'react-query';

interface UserData {
    name: string;
    email: string;
}

const fetchUserData = async (user: number): Promise<UserData> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user}`);
    return response.json();
};

export default function QueriesScreen() {
    const [counter, setCounter] = useState(1);
    const {data, isLoading, error} = useQuery<UserData>(['userData', counter], () => fetchUserData(counter));

    if (isLoading) return <View style={styles.container}><ActivityIndicator size="large" color="#0000ff"/></View>;
    if (error) return <Text>Error: {error.toString()}</Text>;

    return (
        <View style={styles.container}>
            <Text>Position: {counter}</Text>
            <Text>User Name: {data?.name}</Text>
            <Text>Email: {data?.email}</Text>
            <View style={styles.buttons}>
                <Button title="Previous" onPress={() => setCounter((prev) => prev - 1)}/>
                <Button title="Next" onPress={() => setCounter((prev) => prev + 1)}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    buttons: {
        flexDirection: 'row',
        gap: 10,
    }
});
