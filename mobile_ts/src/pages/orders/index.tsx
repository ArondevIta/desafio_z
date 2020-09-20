import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import OrderService from '../../services/orderService';
import { ListItem } from 'react-native-elements';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const keyExtractor = (item: any, index: any) => index.toString();

  useEffect(() => {
    async function getOrderss() {
      setOrders(await OrderService.getOrders());
    }
    getOrderss();
  }, []);

  const RenderOrder = (props: any) => {
    const { item } = props;

    return (
      <ListItem key={item.id} bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={orders}
        renderItem={RenderOrder}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default Orders;
