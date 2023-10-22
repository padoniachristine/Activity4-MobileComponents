import React, { useState, useRef } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Toast from 'react-native-toast-message';
import LottieView from "lottie-react-native";



const App = () => {
    const animation = useRef(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const showToast = () => {
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: 'Hello World',
      text2: 'This is a toast!',
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 30,
    });
  };

  const showAlert = () => {
    Alert.alert(
      'Alert',
      'This is an alert!',
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
     <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 300,
            height: 300,
          }}
          source={require("../assets/tower.json")}
        />
      <TouchableOpacity onPress={toggleModal} style={styles.button}>
        <Text style={styles.texts}>Show Popup</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={showToast} style={styles.button}>
        <Text style={styles.texts}>Show Toast</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={showAlert} style={styles.button}>
        <Text style={styles.texts}>Show Alert</Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>This is a popup/modal!</Text>
            <TouchableOpacity onPress={toggleModal}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 10,
    padding: 10,
    width: 150,
    backgroundColor:  "#192655",
    borderRadius: 5,
    color: 'white',
    alignContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  texts: {
    color: 'white'
  }
});

export default App;
