import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  return (
    <ScrollView>
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
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => Alert.alert("title", item.title)}
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
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
