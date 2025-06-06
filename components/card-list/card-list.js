import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';

export default function CardList({ navigation }) {
  // Dados simulados para os cards
  const data = [
    { id: '1', title: 'Escala de Coma de Glasgow Atualizada', description: 'Mede o nível de consciência de pacientes neurológicos.' , screen: 'Glasgow' },
    { id: '2', title: 'Escala de Ramsay', description: 'Avalia o nível de sedação em pacientes internados.' , screen: 'Ramsay' },
    { id: '3', title: 'Escala de Sedação-Agitação de Richmond (RASS)', description: 'Determina o grau de sedação ou agitação em UTI.', screen: 'Rass' },
    { id: '4', title: 'Medical Research Council (MRC)', description: 'Mede a força muscular em exames clínicos.' , screen: 'MRC' },
    { id: '5', title: 'Escala de Rankin', description: 'Classifica o nível de incapacidade após um AVC.' , screen: 'Rankin'},
    { id: '6', title: 'Escala de Wexler', description: 'Avalia a função cognitiva em pacientes neurológicos.' , screen: 'Wexler' },
    { id: '7', title: 'Escala de Ashworth Modificada', description: 'Determina o grau de espasticidade muscular.' , screen: 'Ashworth'},
    { id: '8', title: 'Escala CAM-ICU', description: 'Diagnostica delirium em pacientes de terapia intensiva.', screen: 'CAMICU' },
    // { id: '9', title: 'Escala Comportamental de Dor (BPS)', description: 'Avalia a dor em pacientes não comunicativos.' },
    // { id: '10', title: 'Escala de Imobilidade em UTI (EMU)', description: 'Mede o nível de mobilidade de pacientes críticos.' },
    // { id: '11', title: 'Escore APACHE II ', description: 'Prediz a mortalidade de pacientes internados em UTI.' },
    // { id: '12', title: 'Índice de Barthel Modificado', description: 'Avalia a independência funcional nas atividades diárias.' },
    { id: '13', title: 'Escala de Cincinnati', description: 'Identifica sinais de AVC de forma rápida e eficiente.' , screen: 'Cincinnati' },
    // { id: '13', title: 'Escala Pré-hospitalar para AVC de Los Angeles (LAPSS) ', description: 'Diagnostica AVC no atendimento pré-hospitalar.' },
    // { id: '13', title: 'Escala Modificada de Borg', description: 'Mede a percepção subjetiva de esforço físico.' },
    { id: '14', title: 'AVPU', description: 'Avaliação rápida do nível de consciência.' , screen: 'AVPU' }
    // { id: '13', title: '', description: 'Descrição do Card 4' },
  ];

  // Função que renderiza cada item da lista
 const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => item.screen && navigation.navigate(item.screen)} // Navega para a página se houver destino definido
    >
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </TouchableOpacity>
  );


  return (
    <View style={styles.container}>
      <FlatList 
        data={data} 
        keyExtractor={(item) => item.id} // Define um identificador único
        renderItem={renderItem} // Renderiza cada card
        contentContainerStyle={styles.list} // Estilização da lista
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9078D8',
    padding: 10,
    paddingBottom: 80
  },
  list: {
    paddingBottom: 20, // Adiciona espaço na parte inferior da lista
  },
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    marginEnd: 13,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3, // Sombra para Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
  },
});
