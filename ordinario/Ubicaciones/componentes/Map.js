import { Dimensions, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

export default ({longPress}) => {
  return (
      <MapView
        style={styles.map}
        onLongPress={longPress}
      />
  );
}

const styles = StyleSheet.create({
  map: {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height-120,
  },
});