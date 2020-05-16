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
export const bg_white = {backgroundColor: 'white', color: 'red'}

// - - - Distance - - -
export const m1 = { margin: 8 }
export const myb1 = { marginBottom: 8 }
export const p1 = { padding: 8 }
export const px1 = { paddingHorizontal: 8 }

// - - - Text - - -
export const h3 = {fontSize: 16,fontWeight:'bold'}

const common = StyleSheet.create({
  container: {
    
  }
})

