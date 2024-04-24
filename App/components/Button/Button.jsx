import { Text, TouchableOpacity } from "react-native";
import { ButtonStyles } from "./ButtonStyle";

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [ButtonStyles.button];
  const textStyles = [ButtonStyles.text];

  if (size === "double") {
    buttonStyles.push(ButtonStyles.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyles.push(ButtonStyles.buttonSecondary);
    textStyles.push(ButtonStyles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(ButtonStyles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
