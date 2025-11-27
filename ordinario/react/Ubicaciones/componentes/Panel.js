import { View, Button, StyleSheet } from 'react-native';
const Panel = ({ onShowList, onTogglePoints }) => {
    return (
        <View style={styles.panel}>
            <Button title="List" onPress={onShowList} />
            <Button title="Show/Hide" onPress={onTogglePoints} />
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

export default Panel;