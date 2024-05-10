import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from 'react';

export default function App() {

const [fontsLoaded] = useFonts({
  regular: require(""),
  bold: require("./assets/fonts"),
  // extrabold: require("./assets/fonts/Poppins-ExtraBold"),
  // light: require("./assets/fonts/Poppins-Light"),
  // medium: require("./assets/fonts/Poppins-Medium"),
  // semibold: require("./assets/fonts/Poppins-SemiBold"),
})

// const onLayoutRootView = useCallback(async() => {

//   if(fontsLoaded){
//     await SplashScreen.hideAsync();
//   }
// }, [fontsLoaded]);

// if(!fontsLoaded){
//   return null;
// }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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

  textStyle: {
    fontFamily: "extrabold",
    fontSize: 20,
  }
});
