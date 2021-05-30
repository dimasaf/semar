import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Journal, Log, Setting, AddJournal} from '../pages';
import {BottomNavigator} from '../components';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const stackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Journal"
        component={Journal}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Add" component={AddJournal} />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Daily Log" component={Log} />
      <Tab.Screen name="Journal" component={stackNav} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

export default Router;
