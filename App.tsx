import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import RootNavigation from './navigation/root';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useFonts,Manrope_500Medium, Manrope_400Regular } from '@expo-google-fonts/manrope';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Manrope_400Regular, Manrope_500Medium
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaProvider style ={styles.container}>
      <StatusBar style='auto' />
    <RootNavigation /> 
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
   flex:1
  }
});
