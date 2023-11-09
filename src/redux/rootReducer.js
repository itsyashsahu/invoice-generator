import { combineReducers } from "redux";
import { invoiceReducer } from "./invoices/reducers";

export const rootReducer = combineReducers({
  invoiceReducer,
  // more reducers can be added here
})