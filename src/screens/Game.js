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

export class Game extends Component {
  constructor() {
    super();
    this.state = {
      timer: 0,
      question: [],
      correct: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({timer: this.state.timer + 1});
    }, 1000);
    this.setState({question: getQuestion()});
  }

  handleOnPressUpdate = (val) => {
    if (this.state.question.ans === val) {
      this.setState({correct: this.state.correct + 1});
    }
    setTimeout(() => {
      this.setState({question: getQuestion()});
    }, 500);
    console.log('Correct :::', this.state.correct);
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
          }}>
          <TimerFunction label={timer} />

          <Progressbar width={timer} />
        </View>
        <View style={{height: CONTENT, borderWidth: 1}}>
          <View
            style={{
              height: CONTENT / 3,
              borderWidth: 1,
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
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                width: '80%',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() =>
                  this.handleOnPressUpdate(this.state.question.choice1)
                }>
                <Text>{this.state.question.choice1}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  this.handleOnPressUpdate(this.state.question.choice2)
                }>
                <Text>{this.state.question.choice2}</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                width: '80%',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() =>
                  this.handleOnPressUpdate(this.state.question.choice3)
                }>
                <Text>{this.state.question.choice3}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  this.handleOnPressUpdate(this.state.question.choice4)
                }>
                <Text>{this.state.question.choice4}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Game;
