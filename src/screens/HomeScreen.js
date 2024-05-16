// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Game Detail"
        onPress={() => navigation.navigate('GameDetail')}
      />
    </View>
  );
};

export default HomeScreen;
