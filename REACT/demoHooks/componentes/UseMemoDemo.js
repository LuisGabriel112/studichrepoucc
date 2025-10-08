import React, { useState, useEffect, useMemo } from "react";
import { Text } from "react-native";

const users=[
    {
        name:'Venegas',
        age:25
    },
    {
        name:'Perez',
        age:30
    }
]


export default ()=> {
    const totalAge = useMemo(() =>{
        let total = 0;
        console.log('Calculando total de edad');
        users.forEach(user => {
            total = total + user.age;
        });
        return total;
    },[users]
    );

    return (
        <Text>
            Total de edad: {totalAge}
        </Text>
    );
}