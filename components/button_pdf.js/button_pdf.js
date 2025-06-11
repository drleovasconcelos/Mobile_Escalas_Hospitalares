import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

const Botao = ({ eyeResponse, verbalResponse, motorResponse, pupilResponse, totalScore, getInterpretation }) => {
  const generatePDF = async () => {
    try {
      const html = `
        <html>
          <body>
            <h1>Escala de Coma de Glasgow</h1>
            <p><strong>Data:</strong> ${new Date().toLocaleDateString()}</p>
            <h2>Resultados</h2>
            <p><strong>Abertura Ocular (E):</strong> ${eyeResponse}</p>
            <p><strong>Resposta Verbal (V):</strong> ${verbalResponse}</p>
            <p><strong>Resposta Motora (M):</strong> ${motorResponse}</p>
            <p><strong>Resposta Pupilar (P):</strong> ${pupilResponse}</p>
            <p><strong>Score Total:</strong> ${totalScore}</p>
            <p><strong>Interpretação:</strong> ${getInterpretation()}</p>
          </body>
        </html>
      `;

      const { uri } = await Print.printToFileAsync({ html });

      console.log('PDF URI:', uri);

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(uri, {
          mimeType: 'application/pdf',
          dialogTitle: 'Compartilhar PDF',
        });
      } else {
        Alert.alert('Compartilhamento não disponível neste dispositivo');
      }

    } catch (error) {
      Alert.alert('Erro', 'Falha ao gerar ou compartilhar o PDF.');
      console.error('Erro ao gerar PDF:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Button 
        title="Gerar PDF e Compartilhar" 
        onPress={generatePDF} 
        color="#4CAF50"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
  }
});

export default Botao;
