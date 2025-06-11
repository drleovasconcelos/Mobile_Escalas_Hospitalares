import React from 'react';
import { SafeAreaView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Botao = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.botaoContainer}>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.texto}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Perfil')}>
        <Text style={styles.texto}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Configurações')}>
        <Text style={styles.texto}>Configurações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.texto}>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  botaoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  botao: {
    backgroundColor: '#9078D8',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5, // Espaço entre os botões
  },
  texto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Botao;