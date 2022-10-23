import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { CoomingSoon, Movies, Series } from "./screens";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({

  background:{
    backgroundcolor: "red",
  },

});


export default function App() {
  return (
    <NavigationContainer style={styles.background}>
      <Tab.Navigator
        screenOptions={{
          tabActivetintColor: "purple",
        }}
      >
        <Tab.Screen
          name="Peliculas"
          component={Movies}
          options={{
            tabBarIcon: ({}) => (
              <Ionicons name="film"  color="gray" />
            ),
          }}
        />
        <Tab.Screen
          name="Series"
          component={Series}
          options={{
            tabBarIcon: ({}) => <Ionicons name="film"  color="gray" />,
          }}
        />
        <Tab.Screen
          name="Proximamente"
          component={CoomingSoon}
          options={{
            tabBarIcon: ({}) => (
              <Ionicons name="film"  color="gray" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
