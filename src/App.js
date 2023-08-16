import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Carrinho from './views/cart'; // Certifique-se de que o caminho está correto
import Produtos from './views/Promo'; // Certifique-se de que o caminho está correto
import Inicio from './views/Inicio'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/cart">Carrinho</Link>
              </li>
              <li>
                <Link to="/Promo">Produtos</Link>
              </li>
              <li>
                <Link to="/Inicio">Inicio</Link>
              </li>
            </ul>
          </nav>

          <Switch>
          <Route path="/Inicio" component={Inicio} />
            <Route path="/cart" component={Carrinho} />
            <Route path="/Promo" component={Produtos} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
