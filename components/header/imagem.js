import { View, Image, StyleSheet } from 'react-native';

const Imagem = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.imagem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100, 
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  imagem: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default Imagem;
