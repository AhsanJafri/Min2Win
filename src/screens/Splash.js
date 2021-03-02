import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Animated} from 'react-native';

export default class Splash extends Component {
  constructor() {
    super();
    this.state = {
      View1: new Animated.Value(1),
      View2: new Animated.Value(0),
      View3: new Animated.Value(0),
      View4: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.animation();
  }

  animation = () => {
    Animated.sequence([
      Animated.timing(this.state.View1, {
        toValue: 0,
        duration: 2000,
      }),
      Animated.timing(this.state.View2, {
        toValue: 1,
        duration: 1500,
      }),
      Animated.timing(this.state.View2, {
        toValue: 0,
        duration: 1000,
      }),
      Animated.timing(this.state.View3, {
        toValue: 1,
        duration: 1500,
      }),
      Animated.timing(this.state.View3, {
        toValue: 0,
        duration: 1000,
      }),

      Animated.timing(this.state.View4, {
        toValue: 1,
        duration: 1500,
      }),
    ]).start(() => this.props.navigation.navigate('Main'));
  };

  render() {
    const {View1, View2, View3, View4} = this.state;
    const size = View4.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [0, 1, 1, 1, 50],
    });

    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        {/* <Animated.View
          style={{ flexDirection: "row", position: "absolute", opacity: View1 }}
        >
          <Image source={require("../../assets/D.png")} />
          <Image source={require("../../assets/O.png")} />
          <Image source={require("../../assets/N.png")} />
          <Image source={require("../../assets/E.png")} />
        </Animated.View>
        <Animated.View
          style={{ flexDirection: "row", position: "absolute", opacity: View2 }}
        >
          <Image source={require("../../assets/W.png")} />
          <Image source={require("../../assets/I.png")} />
          <Image source={require("../../assets/T.png")} />
          <Image source={require("../../assets/H.png")} />
        </Animated.View>
        <Animated.View
          style={{ flexDirection: "row", position: "absolute", opacity: View3 }}
        >
          <Image source={require("../../assets/I.png")} />
          <Image source={require("../../assets/T.png")} />
        </Animated.View>

        <Animated.View
          style={{ flexDirection: "row", position: "absolute", opacity: View4 }}
        >
          <Animated.Image
            source={{
              uri:
                "https://media.istockphoto.com/photos/check-mark-picture-id1093915024?k=6&m=1093915024&s=612x612&w=0&h=CghyYdBSZWCnyB-Tv8X4NP74pzWcsp6Kw2VXndnmxDo=",
            }}
            style={{
              height: 300,
              width: 300,
              borderRadius: 150,
              transform: [{ scale: size }],
            }}
          />
        </Animated.View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
  },
  views: {
    flexDirection: 'row',
    position: 'absolute',
  },
});
