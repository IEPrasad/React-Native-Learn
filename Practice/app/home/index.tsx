import react from 'react';
import {
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
} from 'react-native';

// Create a functional Component 
const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Page!</Text>
    </View>
  );
};

// Define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },

});

export default Home;