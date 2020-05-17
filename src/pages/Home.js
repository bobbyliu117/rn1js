import React, { useState, useEffect, useCallback } from 'react';
import { View, StatusBar, FlatList, RefreshControl } from 'react-native';
import ButtonA from '../components/ButtonA';
import {c_green_light,c_green_dark, p1} from '../styles'
import ButtonB from '../components/ButtonB';
import ModalA from '../components/ModalA';

const DATA = [
  {id: 1, page: 'AnimatedScreen'},
  {id: 2, page: 'ScrollScreen'}
];

const HomeItem = ({item, onPress}) => <ButtonA onPress={onPress} title={item.page} />

const Home = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useCallback(page => navigation.navigate(page), [navigation]);

  useEffect(()=>{
    if(refreshing) {
      const timer = setTimeout(()=>setRefreshing(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [refreshing]);
  const refreshControl = <RefreshControl colors={[c_green_light,c_green_dark]} tintColor={c_green_light} title='Loading' titleColor={c_green_light} onRefresh={()=>setRefreshing(true)} refreshing={refreshing} />
  return (
    <View style={[{flex:1},p1]}>
      <StatusBar barStyle='dark-content' />
      <ButtonB title='To Animated' onPress={()=>setIsOpen(true)} />
      <FlatList refreshControl={refreshControl} keyExtractor={item=>String(item.id)} data={DATA} renderItem={({item})=> <HomeItem item={item} onPress={()=>navigate(item.page)} />}/>
      <ModalA isOpen={isOpen} close={()=>setIsOpen(false)} title='Ring!' message='This is a demo modal' />
    </View>
  )
}

export default Home;