import { Modal, StyleSheet, Text, View } from 'react-native';

const ModalComponent = ({ visible, children }) => {
    return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
        >
          <View style={styles.center}>
            <View style={styles.modalView}>
              {children}
            </View>
          </View>
      </Modal>
    );
}

export default ModalComponent;

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