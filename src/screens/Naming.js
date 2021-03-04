import React, {Component} from 'react';

import {
  StatusBar,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
var {height, width} = Dimensions.get('window');

import {CommonActions} from '@react-navigation/native';
export class Naming extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Game'}],
        }),
      );
    }, 3000);
  }
  render() {
    const {Timer} = this.state;
    return (
      <>
        <StatusBar backgroundColor="tomato" />
        <View
          style={{
            flex: 1,
            backgroundColor: 'tomato',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: '70%',
              width: '80%',
            }}>
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
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: height * 0.04,
                  fontFamily: 'serif',
                  textAlign: 'center',
                }}>
                We Are Collecting Question. Game Will Start Soon
              </Text>
            </View>
          </View>
        </View>
      </>
    );
  }
}

export default Naming;
