import React, {useRef,useEffect,useState} from 'react';
import {StyleSheet,View,Text,Animated, PanResponder, Dimensions, LayoutAnimation} from 'react-native';
import {Card, Button} from 'react-native-elements';

const SCREEN_W = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_W;

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

const Ball = () => {
  const moveAnim = useRef(new Animated.ValueXY(0,0)).current;
  useEffect(()=>{
    Animated.spring(moveAnim, {toValue:{x:200,y:500}, velocity:1, useNativeDriver:false}).start(); 
  },[]);
  return <Animated.View style={moveAnim.getLayout()}>
    <View style={{width:60,height:60,borderRadius:30,borderWidth:30,borderColor:'black'}} />
  </Animated.View>
}

const Item = ({item,onSwipeLeft,onSwipeRight,offset}) => {
  let anim = useRef(new Animated.Value(0)).current;
  const pan = useRef(PanResponder.create({
    onStartShouldSetPanResponder: (evt,gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      anim.setValue(gestureState.dx);
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx > SWIPE_THRESHOLD) {
        Animated.timing(anim, {toValue: SCREEN_W*1.2, duration: 250, useNativeDriver:false}).start(onSwipeLeft);
      } else if (gestureState.dx < -SWIPE_THRESHOLD) {
        Animated.timing(anim, {toValue: -SCREEN_W*1.2, duration: 250,useNativeDriver:false}).start(onSwipeRight);
      } else {
        Animated.spring(anim, {toValue:0, useNativeDriver:false}).start();
      }
    }
  })).current;

  const {text, uri} = item;
  const rotate = anim.interpolate({inputRange:[-SCREEN_W/2, 0, SCREEN_W/2],outputRange:['-30deg','0deg','30deg']})
  return <Animated.View style={{left: anim, transform: [{rotate}], position: 'absolute', width: SCREEN_W, top: offset}}>
    <Card title={text} image={{uri}} {...pan.panHandlers}>
      <Text style={{marginBottom:8}}>Customized description #1211</Text>
      <Button icon={{name: 'code', color:'white'}} buttonStyle={{backgroundColor:'#f00'}} title='View Now!' />
    </Card>
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