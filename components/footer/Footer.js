import { View, StyleSheet, Text } from 'react-native'; // ✅ Correto
import Button from './button';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    position: "absolute", // Fixar o rodapé
    bottom: 0, // Garantir que fique no final da tela
    width: "100%", // Ocupa toda a largura
    backgroundColor: "#289eee",
    alignItems: "center",
    height: 100,
    paddingBottom: 30,
    alignItems: "center",
    justifyContent: "center"   
  },
  text: { 
    fontSize: 16, 
    fontWeight: "bold", // Corrigido erro de digitação ("ontWeight" → "fontWeight")
  },
});
