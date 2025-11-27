import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { Map, Modal, Panel } from './componentes';

export default function App() {
  const [points, setPoints] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState(null);

  const handleLongPress = ({ nativeEvent }) => {
     const newPoint = { coordinate: nativeEvent.coordinate, name: `Point ${points.length + 1}` };
     setPoints([...points, newPoint]);
     setSelectedPoint(newPoint);
     setModalVisible(true);
  }

  const handleShowList = () => {
    // Logic to show a list of points could be implemented here
    alert('List of points functionality can be added here.');
  }

  const handleTogglePoints = () => {
    // Logic to toggle points visibility could be implemented here
    alert('Toggle points functionality can be added here.');
  }

  return (
    <View style={styles.container}>
      <Map
        onLongPress={handleLongPress}
        puntos={points}
      />
      <Panel onShowList={handleShowList} onTogglePoints={handleTogglePoints} />
      <Modal visible={modalVisible}>
          <Text>{selectedPoint?.name}</Text>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
