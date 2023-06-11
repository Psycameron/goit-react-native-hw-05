import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, StyleSheet, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import LoginScreen from "./Screens/auth/LoginScreen";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import ProfileScreen from "./Screens/mainScreen/ProfileScreen";
import CreatePostsScreen from "./Screens/mainScreen/CreatePostsScreen";
import Home from "./Screens/mainScreen/Home";

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

export default function useRoute(isAuth) {
  if (!isAuth) {
    return (
      <AuthStack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <AuthStack.Screen
          name="Registration"
          component={() => <RegistrationScreen isAuth={isAuth} />}
        />
        <AuthStack.Screen
          name="Login"
          component={() => <LoginScreen isAuth={isAuth} />}
        />
      </AuthStack.Navigator>
    );
  }

  return (
    <MainTab.Navigator
      initialRouteName="Home"
      activeColor="#FF6C00"
      screenOptions={{
        tabBarStyle: {
          height: 83,
          paddingHorizontal: 81,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 17,
          fontFamily: "Roboto-Medium",
          lineHeight: 22,
          color: "#212121",
        },
      }}
    >
      <MainTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="grid" size={size} color={color} />
          ),
          tabBarStyle: { height: 83, paddingBottom: 10, borderTopWidth: 1 },
          tabBarShowLabel: false,
          headerRight: () => (
            <Ionicons
              name="log-in-outline"
              size={30}
              color="#BDBDBD"
              style={{ marginRight: 10 }}
            />
          ),
          headerStyle: {
            borderBottomWidth: 1,
          },
          headerShown: false,
        }}
      />
      <MainTab.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View style={styles.addButton}>
              <Ionicons name="md-add" size={size} color="#fff" />
            </View>
          ),
          tabBarStyle: { height: 83, paddingBottom: 10, borderTopWidth: 1 },
          tabBarShowLabel: false,
          headerStyle: {
            borderBottomWidth: 1,
          },
          headerTitle: "Створити публікацію",
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("PostsScreen")}
                activeOpacity={0.6}
                style={{ paddingLeft: 16 }}
              >
                <Feather name="arrow-left" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            );
          },
        }}
      />
      <MainTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
          tabBarStyle: { height: 83, paddingBottom: 10, borderTopWidth: 1 },
          tabBarShowLabel: false,
          headerStyle: {
            borderBottomWidth: 1,
          },
          headerTitle: "Профіль",
        }}
      />
    </MainTab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  addButton: {
    backgroundColor: "#FF6C00",
    height: 40,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  tabButton: {},
});
