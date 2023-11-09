import CreateInvoice from "./Pages/CreateInvoice";
import EditInvoice from "./Pages/EditInvoice";
import Home from "./Pages/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/invoice-create",
    element: <CreateInvoice />,
  },
  {
    path: "/invoice-edit",
    element: <EditInvoice />,
  },
]
export default routes;