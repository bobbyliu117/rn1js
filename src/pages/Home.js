import React from 'react';
import { View, Button, StatusBar } from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <StatusBar barStyle='dark-content' />
      <Button title='To Animated' onPress={()=>navigation.navigate('AnimatedScreen')} />
    </View>
  )
}

export default Home;