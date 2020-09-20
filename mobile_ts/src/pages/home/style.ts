import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImg: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  info: {
    marginTop: 400,
    padding: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusOn: {
    color: 'green',
    fontWeight: 'bold',
  },
  infoStatus: {
    color: '#000',
    padding: 15,
    marginTop: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  infoHours: {
    marginTop: 15,
    padding: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
