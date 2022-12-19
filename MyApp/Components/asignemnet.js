let item = [{ name: 'item1', value: 10 }, { name: 'item2', value: 20 }];
let filtered = item.filter((item) => item.name === 'item2');
let mapped = filtered.map((item) => item.value * 2);
let reduced = mapped.reduce((prev, next) => prev + next);

function comp(props) {
  return (
    <View>
      <Text> {props.age} </Text>
      <Text> {props.value} </Text>
      <Text> {props.age + props.value} </Text>
    </View>
  );
}
<comp age={10} value={20} />
const [count, setCount] = useState(0);
useEffect(() => {
  watcher();
}, [count]);
