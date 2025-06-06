import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './glasgow_style'; // ✅ Importando os estilos
import { Picker } from '@react-native-picker/picker';


export default function GlasgowComaScaleApp( navigation ) {
  // Estados para cada componente
  const [eyeResponse, setEyeResponse] = useState(4);
  const [verbalResponse, setVerbalResponse] = useState(5);
  const [motorResponse, setMotorResponse] = useState(6);
  const [pupilResponse, setPupilResponse] = useState(0);

  // Cálculo do score
  
const baseScore = Number(eyeResponse) + Number(verbalResponse) + Number(motorResponse);
const totalScore = baseScore + Number(pupilResponse);

  // Interpretação
  const getInterpretation = () => {
    if (totalScore <= 8) return '🔴 Comprometimento GRAVE';
    if (totalScore <= 12) return '🟠 Comprometimento MODERADO';
    if (totalScore <= 15) return '🟢 Comprometimento LEVE';
    return '❓ Fora da escala';
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Escala de Coma de Glasgow (Revisada 2018)</Text>
      <Text style={styles.subtitle}>"Escala que mede nível de consciência, avaliando a consciência em traumas e mede a gravidade de coma" </Text>

      {/* Seção de Resposta Ocular */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Abertura Ocular (E)</Text>
        <Picker
          selectedValue={eyeResponse}
          onValueChange={(itemValue) => setEyeResponse(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="4 - Abertura espontânea" value={4} />
          <Picker.Item label="3 - Ao estímulo verbal" value={3} />
          <Picker.Item label="2 - À pressão" value={2} />
          <Picker.Item label="1 - Nenhuma" value={1} />
          <Picker.Item label="NT - Não Testável" value={0} />
        </Picker>
      </View>

      {/* Seção de Resposta Verbal */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Resposta Verbal (V)</Text>
        <Picker
          selectedValue={verbalResponse}
          onValueChange={(itemValue) => setVerbalResponse(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="5 - Orientado" value={5} />
          <Picker.Item label="4 - Confuso" value={4} />
          <Picker.Item label="3 - Palavras" value={3} />
          <Picker.Item label="2 - Sons" value={2} />
          <Picker.Item label="1 - Nenhuma" value={1} />
          <Picker.Item label="NT - Não Testável" value={0} />
        </Picker>
      </View>

      {/* Seção de Resposta Motora */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Resposta Motora (M)</Text>
        <Picker
          selectedValue={motorResponse}
          onValueChange={(itemValue) => setMotorResponse(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="6 - Obedece comandos" value={6} />
          <Picker.Item label="5 - Localizado" value={5} />
          <Picker.Item label="4 - Flexão normal" value={4} />
          <Picker.Item label="3 - Flexão anormal" value={3} />
          <Picker.Item label="2 - Extensão" value={2} />
          <Picker.Item label="1 - Nenhuma" value={1} />
          <Picker.Item label="NT - Não Testável" value={0} />
        </Picker>
      </View>

      {/* Seção de Resposta Pupilar (SUBTRAI pontos) */}
      <View style={[styles.section, { backgroundColor: '#fff8e1' }]}>
        <Text style={styles.sectionTitle}>Resposta Pupilar (P)</Text>
        <Text style={{ color: '#d32f2f', marginBottom: 8 }}>
          ⚠️ Subtrai do score total!
        </Text>
        <Picker
          selectedValue={pupilResponse}
          onValueChange={(itemValue) => setPupilResponse(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="0 - Ambas pupilas reagem" value={0} />
          <Picker.Item label="-1 - Apenas uma pupila reage" value={-1} />
          <Picker.Item label="-2 - Nenhuma pupila reage" value={-2} />
        </Picker>
      </View>

      {/* Resultado */}
      <View style={styles.resultContainer}>
        <Text style={styles.scoreText}>
          Score Base: {baseScore} (E{eyeResponse} + V{verbalResponse} + M{motorResponse})
        </Text>
        <Text style={styles.scoreText}>
          Resposta Pupilar: {pupilResponse} 
          {pupilResponse < 0 && " (reduz o score)"}
        </Text>
        <Text style={styles.finalScore}>
          SCORE FINAL: {baseScore} {pupilResponse} = {totalScore}
        </Text>
        <Text style={styles.interpretationText}>
          {getInterpretation()}
        </Text>
      </View>

      {/* Legenda */}
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>📌 Classificação:</Text>
        <Text style={styles.infoText}>
          • 3-8: Comprometimento GRAVE{'\n'}
          • 9-12: Comprometimento MODERADO{'\n'}
          • 13-15: Comprometimento LEVE
        </Text>
      </View>
    </ScrollView>
  );
}
