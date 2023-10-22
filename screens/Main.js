import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Modal,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
  Text,
} from "react-native";
import * as Speech from "expo-speech";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LottieView from "lottie-react-native";
const Drawer = createDrawerNavigator();

export default function Main({ navigation }) {
  const animation = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setModalVisible(true);
  }, []);
  const hideModal = () => {
    setModalVisible(false);
    setInputText("");
  };
  const speak = () => {
    Speech.speak(`Hi ${inputText}, welcomes to React Native Mobile Components`, {
      language: "tl-PH",
    });
  };
  const saveText = () => {
    setDisplayText(inputText);
    speak();
    hideModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.greet}>
        <View style={styles.modal}>
          <Text style={styles.greets}>Hello!</Text>
          <Text style={styles.displaytext}>{displayText}</Text>
        </View>
        <Text style={styles.greets1}>WELCOME TO REACT NATIVE MOBILE COMPONENTS</Text>
        <View style={styles.containers}>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 400,
            height: 350,
            backgroundColor: "#eee",
          }}
          source={require("../assets/tech.json")}
        />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.openDrawer()}
        >
          <Text style={styles.buttonText}>Explore</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#192655'}}>Hello!</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your name"
              onChangeText={(text) => setInputText(text)}
              value={inputText}
            />
            <View style={styles.modal}>
              <TouchableOpacity style={styles.button} onPress={saveText}>
                <Text style={styles.buttonText}>Ok</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={hideModal}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
    padding: 8,
    alignItems: "center",
    justifyContent: 'center'
  },
  containers: {
    alignItems: "center",
    marginVertical: 20
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  textInput: {
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
  greets: {
    fontSize: 40,
    fontWeight: "bold",
  },
  greets1: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#192655", 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  caption: {
    color: "#243139",
    fontSize: 20,
  },
  modal: {
    flexDirection: "row",
    gap: 10,
  },
  displaytext: {
    color: "#192655",
    fontSize: 40,
    fontWeight: "bold",
  },
});
