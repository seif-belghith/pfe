import {
  StyleSheet,
  Alert,
  View,
  Text,
  Button,
  TextInput,
  StatusBar,
} from "react-native";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onLogin = () => {
    Alert.alert(username + "  " + password);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Login to My App</Text>
      <View style={styles.wrapper}>
        <TextInput
          value={username}
          onChangeText={(urs) => setUsername(urs)}
          placeholder={"Entre votre nom"}
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={(pswd) => setPassword(pswd)}
          placeholder={"Entrer votre Password"}
          secureTextEntry={true}
          style={styles.input}
        />

        <Button
          title={"Login"}
          style={styles.input}
          onPress={() => onLogin()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "80%",
  },
  welcome: {
    marginBottom: 20,
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    //fontFamily: "DancingScript-Bold",
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
  },
});
