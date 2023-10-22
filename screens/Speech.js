import * as React from 'react';
import { View, StyleSheet, Button, ScrollView, Text } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const speak = () => {
    const thingToSay =
      'React Native is an open-source framework for building mobile applications using JavaScript and React. It was developed by Facebook and is widely used for creating cross-platform mobile apps that can run on both iOS and Android devices with a single codebase';
    Speech.speak(thingToSay);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Scroll View and Text-to-Speech</Text>
      <View style={styles.content}>
      <Button title="Press to hear some words" onPress={speak} />
        <Text style={styles.caption}>
        A ScrollView is a user interface (UI) component commonly used in mobile app development and other graphical user interface environments to display content that is larger than the visible area of the screen. It allows users to scroll through the content to view parts that are not initially visible on the screen.
        Key characteristics and uses of a ScrollView include:
        Content Overflow: ScrollViews are used when the content within a view (such as text, images, or other UI elements) exceeds the available screen space. Without a ScrollView, some content might be cut off or not accessible.     
        Vertical or Horizontal Scrolling: Depending on the design, ScrollView can be configured for vertical scrolling (up and down) or horizontal scrolling (left and right), or both (both directions).
        Scrollable Content: Any UI elements placed inside a ScrollView can become scrollable, allowing users to interact with them by swiping or dragging to reveal more content.
        Pagination: In some cases, ScrollView is used to create pages of content, where each swipe reveals a new page or section of information.
        Nested ScrollViews: It's possible to nest ScrollViews within each other to create complex layouts, but this can sometimes lead to usability issues if not implemented carefully.
        Customization: Developers can often customize the appearance and behavior of a ScrollView, including scroll speed, bounce effects, and scroll indicators.
        In mobile app development, ScrollView components are commonly found in iOS (UIScrollView) and Android (ScrollView) development environments. They are essential for creating user interfaces that can accommodate various screen sizes and device orientations.
        Here's a simple example of how ScrollView might be used in a mobile app:
        Suppose you are designing a news app where articles can vary in length. Without a ScrollView, longer articles might be truncated, and users wouldn't be able to read the entire content. By placing the article text within a ScrollView, users can scroll through the entire article to read it in its entirety, ensuring a better user experience and accessibility.
        In summary, a ScrollView is a crucial UI component for handling content that extends beyond the visible screen area, providing users with a means to scroll and access the entire content.
        fermentum.
        </Text>
        <Text style={styles.caption}>
        Text-to-speech (TTS) technology is a transformative tool that converts written text into spoken words.
         This technology utilizes sophisticated algorithms and natural language processing techniques to 
         generate lifelike speech from written content. TTS systems have numerous practical applications,
          such as aiding individuals with visual impairments in accessing written information, enhancing the
           accessibility of digital content, and enabling more immersive experiences in various applications, 
           including virtual assistants, navigation systems, and audiobooks. TTS technology has evolved significantly 
           in recent years, offering more natural and expressive voices that closely resemble human speech patterns, 
           making it an invaluable resource for communication, accessibility, and automation in our increasingly digital world.
        </Text>
        {/* Add more content to make the ScrollView scrollable */}
        <Text style={styles.caption}>
          More content goes here. You can add as much content as needed to make
          the ScrollView scrollable.
        </Text>
        <Text style={styles.caption}>
          More content goes here. You can add as much content as needed to make
          the ScrollView scrollable.
        </Text> 
        <Text style={styles.caption}>
          More content goes here. You can add as much content as needed to make
          the ScrollView scrollable.
        </Text> 
        <Text style={styles.caption}>
          More content goes here. You can add as much content as needed to make
          the ScrollView scrollable.
        </Text>
         <Text style={styles.caption}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit
          id ante ut malesuada. Vestibulum nec venenatis orci. Sed at consequat
          erat. Morbi id bibendum metus. Fusce luctus, tortor at lacinia
          ultricies, mi dui vehicula metus, nec fermentum lectus leo a arcu.
          Nullam egestas, neque quis egestas tincidunt, urna velit cursus
          libero, nec tincidunt elit arcu nec libero. Vivamus non iaculis dui.
          Nullam tincidunt neque ac elit tristique, eget lacinia metus
          fermentum.
        </Text>
  
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    paddingBottom: 20, // Add padding to the bottom of the content to allow scrolling
  },
  caption: {
    fontSize: 16,
    marginBottom: 16,
  },
});
