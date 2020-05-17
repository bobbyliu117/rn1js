import React, { useState, useEffect, useCallback } from 'react';
import { View, StatusBar, FlatList, RefreshControl } from 'react-native';
import ButtonA from '../components/ButtonA';
import {c_green_light,c_green_dark} from '../styles'
import ButtonB from '../components/ButtonB';

const DATA = [
  {id: 1, page: 'AnimatedScreen'}
];

const HomeItem = ({item, onPress}) => <ButtonA onPress={onPress} title={item.page} />

const Home = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const navigate = useCallback(page => navigation.navigate(page), [navigation]);

  useEffect(()=>{
    if(refreshing) {
      const timer = setTimeout(()=>setRefreshing(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [refreshing]);
  const refreshControl = <RefreshControl colors={[c_green_light,c_green_dark]} tintColor={c_green_light} title='Loading' titleColor={c_green_light} onRefresh={()=>setRefreshing(true)} refreshing={refreshing} />
  return (
    <View style={{flex:1}}>
      <StatusBar barStyle='dark-content' />
      <ButtonB title='To Animated' onPress={()=>navigate('AnimatedScreen')} />
      <FlatList refreshControl={refreshControl} keyExtractor={item=>String(item.id)} data={DATA} renderItem={({item})=> <HomeItem item={item} onPress={()=>navigate(item.page)} />}/>
    </View>
  )
}

export default Home;