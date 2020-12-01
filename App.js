import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.fillerContainer}></View>

      <View style={styles.titleContainer}>
        <Text style={[styles.baseStyle, styles.text, {fontStyle: "normal"}]}>
          HELLO!!!
        </Text>
        <Text style={[styles.baseStyle, {color: "red", fontWeight: "bold"}]}>
          I AM INEVITABLE. *snap
        </Text>
      </View>

        <View style={styles.fillerContainer}></View>

        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseStyle: {
    fontStyle: "italic",
    textAlign: "center",
  },
  text: {
    color: "maroon",
    fontSize: "36",
  },
  titleContainer: {
    backgroundColor: 'orange',
    width: "60%",
    flex: 2,
    padding: 10,
    margin: 10,
    justifyContent: "center",
    borderRadius: 20,
  },
  fillerContainer: {
    flex: 1,
    width: "50%",
    backgroundColor: 'skyblue',
  },
});
