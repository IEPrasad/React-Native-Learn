/*
React Native State 

  ** There are two types of data that control a component : props and state.
  props are set by the parent, and they are fixed throughout the lifetime of a 
  component. For data that is going to change, we have to use state.
  
*/

import { StatusBar } from 'expo-status-bar';
import react, {useState} from 'react';
import {
  StyleSheet, 
  View, 
  Button, 
  Text,
} from 'react-native';

const App = () => {
  const [data, setData] = useState(0)

  return (
    <View style = {styles.container}>
      <Button onPress ={()=>setData(data + 1)} title="Update state" />
      <Text style={styles.textStyle}>{data}</Text>
      <StatusBar style='auto' />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b8c81',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {  
    backgroundColor: '#FFD700',
    padding: 55,
    width: "100%",
    color: "#FFD700",
  },

  textStyle: {
    fontSize: 100,
  }
});

// Button can't style like this 
// style={styles.buttonContainer} 