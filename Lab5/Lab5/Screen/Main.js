import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import Home from './Home';
import AddService from './SubScreen/AddService';
import ServiceDetail from './SubScreen/ServiceDetail';
import UpdateService from './SubScreen/UpdateService';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen
            name="ServiceDetail"
            component={ServiceDetail}
            options={{ headerShown: false }}
        />
        <Stack.Screen name="AddService" component={AddService} />
        <Stack.Screen name="UpdateService" component={UpdateService} />
    </Stack.Navigator>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backdrop: {
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
});

export default Main;
