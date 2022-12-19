import { Pressable, Text, View } from "react-native";
import { React, useState } from "react";

export default function MyComponent({ name, age }) {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Pressable onPress={() => {
        setCount(count + 1);
      }}
      >
        <Text>{name}</Text>
        <Text>{age}</Text>
      </Pressable>
     
    </View>
  )
}