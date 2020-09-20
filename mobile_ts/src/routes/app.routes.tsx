import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/home';
import TabRoutes from './tab.routes';

const Stack = createStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pizzaria House" component={TabRoutes} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
