import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";

export default () => {
    const [carga, setCarga] = useState(true);
    const [usuarios, setUsuarios] = useState([]);

/*     useEffect(
       async () => {
        const result = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await result.json();
        setUsuarios(json);
        setCarga(false);
       },[]
    ) */

    const handleCarga = async () => {
        const result = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await result.json();
        setUsuarios(json);
        setCarga(false);
    }

    useEffect(
        () => {
            handleCarga();
        },[]
    )



    return (
            <Text>
                {carga ? 'Cargando usuarios...' : 'Usuario 1 : ' + usuarios[0].name}
            </Text>

    )

}
