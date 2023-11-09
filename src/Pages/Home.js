import React from 'react'
import { Button } from 'react-bootstrap';
import Invoice from '../components/Invoice/Invoice';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const invoices = useSelector((state) => state.invoiceReducer.invoices);
  // console.log("🚀 ~ Home ~ invoices:", invoices[0] === invoices[1])
  return (
    <>
      <div className="d-flex justify-content-between">
        <h3>Invoices List</h3>
        <Link to={`/invoice-create`}>
          <Button>Create Invoice</Button>
        </Link>
      </div>
      <hr className="border-black" />
      <Invoice invoices={invoices} />
    </>
  )
}

export default Home