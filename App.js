import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import Home from "./Screens/main/Home";
// import PostsScreen from "./Screens/main/PostsScreen";
// import CreatePostsScreen from "./Screens/main/CreatePostsScreen";
// import ProfileScreen from "./Screens/main/ProfileScreen";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

import useRoute from "./router";

// const useRoute = (isAuth) => {
//   if (!isAuth) {
//     return (
//       <AuthStack.Navigator initialRouteName="Login">
//         <AuthStack.Screen
//           name="Login"
//           component={LoginScreen}
//           options={{ headerShown: false }}
//         />
//         <AuthStack.Screen
//           name="Registration"
//           component={RegistrationScreen}
//           options={{ headerShown: false }}
//         />
//       </AuthStack.Navigator>
//     );
//   }
//   return (
//     <></>
//     // <MainStack.Navigator initialRouteName="Home">
//     //   <MainStack.Screen
//     //     options={{ headerShown: false }}
//     //     name="PostsScreen"
//     //     component={PostsScreen}
//     //   ></MainStack.Screen>
//     //   <MainStack.Screen
//     //     name="CreatePostsScreen"
//     //     component={CreatePostsScreen}
//     //     options={{
//     //       headerShown: false,
//     //       headerTitleStyle: { color: "#212121", fontSize: 17 },
//     //       headerTitleAlign: "center",
//     //     }}
//     //   ></MainStack.Screen>
//     //   <MainStack.Screen
//     //     name="ProfileScreen"
//     //     component={ProfileScreen}
//     //     options={{ headerShown: false }}
//     //   ></MainStack.Screen>
//     // </MainStack.Navigator>
//   );
// };

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  //   "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  //   "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  const routing = useRoute(isAuth);

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <NavigationContainer>{routing}</NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
