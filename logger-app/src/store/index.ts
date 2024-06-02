import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../components/CheckinInterface/reducer";

export interface ClassState {
  studentReducer: {
    students: any[];
  };
}
const store = configureStore({
  reducer: {
    studentReducer,
  }
});


export default store;