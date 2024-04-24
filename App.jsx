import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import Button from "./App/components/Button/Button";
import Row from "./App/components/Row/Row";
import calculator, { initialState } from "./App/util/calculator";
import { Container } from "./App/components/Container/Container";
import { Txt } from "./App/components/Text/Text";

const App = () => {
  const [state, setState] = useState(initialState);

  const HandleTap = (type, value) => {
    setState(calculator(type, value, state));
  };

  return (
    <Container>
      <SafeAreaView>
        <Txt>
          {state.previousValue}
          {state.operator}
          {state.currentValue}
        </Txt>
        <Txt>{parseFloat(state.result).toLocaleString()}</Txt>

        <Row>
          <Button
            text="C"
            theme="secondary"
            onPress={() => HandleTap("clear")}
          />

          <Button
            text="+/-"
            theme="secondary"
            onPress={() => HandleTap("posneg")}
          />

          <Button
            text="%"
            theme="secondary"
            onPress={() => HandleTap("percentage")}
          />

          <Button
            text="/"
            theme="accent"
            onPress={() => HandleTap("operator", "/")}
          />
        </Row>

        {/* Number */}
        <Row>
          <Button text="7" onPress={() => HandleTap("number", 7)} />
          <Button text="8" onPress={() => HandleTap("number", 8)} />
          <Button text="9" onPress={() => HandleTap("number", 9)} />
          <Button
            text="X"
            theme="accent"
            onPress={() => HandleTap("operator", "*")}
          />
        </Row>

        <Row>
          <Button text="5" onPress={() => HandleTap("number", 5)} />
          <Button text="6" onPress={() => HandleTap("number", 6)} />
          <Button text="7" onPress={() => HandleTap("number", 7)} />
          <Button
            text="-"
            theme="accent"
            onPress={() => HandleTap("operator", "-")}
          />
        </Row>

        <Row>
          <Button text="1" onPress={() => HandleTap("number", 1)} />
          <Button text="2" onPress={() => HandleTap("number", 2)} />
          <Button text="3" onPress={() => HandleTap("number", 3)} />
          <Button
            text="+"
            theme="accent"
            onPress={() => HandleTap("operator", "+")}
          />
        </Row>

        <Row>
          <Button text="0" onPress={() => HandleTap("number", 0)} />
          <Button text="." onPress={() => HandleTap("number", ".")} />
          <Button
            text="="
            theme="primary"
            onPress={() => HandleTap("equal", "=")}
          />
        </Row>
      </SafeAreaView>
    </Container>
  );
};

export default App;
