import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AnimatedScreen from './pages/Animated/animated';
import HomeScreen from './pages/Home';
import { UIManager } from 'react-native';
import ScrollScreen from './pages/scroll/ScrollScreen';

const Stack = createStackNavigator();
const screenHome = {name: HomeScreen.name, component: HomeScreen}
const screenAnimated = {name: AnimatedScreen.name, component: AnimatedScreen}
const screenScroll = {name: ScrollScreen.name, component: ScrollScreen}

const Root = () => (
  <Stack.Navigator initialRouteName={HomeScreen.name}>
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
