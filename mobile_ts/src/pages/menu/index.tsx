import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import Menuservice from '../../services/menuService';
import { useNavigation } from '@react-navigation/native';

const Menu: React.FC = () => {
  const [pizzas, setPizzas] = useState([]);
  const [pizzasId, setPizzasId] = useState<any[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function getPizzas() {
      setPizzas(await Menuservice.getMenu());
    }
    getPizzas();
  }, []);

  async function handleAdd(id: any, name: string) {
    const findPizzasId = pizzasId.find((value: any) => value === id);
    findPizzasId
      ? setPizzasId(pizzasId.filter((value) => value !== id))
      : setPizzasId([...pizzasId, [id, name]]);
  }

  const isSelected = (value: any) => pizzasId.includes(value);

  async function getOrder() {
    navigation.navigate('car', { pizzasId });
  }

  return (
    <SafeAreaView>
      <Button
        title={`Adicionar ${pizzasId.length} ao pedido`}
        onPress={getOrder}
      />
      <ScrollView>
        {pizzas.map((pizza: any) => (
          <CheckBox
            key={pizza.id}
            title={pizza.name}
            checked={isSelected(pizza.id)}
            onPress={() => handleAdd(pizza.id, pizza.name)}
            iconType="material"
            checkedIcon="circle"
            uncheckedIcon="circle"
            checkedColor="red"
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menu;
