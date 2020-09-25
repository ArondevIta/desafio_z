import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import OrderService from '../../services/orderService';
import { Card } from 'react-native-elements';

interface Data {
  id: number;
  name: string;
  product: string;
  status: string;
}

const Orders = () => {
  const [orders, setOrders] = useState<Data[]>();

  useEffect(() => {
    async function getOrders() {
      setOrders(await OrderService.getOrders());
    }

    getOrders();
  }, []);

  return (
    <SafeAreaView>
      <Card>
        <Card.Title>Histórico de pedidos</Card.Title>
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
