import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AnimatedScreen from './pages/Animated/animated';
import HomeScreen from './pages/Home';
import { UIManager } from 'react-native';
import ScrollScreen from './pages/scroll/ScrollScreen';

const Stack = createStackNavigator();
const screenHome = {name: 'HomeScreen', component: HomeScreen}
const screenAnimated = {name: 'AnimatedScreen', component: AnimatedScreen}
const screenScroll = {name: 'ScrollScreen', component: ScrollScreen}

const Root = () => (
  <Stack.Navigator initialRouteName={'HomeScreen'}>
    <Stack.Screen {...screenHome} />
    <Stack.Screen {...screenAnimated} />
    <Stack.Screen {...screenScroll} />
  </Stack.Navigator>
);

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const App = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};

export default App;
