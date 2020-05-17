import React, {memo} from 'react';
import {TouchableOpacity,Text} from 'react-native';
import { myb1, mx1, center_text,py1,h3, corner, c_green_dark } from '../styles';

export default memo(({title,onPress})=>{
  return <TouchableOpacity style={[myb1,mx1,corner(4),py1,{backgroundColor:c_green_dark}]} onPress={onPress}>
    <Text style={[center_text,h3,{color:'white'}]}>{title}</Text>
  </TouchableOpacity>
});
