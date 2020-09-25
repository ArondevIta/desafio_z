import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import Menuservice from '../../services/menuService';
import { useNavigation } from '@react-navigation/native';

const Menu: React.FC = () => {
  const [pizzas, setPizzas] = useState([]);
  const [pizzasIds, setPizzasIds] = useState<any[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function getPizzas() {
      setPizzas(await Menuservice.getMenu());
    }
    getPizzas();
  }, []);

  async function handleAdd(id: any) {
    const findPizzasIds = pizzasIds.find((value: any) => value === id);
    findPizzasIds
      ? setPizzasIds(pizzasIds.filter((value) => value !== id))
      : setPizzasIds([...pizzasIds, id]);
  }

  const isSelected = (value: any) => pizzasIds.includes(value);

  async function goToCart() {
    navigation.navigate('car', { pizzasIds });
    setPizzasIds([]);
  }

  return (
    <SafeAreaView>
      <Button
        title={`Adicionar ${pizzasIds.length} ao carrinho`}
        onPress={goToCart}
        buttonStyle={{ backgroundColor: '#DC143C' }}
        containerStyle={{ padding: 15 }}
      />
      <ScrollView>
        {pizzas.map((pizza: any) => (
          <CheckBox
            key={pizza.id}
            title={`${pizza.name} | R$ ${pizza.price}`}
            checked={isSelected(pizza.id)}
            onPress={() => handleAdd(pizza.id)}
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
