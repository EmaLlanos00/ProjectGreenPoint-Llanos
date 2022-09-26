import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Location from './components/Locations';
import CartContextProvider from './contexts/CartContext';
import AccountModal from './components/AccountModal';
import ModalContexProvider from './contexts/ModalContex';

function App() {

  return (
    <ModalContexProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/locations" element={<Location />} />
          </Routes>
          <Footer />
          <AccountModal />
        </BrowserRouter>
      </CartContextProvider>
    </ModalContexProvider>
  );
}

export default App;
