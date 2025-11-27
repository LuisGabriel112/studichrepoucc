import { Dimensions, StyleSheet} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Map = ({ onLongPress, puntos }) => {
  return (
      <MapView
        style={styles.map}
        onLongPress={onLongPress}
      >
        {puntos.map(x => 
          <Marker
            key={x.name}
            coordinate={x.coordinate}
            title={x.name}
          />
        )}
      </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height-120,
  },
});

export default Map;