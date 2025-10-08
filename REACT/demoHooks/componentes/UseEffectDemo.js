import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";

export default () => {
    const [loading,setLoading]=useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        },2000)
        console.log("ejecutadon effect");

    },[])
    return (
        <>
            <Text style={styles.texto}>
                {loading?'Loading app.....':'App loaded'}
            </Text>
        </>
    )
}

const styles=StyleSheet.create({
    texto:{
        fontSize:48,
        color:'red'
    }
})
