import React, { useState } from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { BiCopy } from 'react-icons/bi';
import { store } from '../../redux/store';
import { deleteInvoice, setEditInvoice } from '../../redux/invoices/actions';
import { useNavigate } from 'react-router-dom';
import { getDummyInvoice } from '../../utils';
import DangerModal from '../DangerModal';

let initialState = {
  isOpen: false,
  currency: '$',
  currentDate: '',
  invoiceNumber: 1,
  dateOfIssue: '',
  billTo: '',
  billToEmail: '',
  billToAddress: '',
  billFrom: '',
  billFromEmail: '',
  billFromAddress: '',
  notes: '',
  total: 0.00,
  subTotal: 0.00,
  taxRate: '',
  taxAmount: 0.00,
  discountRate: '',
  discountAmount: 0.00,
  items: [
    {
      id: 0,
      name: '',
      description: '',
      price: '1.00',
      quantity: 1,
    },
  ],
};

const InvoiceCard = ({ invoice = initialState }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleDelete = () => {
    store.dispatch(deleteInvoice(invoice.invoiceNumber))
  }

  const handleEdit = () => {
    store.dispatch(setEditInvoice(invoice))
    navigate("/invoice-edit")
  }

  const handleCopy = () => {
    store.dispatch(setEditInvoice(invoice))
    navigate("/invoice-create")
  }

  return (
    <div className='card'>
      <div className="d-flex flex-row justify-content-between align-items-start bg-light w-100 p-4">
        <div className="w-100">
          <h4 className="fw-bold my-2">{invoice.billFrom || 'John Uberbacher'}</h4>
          <h6 className="fw-bold text-secondary mb-1">
            Invoice #: {invoice.invoiceNumber || ''}
          </h6>
        </div>
        <div className="text-end ms-4">
          <h6 className="fw-bold mt-1 mb-2">Amount&nbsp;Due:</h6>
          <h5 className="fw-bold text-secondary"> {invoice.currency} {invoice.total}</h5>
        </div>
      </div>
      <div className="p-4">
        <Row className="mb-4">
          <Col md={4}>
            <div className="fw-bold">Billed to:</div>
            <div>{invoice.billTo || ''}</div>
            <div>{invoice.billToAddress || ''}</div>
            <div>{invoice.billToEmail || ''}</div>
          </Col>
          <Col md={4}>
            <div className="fw-bold">Billed From:</div>
            <div>{invoice.billFrom || ''}</div>
            <div>{invoice.billFromAddress || ''}</div>
            <div>{invoice.billFromEmail || ''}</div>
          </Col>
          <Col md={4}>
            <div className="fw-bold mt-2">Date Of Issue:</div>
            <div>{invoice.dateOfIssue || ''}</div>
          </Col>
        </Row>
        <Table className="mb-0">
          <thead>
            <tr>
              <th>QTY</th>
              <th>DESCRIPTION</th>
              <th className="text-end">PRICE</th>
              <th className="text-end">AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item, i) => {
              return (
                <tr id={i} key={i}>
                  <td style={{ width: '70px' }}>
                    {item.quantity}
                  </td>
                  <td>
                    {item.name} - {item.description}
                  </td>
                  <td className="text-end" style={{ width: '100px' }}>{invoice.currency} {item.price}</td>
                  <td className="text-end" style={{ width: '100px' }}>{invoice.currency} {item.price * item.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Table>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr className="text-end">
              <td></td>
              <td className="fw-bold" style={{ width: '100px' }}>SUBTOTAL</td>
              <td className="text-end" style={{ width: '100px' }}>{invoice.currency} {invoice.subTotal}</td>
            </tr>
            {invoice.taxAmount !== 0.00 &&
              <tr className="text-end">
                <td></td>
                <td className="fw-bold" style={{ width: '100px' }}>TAX</td>
                <td className="text-end" style={{ width: '100px' }}>{invoice.currency} {invoice.taxAmount}</td>
              </tr>
            }
            {invoice.discountAmount !== 0.00 &&
              <tr className="text-end">
                <td></td>
                <td className="fw-bold" style={{ width: '100px' }}>DISCOUNT</td>
                <td className="text-end" style={{ width: '100px' }}>{invoice.currency} {invoice.discountAmount}</td>
              </tr>
            }
            <tr className="text-end">
              <td></td>
              <td className="fw-bold" style={{ width: '100px' }}>TOTAL</td>
              <td className="text-end" style={{ width: '100px' }}>{invoice.currency} {invoice.total}</td>
            </tr>
          </tbody>
        </Table>
        {invoice.notes &&
          <div className="bg-light py-3 px-4 rounded">
            {invoice.notes}
          </div>}
      </div>
      <div className="pb-4 px-4">
        <Row>
          <Col md={4}>
            <Button variant="primary" className="d-block w-100" onClick={handleEdit}>
              <AiOutlineEdit style={{ width: '15px', height: '15px', marginTop: '-3px' }} className="me-2" />Edit Invoice
            </Button>
          </Col>
          <Col md={4}>
            <Button variant="outline-danger" className="d-block w-100 mt-3 mt-md-0"
              onClick={() => { setShow(true) }}>
              <AiOutlineDelete style={{ width: '16px', height: '16px', marginTop: '-3px' }} className="me-2" />
              Delete Invoice
            </Button>
          </Col>
          <Col md={4}>
            <Button variant="primary" className="d-block w-100 mt-3 mt-md-0" onClick={handleCopy}>
              <BiCopy style={{ width: '16px', height: '16px', marginTop: '-3px' }} className="me-2" />
              Copy Invoice
            </Button>
          </Col>
        </Row>
        <DangerModal
          show={show}
          setShow={setShow}
          Heading={"Delete Confirmation "}
          msg={"Are you sure you want to delete this invoice? this cannot be undone."}
          handleSave={handleDelete}
          btnText='Delete'
        />
      </div>
    </div>
  )
}

export default InvoiceCard