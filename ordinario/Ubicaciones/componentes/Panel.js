import { View, Button, StyleSheet } from 'react-native';
export default () => {
    return (
        <View>
            <Button title="Lista" />
            <Button title="Mostrar/ocultar" />
        </View>
    );
}

const styles = StyleSheet.create({
    panel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    },
});