import React, {useState} from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
export default () => {
    const [contador,setContador]=useState(0);
    return (
        <>
            <Text style={styles.texto} onPress={()=>setContador(contador+1)}> + </Text>
            <Text style={styles.texto}>Contador: {contador}</Text>
            <Text style={styles.texto} onPress={()=>setContador(contador-1)}> - </Text>
        </>
    )
}

const styles=StyleSheet.create({
    texto:{
        fontSize:48,
        color:'red'
    }
})
