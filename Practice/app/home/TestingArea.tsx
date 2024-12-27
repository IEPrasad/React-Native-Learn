import React, {useState} from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity,} from 'react-native';

type CatProps = {
  name: string;
};

const Cat = (props: CatProps) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Give me some food, please!' : 'Thank you!'}
      />
      <Button title="Click Me" onPress={() => alert('Button pressed!')} /> 
        {/* // This is for check about the behavior of the button */}
      
      <View>
        <TouchableOpacity onPress={() => alert('Pressed')}>
          <Text style={styles.custom}>Custom Button</Text>
        </TouchableOpacity>
      </View>
        

    </View>

  );
};

const Cafe = () => {
  return (
    <>
      <Cat name="Munkustrap" />
      <Cat name="Spot" />
    </>
  );
};

const styles = StyleSheet.create ({
  custom: {
    color: 'red',
    backgroundColor: 'yellow',
  }
});

export default Cafe;