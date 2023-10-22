import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ZO4w6WYnTJonH7XrlTEYW8l1xb9Vr8w229EqAMVrUBh5b_e4LMdon6gO2NwOHmxGR_g&usqp=CAU' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
