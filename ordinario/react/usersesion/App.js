import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AuthProvider, AuthContext } from './AuthContext';
import React, { useContext } from 'react';

function AppContent() {
  const { userToken, login, logout } = useContext(AuthContext);

  // The isLoading state is handled by the AuthProvider's loading screen.
  // We can directly render based on the userToken.
  
  return (
    <View style={styles.container}>
      {userToken ? (
        <>
          <Text style={styles.title}>Welcome!</Text>
          <Text>Your token is: {userToken}</Text>
          <View style={styles.buttonGap} />
          <Button title="Logout" onPress={() => logout()} />
        </>
      ) : (
        <>
          <Text style={styles.title}>Please Log In</Text>
          <Button title="Login" onPress={() => login("dummy-token-123")} />
        </>
      )}
    </View>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <AppContent />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonGap: {
    marginTop: 10,
  }
});
