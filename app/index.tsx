import React, { useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [loggedInUser, setLoggedInUser] = useState(true);
  const [loading, setLoading] = useState(false);

  return (
    <View className="flex-1 justify-center items-center bg-slate-900">
      <Text className="text-white text-2xl">Hello NativeWind!</Text>
    </View>
  );
}
