import { View } from "react-native";
import { ContainerStyle } from "./ContainerStyle";

export const Container = ({ children }) => {
  return <View style={ContainerStyle.container}>{children}</View>;
};
