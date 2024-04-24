export const initialState = {
  currentValue: null,
  operator: null,
  previousValue: null,
  result: 0,
};

export const calculator = (type, value, state) => {
  switch (type) {
    case "clear":
      return initialState;
    case "number":
      return {
        ...state,
        currentValue:
          state.currentValue === "0" ? `${value}` : state.currentValue + value,
      };
    case "operator":
      return {
        ...state,
        operator: value,
        previousValue: state.currentValue,
        currentValue: null,
      };
    case "equal":
      const { currentValue, previousValue, operator } = state;
      const currentValueFloat = parseFloat(currentValue);
      const previousValueFloat = parseFloat(previousValue);
      let result = 0;

      switch (operator) {
        case "+":
          result = previousValueFloat + currentValueFloat;
          break;
        case "-":
          result = previousValueFloat - currentValueFloat;
          break;
        case "*":
          result = previousValueFloat * currentValueFloat;
          break;
        case "/":
          result = previousValueFloat / currentValueFloat;
          break;
        default:
          return state;
      }

      return {
        ...state,
        currentValue: null,
        operator: null,
        previousValue: null,
        result: result,
      };
    default:
      return state;
  }
};

export default calculator;
