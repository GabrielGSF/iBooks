import React from "react";
import { View } from "react-native";
import { LoginPage } from "./src/pages/LoginPage";
import { StartPage } from "./src/pages/StartPage";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StartPage />
    </View>
  );
}