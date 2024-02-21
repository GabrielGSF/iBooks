import React from "react";
import { View } from "react-native";
import { LoginPage } from "./src/pages/LoginPage";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <LoginPage />
    </View>
  );
}