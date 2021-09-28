import { combineReducers, createStore } from "redux";
import countReduce from "./modules/count/reduce";

const reduces = combineReducers({ count: countReduce });

const store = createStore(reduces);

export default store;
