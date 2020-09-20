import React from 'react';
import { styles } from './style';
import {
  SafeAreaView,
  ScrollView,
  Text,
  ImageBackground,
  Image,
} from 'react-native';
import { ListItem, Card } from 'react-native-elements';

const Home: React.FC = () => {
  const days = [
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
    'Domingo',
  ];

  const pay = require('../../assets/pay.jpg');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          style={styles.backgroundImg}
          source={require('../../assets/background.jpg')}>
          <Text style={styles.info}>
            Delivery somente para bairros e condomínios cadstradors, ITABUNA-BA
          </Text>
        </ImageBackground>
        <Text style={styles.infoStatus}>
          Estamos <Text style={styles.statusOn}>Online</Text> no momento
        </Text>
        <Text style={styles.infoHours}>Horário de atendimento</Text>
        {days.map((day) => (
          <ListItem key={day} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{day}</ListItem.Title>
              <ListItem.Subtitle>
                <Text style={{ backgroundColor: '#ccc' }}> 16:00 as 23:30</Text>
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
        <Card>
          <Card.Title>Formas de pagamento</Card.Title>
          <Image source={pay} style={{ width: 320 }} />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
