import Header from './components/shared/header/header'
import './App.css';
import Footer from './components/shared/footer/footer';
import Busca from './components/shared/header/busca/busca';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home'
import Cadastro from './pages/cadastro/cadastro'

function App() {
  return (
    <div>
    <Header></Header>
    <Busca></Busca>
    <Routes>
        <Route path="/"> element= Home</Route>
        <Route path="/cadastro"> component= Cadastro </Route>
      </Routes>
      <h1>corpo</h1>
      <Footer></Footer>
    </div>
  );
}

export default App;
