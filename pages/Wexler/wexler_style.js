// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//   }
// });
// export default styles;

import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  scrollContainer: {
    padding: 20,
    alignItems: "center",
  },
  content: {
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: "100%",
    alignItems: "center",
  },
  selectedOption: {
    backgroundColor: "#6200ee",
  },
  optionText: {
    fontSize: 16,
  },
  selectedText: {
    color: "#fff",
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  infoSection: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    elevation: 3, 
    marginBottom: 100
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  infoText: {
    fontSize: 16,
    textAlign: "justify",
  },
});

export default styles;