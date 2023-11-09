import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import InvoiceForm from '../components/InvoiceForm'
import { addInvoice } from '../redux/invoices/actions'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'



const CreateInvoice = () => {
  const invoices = useSelector((state) => state.invoiceReducer.invoices);
  const dispatch = useDispatch();

  const handleSubmit = async (newInvoice) => {
    try {
      const existingInvoice = invoices.find(
        invoice => invoice.invoiceNumber === newInvoice.invoiceNumber
      );
      if (existingInvoice) throw new Error("Invoice with same invoice number already exits");
      dispatch(addInvoice(newInvoice));
      toast.success("Invoice added successfully");
    } catch (err) {
      toast.error(err.message);
      console.log(err);
      throw new Error(err)
    }
  }

  return (
    <>
      <div className="d-flex justify-content-between">
        <h3>Create New Invoice</h3>
        <Link to={`/`} >
          <Button variant='outline-danger'>Close</Button>
        </Link>
      </div>
      <InvoiceForm submitHandler={handleSubmit} />
    </>
  )
}

export default CreateInvoice