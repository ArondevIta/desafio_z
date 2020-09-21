import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './style';
import { Card, Input, Button, Avatar } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

const Profile: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Card
          containerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
          <Avatar
            rounded
            size="xlarge"
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
          />
        </Card>
        <Card>
          <Input placeholder="DDD + Telefone" />
          <Input placeholder="Senha" />
          <Button
            buttonStyle={{ backgroundColor: '#DC143C' }}
            title="Acessar"
          />
          <Text style={styles.restTextPassword}>Esqueci minha senha</Text>
        </Card>

        <Card containerStyle={{ marginTop: 20 }}>
          <Button
            type="clear"
            buttonStyle={{
              width: 350,
              display: 'flex',
              alignSelf: 'center',
            }}
            title="Novo Cadastro"
          />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
