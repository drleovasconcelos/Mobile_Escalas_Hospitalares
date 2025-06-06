import { View, StyleSheet } from 'react-native';

import Header from '../../components/header/header';
import CardList from '../../components/card-list/card-list';
import Footer from '../../components/footer/Footer';

export default function Home( ) {
  return (
    <View style={styles.container}>
      <Header/>
      <CardList/>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'magenta',
  }
});
