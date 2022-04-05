import { createStore } from "redux";

const countModifier = (state = 0) => {
  return state;
};

const countStore = createStore(countModifier);

console.log(countStore.getState());
