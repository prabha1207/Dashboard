import './App.css';
import Customers from './Pages/Customers';
import Dashboard from './Pages/Dashboard';
import Income from './Pages/Income';
import Product from './Pages/Product';
import Promote from './Pages/Promote';
import Help from './Pages/Help';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/customers" element={<Customers/>}></Route>
        <Route path="/income" element={<Income/>}></Route>
        <Route path="/promote" element={<Promote/>}></Route>
        <Route path="/help" element={<Help/>}></Route>
      </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
