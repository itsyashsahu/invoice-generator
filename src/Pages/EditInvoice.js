import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import InvoiceForm from '../components/InvoiceForm'
import { useDispatch, useSelector } from 'react-redux'
import { updateInvoice } from '../redux/invoices/actions'
import { toast } from 'react-toastify'

const EditInvoice = () => {
  const invoice = useSelector((state) => state.invoiceReducer.editInvoice);
  const dispatch = useDispatch();
  const handleSubmit = async (updatedInvoice) => {
    try {
      dispatch(updateInvoice(updatedInvoice.invoiceNumber, updatedInvoice));
      toast.success("Invoice updated successfully");
    } catch (err) {
      toast.error(err.message);
      console.log(err);
      throw new Error(err)
    }
  }
  return (
    <>
      <div className="d-flex justify-content-between">
        <h3>Edit Invoice</h3>
        <Link to={`/`}>
          <Button variant='outline-danger'>Close</Button>
        </Link>
      </div>
      <InvoiceForm invoice={invoice} submitHandler={handleSubmit} edit={true} />
    </>
  )
}

export default EditInvoice