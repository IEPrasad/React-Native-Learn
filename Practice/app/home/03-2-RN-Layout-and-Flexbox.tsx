import react from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// hove to define default app

const FlexLayout = () => {
  return (
    <View style={[styles.container, {

      // Try setting `flexDirection` to `"COLUMN"`.
      flexDirection: "column" 
     }]}>

      <View style={{ flex: 1, backgroundColor: "#0000ff" }} /> 
        { /* either use the color code */}
      <View style={{ flex: 2, backgroundColor: "cyan"}} />
        { /* or the color name*/}
      <View style={{ flex: 3, backgroundColor: "skyblue"}} /> 

    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    padding: 20,
  },
});
