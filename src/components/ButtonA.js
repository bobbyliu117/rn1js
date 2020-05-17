import React, {memo} from 'react';
import {TouchableOpacity,Text} from 'react-native';
import { theme_primary, myb1, mx1, corner_primary, center_text,py1,h3 } from '../styles';

export default memo(({title,onPress})=>{
  return <TouchableOpacity style={[myb1,mx1,corner_primary]} onPress={onPress}>
    <Text style={[theme_primary, center_text,py1,h3]}>{title}</Text>
  </TouchableOpacity>
});
