import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from './AuthContext';

// --- LOGIN SCREEN (No token required) ---

export const LoginScreen = () => {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // In a real app, you would validate credentials with a backend here.
        // Here we simulate a token based on the username.
        if (username.length > 2 && password === '123') {
            login(`TOKEN_${username.toUpperCase()}_${new Date().getTime()}`);
        } else {
            alert("Invalid credentials. Use '123' as the password.");
        }
    };

    return (
        <View style={styles.authContainer}>
            <Text style={styles.title}>LOGIN</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

// --- SCREEN 1: Main Menu (Dashboard) ---

export const MainScreen = ({ setScreen }) => {
    const { logout } = useContext(AuthContext);

    return (
        <View style={styles.menuContainer}>
            <Text style={styles.menuTitle}>Applications Menu</Text>
            <TouchableOpacity style={styles.menuButton} onPress={() => setScreen('Calculator')}>
                <Text style={styles.buttonText}>1. Simple Calculator</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButton} onPress={() => setScreen('Name')}>
                <Text style={styles.buttonText}>2. Type Your Name</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButton} onPress={() => setScreen('Generator')}>
                <Text style={styles.buttonText}>3. Random Generator</Text>
            </TouchableOpacity>

            <View style={{ marginTop: 40 }}>
                <Button title="LOGOUT" onPress={logout} color="#FF5252" />
            </View>
        </View>
    );
};


// --- SCREEN 2: Calculator ---

export const CalculatorScreen = ({ setScreen }) => {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState('');

    const calculate = (operator) => {
        const n1 = parseFloat(number1 || 0);
        const n2 = parseFloat(number2 || 0);
        let calculationResult = 0;

        if (operator === '+') calculationResult = n1 + n2;
        else if (operator === '-') calculationResult = n1 - n2;
        else if (operator === '*') calculationResult = n1 * n2;
        else if (operator === '/') calculationResult = n1 / n2;

        setResult(calculationResult.toString());
    };

    return (
        <View style={styles.screenContainer}>
            <Text style={styles.screenTitle}>Simple Calculator</Text>
            <TextInput
                style={styles.input}
                placeholder="Number 1"
                keyboardType="numeric"
                value={number1}
                onChangeText={setNumber1}
            />
            <TextInput
                style={styles.input}
                placeholder="Number 2"
                keyboardType="numeric"
                value={number2}
                onChangeText={setNumber2}
            />
            <View style={styles.buttonRow}>
                <Button title=" + " onPress={() => calculate('+')} />
                <Button title=" - " onPress={() => calculate('-')} />
                <Button title=" * " onPress={() => calculate('*')} />
                <Button title=" / " onPress={() => calculate('/')} />
            </View>
            <Text style={styles.resultText}>Result: {result}</Text>
            <TouchableOpacity style={styles.backButton} onPress={() => setScreen('Menu')}>
                <Text style={styles.backButtonText}>← Back to Menu</Text>
            </TouchableOpacity>
        </View>
    );
};

// --- SCREEN 3: Type Your Name ---

export const NameScreen = ({ setScreen }) => {
    const [name, setName] = useState('');
    const [displayName, setDisplayName] = useState('');

    const printName = () => {
        setDisplayName(name);
    };

    return (
        <View style={styles.screenContainer}>
            <Text style={styles.screenTitle}>Print Your Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Type your name here"
                value={name}
                onChangeText={setName}
            />
            <TouchableOpacity style={styles.primaryButton} onPress={printName}>
                <Text style={styles.buttonText}>Print</Text>
            </TouchableOpacity>
            
            <Text style={styles.resultText}>
                {displayName ? `Hello, ${displayName}!` : 'Waiting for name...'}
            </Text>
            <TouchableOpacity style={styles.backButton} onPress={() => setScreen('Menu')}>
                <Text style={styles.backButtonText}>← Back to Menu</Text>
            </TouchableOpacity>
        </View>
    );
};

// --- SCREEN 4: Random Generator ---

export const GeneratorScreen = ({ setScreen }) => {
    const [randomNumber, setRandomNumber] = useState(null);

    const generate = () => {
        const num = Math.floor(Math.random() * 100) + 1; // Generates between 1 and 100
        setRandomNumber(num);
    };

    return (
        <View style={styles.screenContainer}>
            <Text style={styles.screenTitle}>Number Generator (1-100)</Text>
            <TouchableOpacity style={styles.primaryButton} onPress={generate}>
                <Text style={styles.buttonText}>Generate Number</Text>
            </TouchableOpacity>
            
            {randomNumber !== null && (
                <Text style={styles.randomNumberText}>
                    Generated Number: {randomNumber}
                </Text>
            )}
            <TouchableOpacity style={styles.backButton} onPress={() => setScreen('Menu')}>
                <Text style={styles.backButtonText}>← Back to Menu</Text>
            </TouchableOpacity>
        </View>
    );
};


// --- STYLES ---

const styles = StyleSheet.create({
    authContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        width: '100%',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    loginButton: {
        width: '80%',
        padding: 15,
        backgroundColor: '#007BFF',
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },

    // Menu Styles
    menuContainer: {
        flex: 1,
        paddingTop: 80,
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
    },
    menuTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#333',
    },
    menuButton: {
        width: '70%',
        padding: 18,
        backgroundColor: '#28A745',
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    // Internal Screen Styles
    screenContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 80,
        backgroundColor: '#f9f9f9',
        width: '100%',
    },
    screenTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#007BFF',
    },
    primaryButton: {
        padding: 15,
        backgroundColor: '#007BFF',
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
        width: '60%',
    },
    resultText: {
        fontSize: 20,
        marginTop: 30,
        fontWeight: '600',
        color: '#333',
    },
    randomNumberText: {
        fontSize: 32,
        marginTop: 30,
        fontWeight: 'bold',
        color: '#DC3545',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
        marginBottom: 20,
        marginTop: 10,
    },
    backButton: {
        marginTop: 50,
    },
    backButtonText: {
        color: '#6C757D',
        fontSize: 16,
    }
});
