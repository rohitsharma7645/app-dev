import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function AboutScreen() {
  const [msg, setMsg] = useState("");

  const handleSubmit = () => {
    console.log(msg);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About Me</Text>

      <Text style={styles.bio}>
        Hii, I am Rohit. I am a 3rd year student pursuing B.Tech in CSE. I
        have a keen interest in software development and AI/ML.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Send a message"
        placeholderTextColor="#9CA3AF"
        value={msg}
        onChangeText={setMsg}
      />

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Send</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 20,
  },

  heading: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 16,
  },

  bio: {
    fontSize: 16,
    lineHeight: 24,
    color: "#4B5563",
    marginBottom: 24,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 14,
    fontSize: 15,
    color: "#111827",
    marginBottom: 12,
  },

  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
});