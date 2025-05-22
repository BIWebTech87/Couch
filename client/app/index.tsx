import { Text, View } from "react-native";
import React from "react";
import Navbar from "@/components/NavBar/Navbar";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        margin: 'auto',
        width: '100%',
      }}
    >
      <Navbar />
    </View>
  );
}
