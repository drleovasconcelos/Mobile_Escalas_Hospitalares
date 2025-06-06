import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import styles from "./cincinnati_style"
import { Picker } from '@react-native-picker/picker';

export default function CincinnatiScaleApp() {
  const [face, setFace] = useState('normal');
  const [arm, setArm] = useState('normal');
  const [speech, setSpeech] = useState('normal');

  const isAbnormal = face !== 'normal' || arm !== 'normal' || speech !== 'normal';

  const getResult = () => {
    if (isAbnormal) return '🔴 Suspeita de AVC - Encaminhar imediatamente!';
    return '🟢 Sem sinais de AVC detectados.';
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Escala de Cincinnati</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Paralisia Facial</Text>
          <Picker selectedValue={face} onValueChange={(v) => setFace(v)} style={styles.picker}>
            <Picker.Item label="Normal" value="normal" />
            <Picker.Item label="Anormal" value="abnormal" />
          </Picker>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Fraqueza em um dos Braços</Text>
          <Picker selectedValue={arm} onValueChange={(v) => setArm(v)} style={styles.picker}>
            <Picker.Item label="Normal" value="normal" />
            <Picker.Item label="Anormal" value="abnormal" />
          </Picker>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Alteração da Fala</Text>
          <Picker selectedValue={speech} onValueChange={(v) => setSpeech(v)} style={styles.picker}>
            <Picker.Item label="Normal" value="normal" />
            <Picker.Item label="Anormal" value="abnormal" />
          </Picker>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{getResult()}</Text>
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Informações sobre o Teste</Text>
          <Text style={styles.infoText}>
          A Escala de Cincinnati é um método rápido e eficaz para identificar sinais de Acidente Vascular Cerebral (AVC) em ambientes pré-hospitalares. Baseada em três critérios clínicos, ela auxilia profissionais de saúde na tomada de decisões imediatas.{"\n"}
🔹 Critérios de avaliação{"\n"}
1. Assimetria facial – O paciente apresenta dificuldade ao sorrir ou movimentar um lado do rosto.{"\n"}
2. Queda do braço – Ao levantar os braços, um deles pode cair involuntariamente.{"\n"}
3. Alteração na fala – Dificuldade para falar ou uso de palavras incoerentes.{"\n"}
🔹 Importância{"\n"}
Se um ou mais desses sinais estiverem presentes, há uma alta probabilidade de AVC, exigindo atendimento médico urgente. A escala é fundamental para acelerar o diagnóstico e iniciar tratamentos como a trombólise, reduzindo sequelas e melhorando o prognóstico.
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
