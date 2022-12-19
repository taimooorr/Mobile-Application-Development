import { View, Text, Button } from 'react-native'
import {React,useEffect,useState} from 'react'

export default function LearnUseEffect() {
  ///lets learn useEffect
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count+1)
  }, [])
  return (
    <View>
      <Text>Lets Sum {count}</Text>
      <Button title='Count' onPress={() => {
        setCount(count + 1);
      }}></Button>
    </View>
  )
}