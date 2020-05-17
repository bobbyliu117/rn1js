import React from 'react';
import {Modal,View,Text, StyleSheet} from 'react-native';
import { center, card, txt, theme_white, h2, corner, p2, myb1,myb2, center_text, c_black_trans, myt1 } from '../styles';
import ButtonA from './ButtonA';


export default ({title, message, isOpen, close}) => {

  return (
    <Modal style={[{marginTop:180}]} animationType='fade' visible={isOpen} statusBarTranslucent={true} transparent={true}>
      <View onStartShouldSetResponder={()=>true} onResponderRelease={close} style={[center,{flex:1,backgroundColor:c_black_trans}]}>
        <View style={[card,p2,theme_white,corner(8),{minWidth:220}]}>
          <Text style={[h2,myb1]}>{title}</Text>
          <Text style={[txt,myb2]}>{message}</Text>
          <View style={[{flexDirection:'row-reverse',justifyContent:'space-between'},myt1]}>
            <ButtonA title='Okay' onPress={close} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

