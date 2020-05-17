import React, {memo} from 'react';
import {TouchableOpacity,Text} from 'react-native';
import { myb1, center_text,p1,h3, corner, c_green_dark } from '../styles';

export default memo(({title,onPress,marginH})=>{
  return <TouchableOpacity style={[myb1,corner(4),p1,{backgroundColor:c_green_dark,marginHorizontal:marginH}]} onPress={onPress}>
    <Text style={[center_text,h3,{color:'white'}]}>{title}</Text>
  </TouchableOpacity>
});
