import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './style';
import { Card, Input, Button } from 'react-native-elements';

const Profile: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.profileText}>Meu Perfil</Text>
      <Card>
        <Input placeholder="DDD + Telefone" />
        <Input placeholder="Senha" />
        <Button buttonStyle={{ backgroundColor: '#DC143C' }} title="Acessar" />
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
    </View>
  );
};

export default Profile;
