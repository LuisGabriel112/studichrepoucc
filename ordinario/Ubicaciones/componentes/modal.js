import { Modal, StyleSheet, Text, View } from 'react-native';

export default () => {
    return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={false}
        >
          <View style={styles.center}>
            <View style={styles.modalView}>
              <Text>❤️❤️</Text>
            </View>
          </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },


  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});