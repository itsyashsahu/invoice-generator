
// custom history object to allow navigation outside react components
export const history = {
  navigate: null,
  location: null
};

const initialState = {
  isOpen: false,
  currency: '$',
  currentDate: '2023-11-08',
  invoiceNumber: 1,
  dateOfIssue: '2023-11-08',
  billTo: 'John Doe',
  billToEmail: 'john.doe@example.com',
  billToAddress: '123 Main Street, Mumbai, Maharashtra - 400001, India',
  billFrom: 'Jane Smith',
  billFromEmail: 'jane.smith@example.com',
  billFromAddress: '456 Park Avenue, Bangalore, Karnataka - 560001, India',
  notes: 'Payment due within 30 days',
  total: 100,
  subTotal: 100,
  taxRate: 10,
  taxAmount: 10.00,
  discountRate: 5,
  discountAmmount: 5.00,
};

const initialItems = [
  {
    id: 0,
    name: 'Product A',
    description: 'Description for Product A',
    price: 20.00,
    quantity: 3,
  },
  {
    id: 1,
    name: 'Product B',
    description: 'Description for Product B',
    price: 15.00,
    quantity: 2,
  },
  {
    id: 2,
    name: 'Product C',
    description: 'Description for Product C',
    price: 10.00,
    quantity: 5,
  },
];

const dummyInvoice = {
  // state: {
  ...initialState,
  items: [...initialItems],
  // },
};

const multipleEntries = [];

export function getDummyInvoice() {
  return dummyInvoice;
}
export function getDummyInvoices() {

  for (let i = 1; i <= 5; i++) {
    multipleEntries.push({ ...dummyInvoice, invoiceNumber: i });
  }

  return multipleEntries;
}

