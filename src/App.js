import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
function App() {
  return (
    <>
   <Navbar/>
   <ItemListContainer greeting="Hola mundo desde ItemListContainer"/>
   </>
  );
}

export default App;
