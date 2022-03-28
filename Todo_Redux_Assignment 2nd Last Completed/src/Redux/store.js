import { reducer } from "./reducer";
import { createStore } from "redux";

let initState = { todo: [] };

export const store = createStore(reducer, initState);
