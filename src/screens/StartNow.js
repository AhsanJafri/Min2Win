import {Button} from 'native-base';
import React from 'react';
import {
  StatusBar,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
var {height, width} = Dimensions.get('window');
const StartNow = (props) => {
  return (
    <>
      <StatusBar backgroundColor="tomato" />
      <View style={{flex: 1, backgroundColor: 'tomato', alignItems: 'center'}}>
        <View
          style={{
            height: '70%',
            width: '80%',
            marginTop: '15%',
          }}>
          <View style={{flex: 1}}></View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '2%',
            }}>
            <Image
              source={require('../assests/images/m.png')}
              style={{width: 50, height: 50}}
            />
            <Image source={require('../assests/images/i.png')} />
            <Image source={require('../assests/images/n.png')} />
            <Image source={require('../assests/images/u.png')} />
            <Image source={require('../assests/images/t.png')} />
            <Image source={require('../assests/images/e.png')} />
            <Image source={require('../assests/images/s.png')} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '2%',
            }}>
            <Image source={require('../assests/images/t.png')} />
            <Image source={require('../assests/images/o.png')} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '2%',
            }}>
            <Image source={require('../assests/images/w.png')} />
            <Image source={require('../assests/images/i.png')} />
            <Image source={require('../assests/images/n.png')} />
            <Image
              source={require('../assests/images/i.png')}
              style={{marginLeft: 20}}
            />
            <Image source={require('../assests/images/t.png')} />
          </View>
          <View style={{flex: 1}}></View>
          <View
            style={{
              height: '10%',
              width: '100%',
              borderRadius: 100,
              backgroundColor: '#2D2926',
            }}>
            <TouchableOpacity
              style={{
                height: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => props.navigation.navigate('Naming')}>
              <Text style={{color: '#FFFF', fontSize: 16}}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default StartNow;
