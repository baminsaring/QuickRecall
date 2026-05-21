import { Stack, Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/src/constants/Colors";
import { View, TouchableOpacity } from "react-native";

export default function HomeLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        headerRight: () => (
          <View style={{ flexDirection: 'row', gap: 15, paddingRight: 15 }}>
            <TouchableOpacity>
              <Ionicons name="person-circle-outline" size={28} color={Colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="settings-outline" size={28} color={Colors.primary} />
            </TouchableOpacity>
          </View>
        ),
      }}
    >

      {/* Home */}
      <Tabs.Screen
        name="index"
        options={{
          title: "QuickRecall",
          headerTintColor: Colors.primary,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />

      {/* Decks */}
      <Tabs.Screen
        name="decks"
        options={{
          title: "Decks",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "albums-sharp" : "albums-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />

      {/* Study*/}
      <Tabs.Screen
        name="study"
        options={{
          title: "Study",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "hardware-chip-sharp" : "hardware-chip-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />

      {/* Stats */}
      <Tabs.Screen
        name="stats"
        options={{
          title: "Stats",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "stats-chart-sharp" : "stats-chart-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
