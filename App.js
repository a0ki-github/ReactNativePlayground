import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const numbers = [...Array(100)].map((_, i) => "hoge" + i)

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Hello World!</Text>
      <Greeting name="Bob" />
      <Greeting name="Mike" />
      <Button
        onPress={() => setCount(count + 1)}
        title="Add Count."
      />
      <Text>Current count is {count}</Text>
      {numbers.map((number) => (
        <Text>{number}</Text>
      ))}
    </View>
  );
}

const Greeting = (props) => {
  return (
    <View>
      <Text>Hello {props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
