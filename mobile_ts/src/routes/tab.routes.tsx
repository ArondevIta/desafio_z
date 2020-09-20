import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home';
import Orders from '../pages/orders';
import Profile from '../pages/profile';
import Menu from '../pages/menu';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TabStack = createBottomTabNavigator();

const TabRoutes: React.FC = () => {
  return (
    <TabStack.Navigator>
      <TabStack.Screen name="INÍCIO" component={Home} />
      <TabStack.Screen name="PERFIL" component={Profile} />
      <TabStack.Screen name="CARDÁPIO" component={Menu} />
      <TabStack.Screen name="MEUS PEDIDOS" component={Orders} />
    </TabStack.Navigator>
  );
};

export default TabRoutes;
