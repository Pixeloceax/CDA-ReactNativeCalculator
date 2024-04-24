import { Text } from "react-native";
import { TextStyle } from "./TextStyle";

export const Txt = ({ children }) => {
  return <Text style={TextStyle.value}>{children}</Text>;
};
