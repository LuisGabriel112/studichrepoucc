import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text } from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // State to show loading screen

    // 🌟 UNIQUE KEY for AsyncStorage
    const STORAGE_KEY = 'userToken'; 

    const login = async (token) => {
        setIsLoading(true);
        setUserToken(token);
        // Use the unique and correct key for storing
        await AsyncStorage.setItem(STORAGE_KEY, token);
        setIsLoading(false);
    };

    const logout = async () => {
        setIsLoading(true);
        setUserToken(null);
        // Use the unique and correct key for removing
        await AsyncStorage.removeItem(STORAGE_KEY);
        setIsLoading(false);
    };

    const checkToken = async () => {
        try {
            const token = await AsyncStorage.getItem(STORAGE_KEY);
            if (token) {
                setUserToken(token);
            }
        } catch (e) {
            console.error('Error checking token:', e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(
        () => {
            checkToken();
        }, []
    );

    // Optional: Show a spinner while checking the initial token
    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading session...</Text>
            </View>
        );
    }

    return (
        <AuthContext.Provider value={{ userToken, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};
