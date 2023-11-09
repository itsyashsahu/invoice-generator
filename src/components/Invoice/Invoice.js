import React from 'react'
import InvoiceCard from "./InvoiceCard";
const Invoice = ({ invoices }) => {
  return (
    <>
      <div className="mb-4 grid gap-3" style={{ display: 'grid' }} >
        {
          invoices?.map((invoice, i) => {
            return (
              <InvoiceCard invoice={invoice} key={i} />
            )
          })
        }
        {
          invoices.length === 0 ? <div className='flex-1 d-flex h-100 w-100 justify-content-center align-items-center'> No Invoices found </div> : null
        }
      </div>
    </>
  )
}

export default Invoice