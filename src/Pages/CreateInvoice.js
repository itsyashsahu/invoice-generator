import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import InvoiceForm from '../components/InvoiceForm'
import { addInvoice, clearEditInvoice } from '../redux/invoices/actions'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { getDummyInvoice } from '../utils'



const CreateInvoice = () => {
  const invoices = useSelector((state) => state.invoiceReducer.invoices);
  const dispatch = useDispatch();
  // {/* Use the below to avoid providing details for testing */ }
  // const invoice = getDummyInvoice();
  const navigate = useNavigate();
  const invoice = useSelector((state) => state.invoiceReducer.editInvoice);

  const handleSubmit = async (newInvoice) => {
    try {
      const existingInvoice = invoices.find(
        invoice => invoice.invoiceNumber === newInvoice.invoiceNumber
      );
      if (existingInvoice) throw new Error("Invoice with same invoice number already exits");
      dispatch(addInvoice(newInvoice));
      dispatch(clearEditInvoice());
      toast.success("Invoice added successfully");
    } catch (err) {
      toast.error(err.message);
      console.log(err);
      throw new Error(err)
    }

  }
  const handleClose = () => {
    dispatch(clearEditInvoice());
    navigate("/")
  }

  return (
    <>
      <div className="d-flex justify-content-between">
        <h3>Create New Invoice</h3>
        <Button onClick={handleClose} variant='outline-danger'>Close</Button>
      </div>
      {/* Use the below to avoid providing details for testing */}
      <InvoiceForm invoice={invoice} submitHandler={handleSubmit} />

      {/* <InvoiceForm submitHandler={handleSubmit} /> */}
    </>
  )
}

export default CreateInvoice