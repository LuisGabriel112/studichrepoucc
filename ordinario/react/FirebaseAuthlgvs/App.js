import React,{useState} from "react";
import {StyleSheet,Text, View, Button,TextInput,Alert} from "react-native";
import { firebaseAuth } from "./firebaseConfig";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";

export default function App(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const[user,setUser]=useState(null);

  const handleLogin = async () => {
    try{
    const userCredential= await signInWithEmailAndPassword(firebaseAuth,email,password);
    setUser(userCredential.user);
  } catch (error) {
    Alert.alert("Login Error", error.message);

  }
}

  const handleLogout = async () => {
    await firebaseAuth.signOut();
    setUser(null);
  }
  const handleSignUp = async () => {
    try{
      const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      setUser(userCredential.user);

    }
    catch (error) {
      Alert.alert("Signup Error", error.message);
    }
  }

  const handleRefresh = async () =>{
    console.log("PREVIOUS TOKEN");
    console.log(user.stsTokenManager.accessToken);

    const newAccessToken = await user.getIdToken(true);

    console.log("NEW TOKEN");
    console.log(user.stsTokenManager.accessToken)
  }

  return(
    <View style={styles.container}>
      {
        user ? (
          <>
          <Text style={styles.text}>Welcome, {user.stsTokenManager.accessToken}</Text>
          <Button title="Logout" onPress={handleLogout}/>
          <View style={{marginBottom:10}}/>
          <Button title="Refresh" onPress={handleRefresh}/>
          
          </>
        ):(
          <>
          <Text style={styles.text}>Firebase Authentication</Text>
          <TextInput
          style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            />
          <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          />
          <Button
          title="Login"
          onPress={handleLogin}
          />
          <View style={{marginBottom:5}}/>
          <Button
          title="Sign Up"
          onPress={handleSignUp}
          />
          </>

        )
      }
    </View>
  );
  

}

const styles=StyleSheet.create(
  {
    container:{
      flex:1,
      backgroundColor:"#a06b6bff",
      alignItems:"center",
      justifyContent:"center",
      padding:30,
    },
    input:{
      width:"100%",
      padding:10,
      marginBottom:10,
      borderWidth:1,
      borderColor:"#4905dbff",
      borderRadius:10,
      backgroundColor:"#9bc1d5ff",
    },
    text:{
      fontSize:26,
      color:"#1100ffff",
    },

    },
);
