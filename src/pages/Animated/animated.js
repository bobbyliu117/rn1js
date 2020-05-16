import React, {useRef,useEffect,useState} from 'react';
import {View,Text,Animated, PanResponder, LayoutAnimation, Button} from 'react-native';
import { Image,useWindowDimensions } from 'react-native';
import {card,bg_white, m1, h3, p1, px1, myb1} from '../../styles';

const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

const Item = ({item,onSwipeLeft,onSwipeRight,offset}) => {
  // Screen size
  const screenW = useWindowDimensions().width;
  // Animation
  let anim = useRef(new Animated.Value(0)).current;
  const rotate = anim.interpolate({inputRange:[-screenW/2, 0, screenW/2],outputRange:['-30deg','0deg','30deg']})
  // Gesture
  const pan = useRef(PanResponder.create({
    onStartShouldSetPanResponder: (evt,gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      anim.setValue(gestureState.dx);
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx > screenW/4) {
        Animated.timing(anim, {toValue: screenW*2, duration: 250, useNativeDriver:false}).start(onSwipeLeft);
      } else if (gestureState.dx < -screenW/4) {
        Animated.timing(anim, {toValue: -screenW*2, duration: 250,useNativeDriver:false}).start(onSwipeRight);
      } else {
        Animated.spring(anim, {toValue:0, useNativeDriver:false}).start();
      }
    }
  })).current;

  const {text, uri} = item;
  return <Animated.View style={{left: anim, transform: [{rotate}], position: 'absolute', width: screenW, top: offset}}>
    <View style={[card,bg_white,m1]} {...pan.panHandlers}>
      <Image source={{uri}} style={{minHeight:180}} resizeMode='cover'/>
      <Text style={[h3,p1]}>{text}</Text>
      <Text style={[px1,myb1]}>Customized description #1211</Text>
      <Button title='View Now!' />
    </View>
  </Animated.View>
}

const AnimatedScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swipe = (direction, item) => {
    LayoutAnimation.spring();
    setCurrentIndex(prev => prev + 1);
  }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      { currentIndex === DATA.length ? <Text style={{color:'#ccc',fontSize:18}}>NO MORE</Text> :
      DATA.map((item, index) => <Item key={item.id} item={item} onSwipeLeft={()=>swipe('left', item)} onSwipeRight={()=>swipe('right',item)} offset={(index-currentIndex)*10} />).reverse()}
    </View>
  );
}

export default AnimatedScreen;