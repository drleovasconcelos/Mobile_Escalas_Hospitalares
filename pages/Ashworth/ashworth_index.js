import React, { useState } from 'react'; // Importa React e o hook useState para gerenciar o estado
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'; // Importa componentes básicos do React Native
import styles from './ashwort_style'; // Importa o arquivo de estilos externo para aplicar no layout

export default function AshworthScale() {
  // Cria um estado para armazenar o item selecionado pelo usuário
  const [selectedValue, setSelectedValue] = useState(null);

  // Lista de opções da escala de Ashworth, com identificadores e descrições
  const options = [
    { id: 0, label: "0 - Tônus normal" },
    { id: 1, label: "1 - Aumento leve no final do arco de movimento" },
    { id: 2, label: "1+ - Aumento em menos da metade do arco de movimento" },
    { id: 3, label: "2 - Aumento significativo do tônus muscular" },
    { id: 4, label: "3 - Movimento difícil por aumento do tônus" },
    { id: 5, label: "4 - Rigidez total da parte examinada" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
    
      <View style={styles.container}>
        {/* Título da tela */}
        <Text style={styles.title}>Escala de Ashworth Modificada</Text>

        {/* Mapeia a lista de opções para criar botões interativos */}
        {options.map((option) => (
          <TouchableOpacity
            key={option.id} // Define uma chave única para cada item na lista
            style={[
              styles.option, 
              selectedValue === option.id ? styles.selectedOption : null, // Destaca opção selecionada
            ]}
            onPress={() => setSelectedValue(option.id)} // Atualiza o estado ao clicar no botão
          >
            {/* Exibe o texto da opção */}
            <Text style={styles.optionText}>{option.label}</Text>
          </TouchableOpacity>
        ))}

        {/* Exibe a opção selecionada apenas se selectedValue não for nulo */}
        {selectedValue !== null && (
          <Text style={styles.result}>Você selecionou: {options[selectedValue].label}</Text>
        )}
      </View>
      <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Informações sobre o Teste</Text>
          <Text style={styles.infoText}>
            A Escala de Ashworth Modificada avalia o grau de espasticidade muscular, comum em condições neurológicas como AVC e paralisia cerebral. A classificação varia de 0 a 4, indo de tônus normal até rigidez extrema, dificultando ou impedindo o movimento passivo. Essa escala é fundamental para acompanhar a evolução da espasticidade e ajustar estratégias de reabilitação e tratamento conforme a necessidade do paciente.

          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}