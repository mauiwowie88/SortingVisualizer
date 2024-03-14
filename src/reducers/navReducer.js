import data from "../library/dataStructures";

export const INITIAL_STATE = {
  data: data,
  title: "Data Structures",
  stack: ["Data Structures"],
  algo: false,
};

export const changeStructure = (state, action) => {
  switch (action.type) {
    case "FORWARD":
      const next = state.data[action.key];
      if (typeof next === "object" && !Array.isArray(next)) {
        return {
          ...state,
          data: next,
          title: action.key,
          stack: [...state.stack, action.key],
        };
      }
      return {
        ...state,
        algo: next,
      };

    case "BACK":
      if (state.stack.length <= 1) return state;
      const newStack = state.stack.slice(0, -1);
      let newState = data;
      for (let i = 1; i < newStack.length; i++) {
        newState = newState[newStack[i]];
      }
      return {
        ...state,
        data: newState,
        stack: newStack,
        title: newStack[newStack.length - 1],
      };

    default:
      return state;
  }
};
