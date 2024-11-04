import {Tabs} from 'expo-router';
import {TabBarIcon} from '@/components/navigation/TabBarIcon';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "lightblue",
                headerShown: false,
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({color}) => (
                        <TabBarIcon name={"home"} color={color}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="queries"
                options={{
                    title: 'Queries',
                    tabBarIcon: ({color}) => (
                        <TabBarIcon name={"code-slash"} color={color}/>
                    ),
                }}
            />
        </Tabs>
    );
}
