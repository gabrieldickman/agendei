import { Text, View } from "react-native";
import Button from "./src/components/button/button";
import {styles} from "./app.style"

export default function App() {
  return (
    <View style={styles.container}>
      <Button text="Isso é um teste" />
    </View>
  );
}
