import './App.css';
import Busca from './Components/Shared/Header/Busca/Busca';
import Header from './Components/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Cadastro from './Pages/Cadastro/Cadastro';

import {Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div >
     <Header></Header>
     <Busca></Busca>
     <Routes>
        <Route path='/' element={Home}></Route>
        <Route path='/cadastro' element={Cadastro}></Route>
     </Routes>
      <h1> oi</h1>
    </div>
  );
}

export default App;
