import {StyleSheet, Platform} from 'react-native';

const cardIOS = {
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.5,
  shadowRadius: 4,
  shadowColor: '#ccc',
}
const cardAndroid = { elevation: 4 }
export const card = Platform.OS === 'ios' ? cardIOS : cardAndroid;

// - - - Colors - - -
const c_black = '#3E363F';
export const c_black_trans = '#3E363F55'
const c_white = '#fffce8';
export const c_green_light = '#A4C3B2';
export const c_green_dark = '#6B9080';
export const c_red_light = '#ef5d60';
export const theme_white = {backgroundColor: c_white, color: c_black}

// - - - Size - - -
const text_small = 16
const text_medium = 22

// - - - Utils - - -
export const center = {justifyContent: 'center', alignItems: 'center'}
export const corner = r => ({borderRadius: r});
const cornerRadius = (r,color) => ({borderRadius:r,borderWidth:r/2,borderColor:color});
export const corner_accent = cornerRadius(5, c_red_light);

// - - - Distance - - -
export const m1 = { margin: 8 }
export const mx1 = {marginStart:8,marginEnd:8}
export const myt1 = { marginTop: 8 }
export const myb1 = { marginBottom: 8 }
export const myb2 = { marginBottom: 16 }
export const p1 = { padding: 8 }
export const p2 = {padding: 16}
export const px1 = { paddingHorizontal: 8 }
export const py1 = {paddingVertical:8}

// - - - Text - - -
export const h2 = {fontSize: text_medium,fontWeight:'bold'}
export const h3 = {fontSize: text_small,fontWeight:'bold'}
export const txt = {fontSize:text_small,color:c_black,fontFamily:'Arial'}
export const center_text = {textAlign:'center'}


const common = StyleSheet.create({
  container: {
    
  }
})

