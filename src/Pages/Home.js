import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Invoice from '../components/Invoice/Invoice';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDummyInvoices } from '../utils';
import { setInvoices } from '../redux/invoices/actions';

const Home = () => {
  const invoices = useSelector((state) => state.invoiceReducer.invoices);
  const [sortedBy, setSortedBy] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    const dummyInvoices = getDummyInvoices();
    dummyInvoices.sort((a, b) => {
      return a.total - b.total;
    })
    dispatch(setInvoices(dummyInvoices));
  }, []);

  const handleSortChange = () => {
    const newSortOrder = (sortedBy) ? 0 : 1;
    const invoicesCopy = [...invoices];
    invoicesCopy.sort((a, b) => {
      if (newSortOrder) {
        return a.total - b.total;
      } else {
        return b.total - a.total;
      }
    })
    dispatch(setInvoices(invoicesCopy));
    setSortedBy(newSortOrder)
  }


  return (
    <>
      <div className="d-flex justify-content-between">
        <h3>Invoices List</h3>
        <Link to={`/invoice-create`}>
          <Button>Create Invoice</Button>
        </Link>
        <Button onClick={handleSortChange} >Sort {sortedBy ? "ASC" : "DESC"}</Button>
      </div>
      <hr className="border-black" />
      <Invoice invoices={invoices} />
    </>
  )
}

export default Home