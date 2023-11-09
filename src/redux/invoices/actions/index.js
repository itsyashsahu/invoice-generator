export const ADD_INVOICE = 'ADD_INVOICE';
export const DELETE_INVOICE = 'DELETE_INVOICE';
export const UPDATE_INVOICE = 'UPDATE_INVOICE';
export const SET_EDIT_INVOICE = 'SET_EDIT_INVOICE';
export const CLEAR_EDIT_INVOICE = 'CLEAR_EDIT_INVOICE';


export const addInvoice = (payload) => {
  return {
    type: ADD_INVOICE,
    payload
  };
}

export const deleteInvoice = (invoiceNumber) => {
  return {
    type: DELETE_INVOICE,
    invoiceNumber
  };
}

export const updateInvoice = (invoiceNumber, updatedData) => {
  return {
    type: UPDATE_INVOICE,
    invoiceNumber,
    updatedData
  };
}

export const setEditInvoice = (invoice) => {
  return {
    type: SET_EDIT_INVOICE,
    invoice
  };
}

export const clearEditInvoice = () => {
  return {
    type: CLEAR_EDIT_INVOICE
  };
}
