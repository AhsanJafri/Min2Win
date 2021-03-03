import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from '../screens/Splash';
import Game from '../screens/Game';
import GameOver from '../screens/GameOver';
import StartNow from '../screens/StartNow';
import Naming from '../screens/Naming';

import {navOptionHandler} from '../constants/functions';

const Stack = createStackNavigator();

function StackRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={navOptionHandler}
        />
        <Stack.Screen name="Game" component={Game} options={navOptionHandler} />
        <Stack.Screen
          name="GameOver"
          component={GameOver}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="StartNow"
          component={StartNow}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="Naming"
          component={Naming}
          options={navOptionHandler}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackRoute;
