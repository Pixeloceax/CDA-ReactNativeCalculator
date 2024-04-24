import { View } from "react-native";
import { RowStyles } from "./RowStyle";

const Row = ({ children }) => {
  return <View style={RowStyles.container}>{children}</View>;
};

export default Row;
