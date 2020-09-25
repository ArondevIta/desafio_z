import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, SafeAreaView, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Card, Button } from 'react-native-elements';
import OrderService from '../../services/orderService';
import { useNavigation } from '@react-navigation/native';

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
  const [pizzas, setPizzas] = useState<IPizza[]>([]);

  const navigation = useNavigation();

  var total: any = pizzas.reduce(getTotal, 0);
  function getTotal(total: any, item: any) {
    return (total += item.price);
  }

  const getPizzas = useCallback(async () => {
    const pizzasSelected: IPizza[] = [];
    if (pizzasIds.length) {
      for (const pizza of pizzasIds) {
        const t = await OrderService.getById(pizza);
        pizzasSelected.push(t);
      }
    }
    setPizzas(pizzasSelected);
  }, [pizzasIds]);

  useEffect(() => {
    getPizzas();
  }, [getPizzas]);

  function handleOrder() {
    Alert.alert('Pedido finalizado!');
    navigation.navigate('home');
  }

  return (
    <>
      <SafeAreaView>
        <Card>
          <Card.Title>Carrinho</Card.Title>
          {pizzas?.map((pizza) => (
            <View key={pizza?.id}>
              <Card.Divider />
              <Text>{pizza?.name}</Text>
              <Text>R$ {pizza?.price}</Text>
            </View>
          ))}
        </Card>
      </SafeAreaView>

      <Card
        containerStyle={{
          flex: 1,
          position: 'absolute',
          bottom: 10,
          width: '95%',
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              width: '50%',
              backgroundColor: '#ccc',
              marginBottom: 5,
              padding: 8,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            TOTAL= {total}
          </Text>
          <Button
            buttonStyle={{ backgroundColor: '#DC143C' }}
            containerStyle={{
              width: '50%',
              marginLeft: 5,
            }}
            title="Finalizar Pedido"
            onPress={handleOrder}
          />
        </View>
      </Card>
    </>
  );
};

export default Car;
