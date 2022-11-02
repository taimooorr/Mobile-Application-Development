import { View, Text } from 'react-native';
import { Button } from 'react-native';
import { useState } from 'react';
import MyText from './myText';
const [ setCount] = useState(0);

export const incrementCount = () => {
  setCount(prevValue => prevValue + 1);
};
export default function Counter(props) {
  let counter = props.counter
  return (
    <View style={styles.container}>
      <MyText>{props.counter}</MyText>
      <Button title="Click Me" onPress={() => {
       props.setCount(props.counter + 1);
      }} />
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    }
  });
