import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabRoutes from './tab.routes';
import Car from '../pages/car';

const Stack = createStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pizzaria House"
        component={TabRoutes}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="car"
        options={{
          title: 'Meu carrinho',
        }}
        component={Car}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
