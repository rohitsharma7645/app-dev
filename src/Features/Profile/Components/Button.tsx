import { Pressable, StyleSheet, Text } from "react-native";
import { useRouter } from "expo-router";

export default function Button({txt, route}: { txt:string; route: "/(tabs)" | "/(tabs)/about";}) {
  const router = useRouter();

  return (
    <Pressable
      style={styles.button}
      onPress={() => router.push(route)}
    >
      <Text style={styles.buttonText}>{txt}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 10,
  },

  buttonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#2563EB",
  },
});