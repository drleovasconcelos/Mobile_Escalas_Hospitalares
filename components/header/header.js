import { View, StyleSheet, Text } from 'react-native';
import Imagem from './imagem'; // Certifique-se de que o nome do arquivo está correto (letra maiúscula)

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Paciente: 0001</Text>
      <Imagem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#2D4E91',
    height: 100,
    flexDirection: 'row', // Alinha elementos na horizontal
    alignItems: 'center', // Alinha verticalmente
    justifyContent: 'space-between', // Mantém o texto à esquerda e a imagem à direita
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});

