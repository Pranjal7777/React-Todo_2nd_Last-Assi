import { ADD_TODO } from "./action";

export const reducer = (store, { type, payload }) => {
  switch (type) {
    case "ADD_ONCE":
      return {
        ...store,
        todo: payload,
      };

    case ADD_TODO:
      return {
        ...store,
        todo: payload,
      };

    default:
      return store;
  }
};