import { StyleSheet, Text, View } from "react-native";
import Button from "./Components/Button";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>RS</Text>
      </View>

      <Text style={styles.name}>Rohit Sharma</Text>

      <View style={styles.buttons}>
        <Button txt="Home" route="/(tabs)" />
        <Button txt="About" route="/(tabs)/about" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    alignItems: "center",
    padding: 20,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 14,
  },

  avatarText: {
    fontSize: 30,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 28,
  },

  buttons: {
    width: "100%",
  },
});