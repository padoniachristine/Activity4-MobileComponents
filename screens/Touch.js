import React, { useState } from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const App = () => {
  const [highlightPressed, setHighlightPressed] = useState(false);
  const [opacityPressed, setOpacityPressed] = useState(false);
  const [isTouched, setTouched] = useState(false);

  const handleHighlightPress = () => {
    setHighlightPressed(!highlightPressed);
  };

  const handleOpacityPress = () => {
    setOpacityPressed(!opacityPressed);
  };

  const handlePress = () => {
    setTouched(!isTouched);
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={[styles.button, highlightPressed && styles.buttonPressed]}
        onPress={handleHighlightPress}
        underlayColor="#dddddd"
      >
        <Text style={styles.buttonText}>
          {highlightPressed ? 'Highlight Pressed' : 'TouchableHighlight'}
        </Text>
      </TouchableHighlight>

      <TouchableOpacity
        style={[styles.button, opacityPressed && styles.buttonPressed]}
        onPress={handleOpacityPress}
        activeOpacity={0.9}
      >
        <Text style={styles.buttonText}>
          {opacityPressed ? 'Opacity Pressed' : 'TouchableOpacity'}
        </Text>
      </TouchableOpacity>

      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={[styles.button, isTouched && styles.buttonTouched]}>
          <Text style={styles.buttonText}>
            {isTouched ? 'Touched' : 'TouchableWithoutFeedback'}
          </Text>
        </View>
      </TouchableWithoutFeedback>
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
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonPressed: {
    backgroundColor: '#0056b3',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default App;
