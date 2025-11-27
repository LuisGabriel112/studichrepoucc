import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'; // Import TouchableOpacity
import { AuthProvider, AuthContext } from './AuthContext';
import { LoginScreen, MainScreen, CalculatorScreen, NameScreen, GeneratorScreen } from './Screens';

// Component to handle internal navigation (after login)
const AuthenticatedApp = () => {
    const { userToken } = useContext(AuthContext);
    const [currentScreen, setCurrentScreen] = useState('Menu'); // State for internal navigation

    // Screen map
    const screenMap = {
        'Menu': <MainScreen setScreen={setCurrentScreen} />,
        'Calculator': <CalculatorScreen setScreen={setCurrentScreen} />,
        'Name': <NameScreen setScreen={setCurrentScreen} />,
        'Generator': <GeneratorScreen setScreen={setCurrentScreen} />,
    };

    // If for some reason the token is lost here, we force a return to Login
    if (!userToken) {
        return <LoginScreen />;
    }

    // Renders the current screen
    return (
        <View style={styles.appContainer}>
            {screenMap[currentScreen]}
        </View>
    );
};

// Main application component
export default function App() {
    return (
        <AuthProvider>
            <StatusBar style="auto" />
            <RootNavigator />
        </AuthProvider>
    );
}

// Component that checks authentication state and renders the base screen
const RootNavigator = () => {
    const { userToken, isLoading } = useContext(AuthContext);
    // 🌟 TEST STATE REMOVED 🌟

    // Shows a loading screen while recovering the token
    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <Text style={{ fontSize: 18 }}>Loading session data...</Text>
            </View>
        );
    }
    
    // 🌟 FINAL LOGIC: Show the App if there is a token, otherwise show Login.
    const isAuthenticated = userToken;

    return (
        <View style={styles.fullScreenContainer}>
            {/* Test button for developers REMOVED */}

            {/* Conditional Rendering */}
            {isAuthenticated ? <AuthenticatedApp /> : <LoginScreen />}
        </View>
    );
};


const styles = StyleSheet.create({
    fullScreenContainer: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        // The top padding of 40px is removed
    },
    appContainer: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    // Test button styles REMOVED
});
