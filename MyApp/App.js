import React from 'react';
import { View ,Text, Button} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
;
import StudentRecord from './Components/ClickableImage';
import ContactsData from './Components/ContactsData';


function MyTabs(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" onPress={() => { props.navigate('ContactsData')}} component={ContactsData} />
    </Tab.Navigator>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details'
      ) } />
    </View>
  ); 
}

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId} = 55;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: 55,
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
const Tab = createBottomTabNavigator();
function Home() {
  console.log(Tab)
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={HomeScreen} />
      <Tab.Screen name="Messages" component={DetailsScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <View>
     {/*  <View>
        <StudentRecord></StudentRecord>
      </View>
      <NavigationContainer>
       <MyTabs></MyTabs>
      </NavigationContainer> */}
      
    </View>
  )
}