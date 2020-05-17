import React, { useRef, useState } from 'react';
import { TextInput,View,Animated, Easing, Platform } from 'react-native';
import { isIOS, underline, c_green_dark } from '../styles';

const padding = isIOS && {marginTop:16,paddingBottom:8};

export default ({label,onChangeText}) => {
  const [input, setInput] = useState('');
  const anim = useRef(new Animated.Value(20)).current;
  const animLineHeight = anim.interpolate({inputRange:[10,20],outputRange:[20,50]});
  const animFontSize = anim.interpolate({inputRange:[10,20],outputRange:[10,16]});
  const animColor = anim.interpolate({inputRange:[10,20],outputRange:[c_green_dark,'#ccc']});

  const onFocus = (focus) => {
    if(!focus && input !== '') return;
    const v = focus ? 10 : 20
    Animated.timing(anim,{toValue:v,duration:150,easing:Easing.elastic(),useNativeDriver:false}).start();
  }
  const onText = v => {
    onChangeText(v);
    setInput(v);
  }
  return (
    <View style={{height:70,justifyContent:'flex-end'}}>
      <Animated.Text style={{position:'absolute',top:anim,textAlignVertical:'center',fontSize:animFontSize,lineHeight:animLineHeight,color:animColor}}>{label}</Animated.Text>
      <TextInput onChangeText={onText} style={[padding,underline('darkgray')]} onFocus={()=>onFocus(true)} onBlur={()=>onFocus(false)} />
    </View>
  )
}