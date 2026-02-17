import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { RootStackParamList } from '../types';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator<RootStackParamList>();


const AppNavigator = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={ { headerShown: false } }>
                { isAuthenticated ? (
                    <Stack.Screen name="Home" component={HomeScreen} />
                ) : (
                        <Stack.Screen name="Login" component={LoginScreen} />
                )}

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;