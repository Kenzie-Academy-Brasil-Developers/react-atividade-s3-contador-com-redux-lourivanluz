import { ADD_NUMBER, SUB_NUMBER } from "./actionTypes";
const defultState = 0;

const countReduce = (state = defultState, action) => {
  const { number } = action;
  switch (action.type) {
    case ADD_NUMBER:
      return state + number;
    case SUB_NUMBER:
      return state - number;
    default:
      return state;
  }
};

export default countReduce;
