import React, {memo} from 'react';
import {TouchableOpacity,Text} from 'react-native';
import { myb1, mx1, center_text,py1,h3, corner_accent, c_red_light } from '../styles';

export default memo(({title,onPress})=>{
  return <TouchableOpacity style={[myb1,mx1,corner_accent,py1]} onPress={onPress}>
    <Text style={[center_text,h3,{color:c_red_light}]}>{title}</Text>
  </TouchableOpacity>
});
