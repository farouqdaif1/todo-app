import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './store';
export default function App() {
  return (
    <Provider store={store}>

      <SafeAreaProvider>
        <Navigation />
        <StatusBar translucent />
      </SafeAreaProvider>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%'
  },

});
