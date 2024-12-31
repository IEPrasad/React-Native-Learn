// Positioning Elements with Flex

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class FlexDirection extends Component {
  reder () {
    return (
      // Try setting 'justifyContent' to 'center'.
      // Try setting 'flexDirection' to 'row'.

      <View style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'red'}}/>
        <View style={{width: 50, height: 50, backgroundColor: 'blue'}}/>
        <View style={{width: 50, height: 50, backgroundColor: 'green'}}/>
      </View>
    );
  }
}
