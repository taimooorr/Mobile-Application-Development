
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import StudentRecordList from './Components/flat10Students';
import StudentRecord from './Components/ClickableImage';
import ContactsData from './Components/ContactsData';


export default function App() {
  return (
    <View style={styles.container}>
      <ContactsData/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
