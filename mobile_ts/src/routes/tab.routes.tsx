import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home';
import Orders from '../pages/orders';
import Profile from '../pages/profile';
import Menu from '../pages/menu';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TabStack = createBottomTabNavigator();

const TabRoutes: React.FC = () => {
  return (
    <TabStack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'home') {
            return <Icon name="home" size={size} color={color} />;
          } else if (route.name === 'profile') {
            return <Icon name="user" size={size} color={color} />;
          } else if (route.name === 'menu') {
            return <Icon name="file-alt" size={size} color={color} />;
          } else if (route.name === 'orders') {
            return <Icon name="shopping-cart" size={size} color={color} />;
          }
        },
      })}>
      <TabStack.Screen name="home" component={Home} />
      <TabStack.Screen name="menu" component={Menu} />
      <TabStack.Screen name="orders" component={Orders} />
      <TabStack.Screen name="profile" component={Profile} />
    </TabStack.Navigator>
  );
};

export default TabRoutes;
