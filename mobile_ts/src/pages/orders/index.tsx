import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import OrderService from '../../services/orderService';
import { ListItem, Card } from 'react-native-elements';
import { useNavigation, useRoute } from '@react-navigation/native';

interface Data {
  id: number;
  name: string;
  product: string;
  status: string;
}

const Orders = () => {
  const [orders, setOrders] = useState<Data[]>();
  const keyExtractor = (item: any, index: any) => index.toString();

  useEffect(() => {
    async function getOrders() {
      setOrders(await OrderService.getOrders());
      console.log(orders);
    }

    getOrders();
  }, []);

  const RenderOrders = (data: Data) => {
    return <></>;
  };

  return (
    <SafeAreaView>
      <Card>
        <Card.Title>Meus pedidos</Card.Title>
        {orders?.map((order) => (
          <View key={order?.id}>
            <Card.Divider />
            <Text>{order?.name}</Text>
            <Text>{order?.product}</Text>
            <Text>{order?.status}</Text>
          </View>
        ))}
      </Card>
    </SafeAreaView>
  );
};

export default Orders;
