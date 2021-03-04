import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  Touchable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {TimerFunction, Progressbar} from '../components/index';
import {getQuestion} from '../constants/helper';
const {height, width} = Dimensions.get('screen');
const HEADER = height / 3 - 130;
const CONTENT = height - HEADER;
import {CommonActions} from '@react-navigation/native';

let correct = 0;
let allQues = [];
export class Game extends Component {
  constructor() {
    super();
    this.state = {
      timer: 0,
      question: [1],
    };
  }
  componentDidMount() {
    this.TimerFunction();
    this.setState({question: getQuestion(1)});
  }

  TimerFunction = () => {
    setInterval(() => {
      if (this.state.timer < 60) {
        this.setState({timer: this.state.timer + 1});
      } else {
        this.setState({timer: 0});
        this.props.navigation.navigate('GameOver', {
          correct: correct,
        });

        return;
      }
    }, 1000);
  };
  handleOnPressUpdate = (val) => {
    if (this.state.question.ans === val) {
      correct = correct + 1;
    }
    let i = Math.floor(Math.random() * Math.floor(15));
    if (allQues.indexOf(i) < 0) {
      setTimeout(() => {
        this.setState({question: getQuestion(i)});
      }, 500);
    }
    console.log('Correct :::', correct);
  };
  render() {
    const {timer} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            height: HEADER,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#FFFF',
          }}>
          <TimerFunction label={timer} />

          <Progressbar width={timer} />
        </View>
        <View style={{height: CONTENT}}>
          <View
            style={{
              height: CONTENT / 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: CONTENT * 0.035,
                alignItems: 'center',
                width: '90%',
                textAlign: 'center',
                alignSelf: 'center',
                fontFamily: 'serif',
              }}>
              {this.state.question.ques}
            </Text>
          </View>
          <View
            style={{
              height: CONTENT / 3,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: '40%',
                  height: '55%',
                  backgroundColor: 'tomato',
                  borderRadius: 15,
                }}
                onPress={() =>
                  this.handleOnPressUpdate(this.state.question.choice1)
                }>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    color: '#ffff',
                  }}>
                  {this.state.question.choice1}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: '40%',
                  height: '55%',
                  backgroundColor: 'tomato',
                  borderRadius: 15,
                }}
                onPress={() =>
                  this.handleOnPressUpdate(this.state.question.choice2)
                }>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    color: '#ffff',
                  }}>
                  {this.state.question.choice2}
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: '40%',
                  height: '55%',
                  backgroundColor: 'tomato',
                  borderRadius: 15,
                }}
                onPress={() =>
                  this.handleOnPressUpdate(this.state.question.choice3)
                }>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    color: '#ffff',
                  }}>
                  {this.state.question.choice3}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: '40%',
                  height: '55%',
                  backgroundColor: 'tomato',
                  borderRadius: 15,
                }}
                onPress={() =>
                  this.handleOnPressUpdate(this.state.question.choice4)
                }>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    color: '#ffff',
                  }}>
                  {this.state.question.choice4}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Game;
