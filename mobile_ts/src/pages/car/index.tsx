import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Card, ListItem } from 'react-native-elements';
// import { Container } from './styles';
interface Params {
  pizzasId: [
    {
      id: number;
      name: string;
    },
  ];
}

const Car: React.FC = () => {
  const route = useRoute();
  const routeParams = route.params as Params;
  return (
    <View>
      {routeParams.pizzasId.map((p) => (
        <Text>{p.name}</Text>
      ))}
    </View>
  );
};

export default Car;
