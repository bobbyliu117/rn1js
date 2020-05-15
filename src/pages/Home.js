import React from 'react';
import { View, Button } from 'react-native';

const TWILLIO_NUMBER = '+14302314759'

const Home = ({navigation}) => {
  return (
    <View>
      <Button title='To Animated' onPress={()=>navigation.navigate('AnimatedScreen')} />
    </View>
  )
}

export default Home;