import { View, Button, Text, StyleSheet, TextInput } from 'react-native'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Name1: "Ali",
      phone1: "8",
      Name2: "Khan",
      phone2: "3",
      Name3: "Kashif Nabeel",
      phone3: "2",
      phonetex: "",
      nametex: "",
    }
  }
  Updatename() {
    var namx = this.state.nametex
    var phox = this.state.phonetex
    if (this.state.phone1 === phox) {
      this.setState({
        Name1: namx
      })
    }
    if (this.state.phone2 === phox) {
      this.setState({
        Name2: namx
      })
    }
    if (this.state.phone3 === phox) {
      this.setState({
        Name3: namx
      })
    }
  }
  render() {
    return (
      <View style={styles.maincontainer}>

        <Text style={{ borderWidth: 1, width: 100, marginBottom: 4, marginTop: 4 }}>{this.state.Name1}
        </Text>
        <Text style={{ borderWidth: 1, width: 100, marginBottom: 4, marginTop: 4 }}>{this.state.Name2}
        </Text>
        <Text style={{ borderWidth: 1, width: 100, marginBottom: 4, marginTop: 4 }}>{this.state.Name3}
        </Text>
        <View>
          <TextInput style={styles.inputstyle} onChangeText={(e) => { this.setState({ nametex: e }) }} autoCapatilize="none" autoCorrect={false}></TextInput>
          <TextInput style={styles.inputstyle} onChangeText={(c) => { this.setState({ phonetex: c }) }} autoCapatilize="none" autoCorrect={false}></TextInput>
          <Button title="Edit" onPress={() => { this.Updatename() }} style={{ width: 25, borderColor: 1, backgroundColor: "rgb(0, 139, 255)" }}></Button>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  maincontainer:
  {
    flex: 1,

    fontSize: 14,

    justifyContent: "center",
    marginLeft: "45%",
    AlignItems: "center"
  },
  inputstyle: {
    borderWidth: 1,
    width: 100,
    margintop: 4,
    marginBottom: 4,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    //fontFamily: "regular",
    fontSize: 18,
  },

})

export default App;