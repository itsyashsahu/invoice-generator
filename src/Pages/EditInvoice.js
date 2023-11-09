import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import InvoiceForm from '../components/InvoiceForm'
import { useDispatch, useSelector } from 'react-redux'
import { clearEditInvoice, updateInvoice } from '../redux/invoices/actions'
import { toast } from 'react-toastify'

const EditInvoice = () => {
  const invoice = useSelector((state) => state.invoiceReducer.editInvoice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (updatedInvoice) => {
    try {
      dispatch(updateInvoice(updatedInvoice.invoiceNumber, updatedInvoice));
      dispatch(clearEditInvoice());
      toast.success("Invoice updated successfully");
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
        <h3>Edit Invoice</h3>
        <Button onClick={handleClose} variant='outline-danger'>Close</Button>
      </div>
      <InvoiceForm invoice={invoice} submitHandler={handleSubmit} edit={true} />
    </>
  )
}

export default EditInvoice