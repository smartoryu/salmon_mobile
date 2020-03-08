import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

// import HomeNav from './HomeNav';
import {Home} from './Home';
import {Logout} from './Logout';

const ScreenOption = ({route}) => {
  return {
    tabBarIcon: ({focused, color, size}, iconName = '') => {
      // if (route.name === 'HomeNav') {
      if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home';
      } else if (route.name === 'Logout') {
        iconName = focused ? 'restaurant-menu' : 'restaurant-menu';
      }
      return <Icon name={iconName} size={size} color={color} />;
    },
  };
};

export const MainTab = ({navigation}) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={ScreenOption}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Logout"
        component={() => {
          return <Logout rootStack={navigation} />;
        }}
      />
    </Tab.Navigator>
  );
};
