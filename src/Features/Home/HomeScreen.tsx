import { StyleSheet, Text, View } from "react-native";
import Courses from "./Components/Courses";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Rohit Sharma</Text>

      <Courses />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },

  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111827",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
});