import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routes from './routes';
const router = createBrowserRouter(routes);


function App() {
  return (
    <>
      {/* Layout */}
      <div className="App">
        <ToastContainer />
        <Header />
        <Container className='h-100 flex-1 w-100'>
          {/* Router */}
          <RouterProvider router={router} />
        </Container>
      </div>
    </>
  );
}


export default App;
