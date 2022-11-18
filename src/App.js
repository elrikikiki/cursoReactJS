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
/* export const Contexto = createContext(); esto tmb va en el otro Componente */ 
function App() { //en app NO PUEDE HABER LOGICA, SOLO LAS RUTAS
  
 /*  const [ productoss, setProductoss ] = useState(products) traelo siempre asi lo convertimos en un estado
  let nombre = "santi"
  como acá no puede ir lógica acá en App, lo mismo q hice acá, lo voy a hacer en otro Componente
  */
  return ( //en App siempre voy a tener las rutas pa

    <BrowserRouter>
     <CartProvider>{/* //aca le pase un valor a todos sus hijos */} {/* <CartContext.Provider> Pero ese cartContextProvider no me sirve xq el value me permite todavía pasarle 
    lógica unicamente desde App, y eso no quiero. Clase 10 1:00hs */}
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