import { StyleSheet, Text, TextInput, View } from "react-native";
import { ThemedView } from "../ThemedView";

export type InputProps = {
  label?: string;
  placeholder?: string;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  placeholderTextColor?: string;
  onChangeText?: (text: string) => void;
  [key: string]: any;
};

export default function Input({
  label,
  placeholder = "Enter text",
  keyboardType = "default",
  placeholderTextColor = "#00000033",
  onChangeText,
  ...rest
}: InputProps) {
  return (
    <ThemedView className="w-full">
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        {...rest}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   width: "100%",
  //   marginBottom: 15,
  // },
  label: {
    color: "#474240B3", 
    marginBottom: 2,
    fontSize: 14,
  },
  input: {
    height: 50, 
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderColor: "#47424099",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#474240B3",
  },
});
