import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import styles from "./CAMICU_style"
import { Picker } from '@react-native-picker/picker';


export default function CAMICUScaleApp() {
  // Flexao de Tornozelo
  const [inicioAgudo, setinicioAgudo] = useState(0);
  const [inatencao, setinatencao] = useState(0);
  const [rassscore, setrassscore] = useState(0);
  const [pensamentodesorganizado, setpensamentodesorganizado] = useState(1);

  // Cálculo do score
  //const MRCScore = Number(flexaoOmbroEsq) + Number(flexaoOmbroDir);

  //const totalScore = baseScore + Number(pupilResponse); && rassscore == 0 && pensamentodesorganizado < 2

  // Interpretação

  const getInterpretation = () => {
    if (inicioAgudo == 0) {
      if (inatencao == 0) {
        if (rassscore == 0) {
          if (pensamentodesorganizado < 2)
            return '🟢 Paciente NÃO APRESENTA Delirium';
        }
      }
    }

    if (
      inicioAgudo > 0 ||
      inatencao > 0 ||
      rassscore != 0 ||
      pensamentodesorganizado > 1
    )
      return '🔴 Paciente APRESENTA Delirium';

    return '❓ Fora da escala';
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Escala de CAM-ICU</Text>

        {/* Inicio Agudo */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            O paciente teve flutuação do estado mental nas últimas 24 horas?
          </Text>
          <Picker
            selectedValue={inicioAgudo}
            onValueChange={(itemValue) => setinicioAgudo(itemValue)}
            style={styles.picker}>
            <Picker.Item label="1 - Não" value={0} />
            <Picker.Item label="2 - Sim" value={1} />
          </Picker>
        </View>

        {/* Inatenção */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Leia em voz alta as seguintes letras:
          </Text>
          <Text style={styles.sectionTitle}>
            "S, A, V, E, A, H, A, A, R, T".
          </Text>
          <Text style={styles.sectionTitle}>
            O paciente deve apertar sua mão apenas ao ouvir a letra 'A'.
          </Text>
          <Text style={styles.sectionTitle}>
            erros o paciente cometeu durante o teste?
          </Text>
          <Picker
            selectedValue={inatencao}
            onValueChange={(itemValue) => setinatencao(itemValue)}
            style={styles.picker}>
            <Picker.Item label="1 - Cometeu menos que 3 erros" value={0} />
            <Picker.Item label="2 - Cometeu 3 ou mais erros" value={1} />
          </Picker>
        </View>

        {/* Nivel de Consciência Alterado */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Qual o Estado Atual Na escala de RASS (Richmond Agitation-Sedation
            Scale) do paciente
          </Text>
          <Picker
            selectedValue={rassscore}
            onValueChange={(itemValue) => setrassscore(itemValue)}
            style={styles.picker}>
            <Picker.Item label="1 - Agressivo" value={4} />
            <Picker.Item label="2 - Muito Agitado" value={3} />
            <Picker.Item label="3 - Agitado" value={2} />
            <Picker.Item label="4 - Inquieto" value={1} />
            <Picker.Item label="5 - Tranquilo" value={0} />
            <Picker.Item label="6 - Sonolento" value={-1} />
            <Picker.Item label="7 - Acorda ao Estímulo leve" value={-2} />
            <Picker.Item label="8 - Sem Contato Visual" value={-3} />
            <Picker.Item label="9 - Acorda por Dor" value={-4} />
            <Picker.Item label="10 - Irresponsivo" value={-5} />
          </Picker>
        </View>

        {/* Pensamento Desogarnizado */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Realize as seguintes perguntas ao paciente
          </Text>
          <Text style={styles.sectionTitle}>
            1.Uma pedra flutua na água? (ou: uma folha flutua na água?)
          </Text>
          <Text style={styles.sectionTitle}>
            2.No mar tem peixes? (ou: no mar tem elefantes?)
          </Text>
          <Text style={styles.sectionTitle}>
            3.Um 1kg pesa mais que 2kg? (ou: 2kg pesam mais que 1kg?)
          </Text>
          <Text style={styles.sectionTitle}>
            4.Você pode usar um martelo para bater um prego? (ou: você pode usar
            um martelo para cortar madeira?)
          </Text>
          <Text style={styles.sectionTitle}></Text>
          <Text style={styles.sectionTitle}>
            Comando: Diga ao paciente: “Levante estes dedos” Em seguida: “Agora
            faça a mesma coisa com a outra mão” (o examinador não deve repetir o
            número de dedos).
          </Text>

          <Picker
            selectedValue={pensamentodesorganizado}
            onValueChange={(itemValue) => setpensamentodesorganizado(itemValue)}
            style={styles.picker}>
            <Picker.Item label="1 - Cometeu menos que 2 erros" value={0} />
            <Picker.Item label="2 - Cometeu 2 ou mais erros" value={1} />
          </Picker>
        </View>

        {/* Resultado */}
        <View style={styles.resultContainer}>
          <Text style={styles.finalScore}>RESULTADO :</Text>
          <Text style={styles.interpretationText}>{getInterpretation()}</Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Informações sobre o Teste</Text>
          <Text style={styles.infoText}>
            A Escala CAM-ICU é um método utilizado para identificar delirium em pacientes internados em Unidades de Terapia Intensiva (UTI). Ela permite uma avaliação rápida e objetiva do estado mental, sendo especialmente útil para pacientes sob ventilação mecânica.{"\n"}
Como funciona?{"\n"}
A escala é baseada em quatro critérios: {"\n"}
1. Alteração aguda do estado mental – Mudança súbita na cognição do paciente.{"\n"}
2. Déficit de atenção – Dificuldade em manter o foco em estímulos simples.{"\n"}
3. Nível de consciência – Avaliação pela Escala RASS (Richmond Agitation-Sedation Scale).{"\n"}
4. Pensamento desorganizado – Respostas incoerentes ou dificuldade em seguir comandos.{"\n"}
Importância:{"\n"}
A CAM-ICU é essencial para o diagnóstico precoce do delirium, permitindo intervenções rápidas e reduzindo complicações associadas à condição. Seu uso melhora o prognóstico e a qualidade do cuidado em pacientes críticos.

          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

