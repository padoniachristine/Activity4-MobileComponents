import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
const App = () => {
  const [isSwitchOn, setSwitchOn] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  const toggleSwitch = () => {
    setSwitchOn(!isSwitchOn);
  };

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Switch:</Text>
        <Switch
          value={isSwitchOn}
          onValueChange={toggleSwitch}
        />
        <Text>{isSwitchOn ? 'ON' : 'OFF'}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Slider:</Text>
        <Slider
          style={{ flex: 1 }}
          minimumValue={0}
          maximumValue={100}
          value={sliderValue}
          onValueChange={handleSliderChange}
          minimumTrackTintColor="#7d409f"
         maximumTrackTintColor="#7d409f"
        />
        <Text>{sliderValue.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    marginRight: 10,
    fontSize: 18,
  },
});

export default App;
