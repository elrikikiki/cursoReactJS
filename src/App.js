import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Header from './components/Header'
import Footer from './components/Footer'
import ItemListContainer from './components/componentsSecondary/ItemListContainer';
function App() {
  return (
    <>
      <Navbar saludo='FutTransfer' edad={28}/>
      <ItemListContainer greeting='¡Bienvenidos a FuTransfer!'/>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}
export default App;
