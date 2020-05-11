import React from 'react';
import {StyleSheet,View,Text,Button,StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab1 = ({route,navigation}) => (
  <View style={styles.container}>
    <Text>Tab1: {route.params.data}</Text>
    <Button title="To Stack1" onPress={()=>navigation.navigate('Tab2', {screen: 'Stack1', params:{data: 'From Tab1'}})} />
  </View>
);
const Stack = createStackNavigator();
const Tab2 = () => (
  <Stack.Navigator initialRouteName="Stack1">
    <Stack.Screen name="Stack1" component={Stack1} options={{headerTintColor:'#fff'}} initialParams={{data: '@ Stack1'}} />
    <Stack.Screen name="Stack2" component={Stack2} initialParams={{data:'@ Stack2'}} />
  </Stack.Navigator>
);

const Stack1 = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text>Stack1: {route.params.data}</Text>
      <Button title="To Stack2" onPress={()=>navigation.navigate('Stack2',{data:'From Stack1'})} />
    </View>
  );
}
const Stack2 = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text>Stack2: {route.params.data}</Text>
      <Button title="To Tab1" onPress={()=>navigation.navigate('Tab1', {data:'From Stack2'})} />
    </View>
  );
}

const Tab = createBottomTabNavigator();
const FirstScreen = () => (
  <Tab.Navigator>
    <Tab.Screen name="Tab1" component={Tab1} initialParams={{data: '@ Tab1'}}/>
    <Tab.Screen name="Tab2" component={Tab2} />
  </Tab.Navigator>
);
const App = () => {
  return (
    <NavigationContainer>
      <FirstScreen />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  }
});

export default App;
