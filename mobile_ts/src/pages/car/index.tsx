import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Card } from 'react-native-elements';
import OrderService from '../../services/orderService';

interface Params {
  pizzasIds: number[];
}

interface IPizza {
  id: number;
  name: string;
  price: number;
}

const Car: React.FC = () => {
  const route = useRoute();
  const { pizzasIds } = route.params as Params;
  console.log(route);

  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  console.log(pizzasIds);

  const getPizzas = useCallback(async () => {
    const pizzasSelected: IPizza[] = [];
    if (pizzasIds.length) {
      for (const pizza of pizzasIds) {
        const t = await OrderService.getById(pizza);
        console.log('LINHA 25', pizza);
        pizzasSelected.push(t);
      }
    }
    setPizzas(pizzasSelected);
  }, [pizzasIds]);

  useEffect(() => {
    getPizzas();
  }, [getPizzas]);

  return (
    <SafeAreaView>
      <Card>
        <Card.Title>Pedidos</Card.Title>
        {pizzas?.map((pizza) => (
          <View key={pizza?.id}>
            <Card.Divider />
            <Text>{pizza?.name}</Text>
            <Text>R$ {pizza?.price}</Text>
          </View>
        ))}
      </Card>
    </SafeAreaView>
  );
};

export default Car;
