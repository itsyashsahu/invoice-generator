import { ADD_INVOICE, CLEAR_EDIT_INVOICE, DELETE_INVOICE, SET_EDIT_INVOICE, UPDATE_INVOICE, SET_INVOICES } from "../actions";
import { cloneDeep } from 'lodash';

const initialState = {
  invoices: [],
  editInvoice: null
};

const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INVOICE:
      // Check if an invoice with the same invoiceNumber already exists
      const existingInvoice = state.invoices.find(
        invoice => invoice.invoiceNumber === action.payload.invoiceNumber
      );

      if (!existingInvoice) {
        // Add the invoice if it doesn't already exist
        return {
          ...state,
          invoices: [...state.invoices, cloneDeep(action.payload)]
          // invoices: [...state.invoices, { ...action.payload, items: [...action.payload.items] }]
        };
      } else {
        // Return the state as it is if an invoice with the same invoiceNumber exists
        return state;
      }

    case DELETE_INVOICE:
      return {
        ...state,
        invoices: state.invoices.filter(invoice => invoice.invoiceNumber !== action.invoiceNumber)
      };
    case UPDATE_INVOICE:
      return {
        ...state,
        invoices: state.invoices.map(invoice => {
          if (invoice.invoiceNumber === action.invoiceNumber) {
            // Merge the updated data with the existing invoice
            return {
              ...invoice,
              ...action.updatedData
            };
          }
          return invoice;
        })
      };
    case SET_EDIT_INVOICE:
      return {
        ...state,
        editInvoice: action.invoice
      };
    case CLEAR_EDIT_INVOICE:
      return {
        ...state,
        editInvoice: null
      };
    case SET_INVOICES:
      return {
        ...state,
        invoices: action.payload
      }
    default:
      return state;
  }
};

export { invoiceReducer };
