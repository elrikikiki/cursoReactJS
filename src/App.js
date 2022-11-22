import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/componentsSecondary/ItemListContainer'
import ItemDetailContainer from './components/main/ItemDetailContainer'
import Cart from './components/componentsSecondary/Cart';
import CartProvider from './contexts/CartContext';
import Checkout from './components/checkout/Checkout';

function App() { 
  return ( 
    <BrowserRouter>
     <CartProvider>
      <Navbar saludo='BIRREX' edad={28} nombre ='santi'/>
      <Header/>
        <Routes>
            <Route path='/' element={<ItemListContainer greeting='Bienvenidos a Birrex'/>}/> 
            <Route path='/detail/:idProd' element={<ItemDetailContainer/>}/>
            <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>} />
        </Routes>
      </CartProvider>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;