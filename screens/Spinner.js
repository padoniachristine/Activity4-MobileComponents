import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Button } from 'react-native';

const App = () => {
  const [isLoading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  };

  return (
    <View style={styles.container}>
      <Button title="Start Loading" onPress={startLoading} />
      {isLoading ? (
        <ActivityIndicator size="large" color="#7d409f" style={styles.spinner} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    marginTop: 20,
  },
});

export default App;
