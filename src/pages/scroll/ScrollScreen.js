import React,{useState} from 'react';
import {ScrollView,Animated, Text, useColorScheme} from 'react-native';
import TextInputA from '../../components/TextInputA';
import { p1 } from '../../styles';

const ScrollScreen = () => {
  const colorTheme = useColorScheme();
  const [name,setName] = useState(colorTheme);
  return (
    <ScrollView style={[p1]}>
      <Text>{name}</Text>
      <TextInputA label='PlaceHolder X' onChangeText={v=>setName(v)} />
    </ScrollView>
  )
}

export default ScrollScreen;