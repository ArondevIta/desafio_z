import { useEffect, useState } from 'react';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './style';
import { CheckBox, ListItem } from 'react-native-elements';
import Menuservice from '../../services/menuService';
import { FlatList } from 'react-native-gesture-handler';

const Menu: React.FC = () => {
  const [pizzas, setPizzas] = useState([]);
  const order: any = [];

  async function getPizzas() {
    setPizzas(await Menuservice.getMenu());
  }

  useEffect(() => {
    getPizzas();
  }, []);

  function setCheck(name: any) {
    order.push(name);
    console.log(order);
  }

  return (
    <SafeAreaView>
      {pizzas.map((pizza: any) => (
        <CheckBox
          key={pizza.id}
          title={pizza.name}
          checked={false}
          onPress={() => setCheck(pizza.name)}
          iconType="material"
          checkedIcon="run_circle"
          uncheckedIcon="circle"
          checkedColor="red"
        />
      ))}
    </SafeAreaView>
  );
};

export default Menu;
