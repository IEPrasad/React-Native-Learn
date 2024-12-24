import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  View, 
  TextInput
} from 'react-native';

export default function App() {
  return (
    <View style = {styles.container}>
      <TextInput style={styles.input} 
      placeholder="Enter your name here"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#8b8c81',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  
  input: {
    width: "90%",
    height: 45,
    backgroundColor: '#fff',
    padding: 15, 
    marginBottom: 10,
    borderRadius: 50,
  }
});
