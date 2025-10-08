import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Map from './componentes/Map';
import Modal from './componentes/modal';
import Panel from './componentes/Panel';
  const handleLongPress = (punto) => {
     console.log(punto);
  }

export default function App() {
  return (
    <View style={styles.container}>
      <Map
        longPress={handleLongPress}
      />

      <Modal />
      <Panel />
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
