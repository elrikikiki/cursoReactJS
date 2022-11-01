import './App.css';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import ItemListContainer from './components/componentsSecondary/ItemListContainer'
import ItemDetailContainer from './components/main/ItemDetailContainer'
function App() {
  return (
    <BrowserRouter>
      <Navbar saludo='FutTransfer' edad={28} nombre ='santi'/>
      <Header/>
      <Routes>
        
      <Route path='/' element={<ItemListContainer greeting='Bienvenidos a Birrex'/>}/> 
      <Route
        path='/detail/:idProd' element={<ItemDetailContainer/>}
      />
      <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
