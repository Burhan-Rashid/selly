import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cart from './src/pages/Cart';
import Confirmation from './src/pages/Confirmation';
import Login from './src/pages/Login';
import Payment from './src/pages/Payment';
import Products from './src/pages/Products';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Login /> */}
      {/* <Products /> */}
      {/* <Cart /> */}
      {/* <Payment /> */}
      <Confirmation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
