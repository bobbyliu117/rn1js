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
const c_white = '#fffce8';
export const c_green_light = '#A4C3B2';
export const c_green_dark = '#6B9080';
export const c_red_light = '#ef5d60';
export const theme_white = {backgroundColor: c_white, color: c_black}
export const theme_primary = {backgroundColor: c_green_dark, color: c_white}
export const theme_accent_outline = {backgroundColor: 'white', color: c_red_light}

// - - - Utils - - -
export const center = {justifyContent: 'center', alignItems: 'center'}
const cornerRadius = (r,color) => ({borderRadius:r,borderWidth:r/2,borderColor:color});
export const corner_primary = cornerRadius(4,c_green_dark);
export const corner_accent = cornerRadius(6, c_red_light);

// - - - Distance - - -
export const m1 = { margin: 8 }
export const mx1 = {marginStart:8,marginEnd:8}
export const myb1 = { marginBottom: 8 }
export const p1 = { padding: 8 }
export const px1 = { paddingHorizontal: 8 }
export const py1 = {paddingVertical:8}

// - - - Text - - -
export const h3 = {fontSize: 16,fontWeight:'bold'}
export const center_text = {textAlign:'center'}


const common = StyleSheet.create({
  container: {
    
  }
})

