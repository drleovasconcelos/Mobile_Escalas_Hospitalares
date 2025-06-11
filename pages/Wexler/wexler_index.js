// import styles from './wexler_style'
// import React, { useState } from 'react'; // Importa React e o hook useState para gerenciar o estado
// import { View, Text, TouchableOpacity } from 'react-native'; // Importa componentes básicos do React Native

// export default function AshworthScale() {
//   return (
//     <View>
//     </View>
//   );
// }


import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import styles from './wexler_style';

export default function WexlerScaleApp() {
  const [selectedValue, setSelectedValue] = useState(null);

  const options = [
    { id: 0, label: "0 - Ausente - Sem resposta visível e palpável" },
    { id: 1, label: "+1 - Hiporreflexia - Pequena contração muscular, sem movimento " },
    { id: 2, label: "+2 - Normal - Pequena contração e pequeno movimento " },
    { id: 3, label: "+3 - Hiperreflexia - Contração brusca e movimento articular moderado" },
    { id: 4, label: "+4 - Hiperreflexia com clônus transitório - Forte contração, com 1 a 3 clônus. Possível irradiação contralateral" },
    { id: 5, label: "+5 - Hiperreflexia com clônus sustentado - Forte contração e clônus sustentado." },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Escala de Wexler
</Text>

          {options.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.option, 
                selectedValue === option.id ? styles.selectedOption : null,
              ]}
              onPress={() => setSelectedValue(option.id)}
            >
              <Text style={[styles.optionText, selectedValue === option.id ? styles.selectedText : null]}>
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}

          {selectedValue !== null && (
            <Text style={styles.result}>Você selecionou: {options[selectedValue].label}</Text>
          )}
        </View>

        {/* Botão para gerar PDF */}
        <View style={{ marginTop: 20, padding: 10 }}>
          <Button 
            title="Gerar PDF e Compartilhar" 
            onPress={generatePDF} 
            color="#4CAF50"
          />
        </View>

        {/* Seção de informações separada */}
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Informações sobre o Teste</Text>
          <Text style={styles.infoText}>
            A Escala de Wexler é utilizada para avaliar reflexos tendinosos profundos e detectar possíveis alterações neuromusculares. A avaliação é feita comparando os lados do corpo e classifica os reflexos em cinco níveis (0 a 4), indo de ausência total de resposta até reflexos exacerbados com clônus. {"\n"}
            {"\n"}⚡ **Importância da Escala de Wexler** {"\n"}
            Essa ferramenta é fundamental para identificar alterações neurológicas, ajudando no diagnóstico de condições como lesões do neurônio motor superior ou inferior. Reflexos exagerados podem indicar hiperreflexia, enquanto reflexos reduzidos podem sugerir hiporreflexia.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
