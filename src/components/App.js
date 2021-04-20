

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Banner from './banner.js'
import Home from './Home.js'
import Cart from './Cart.js'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import {useState, useEffect} from 'react'
import '../styles/Layout.css'


function App() {

  //Mettre les useEffect dans les composants où l'élément modifié n'est pas un props
 //Vérifier s'il y a une version du panier enregistrer dans LS puis sauvegarder le nouveau panier;
  const savedCart = localStorage.getItem('cart')
  //Définir l'état initial du cart à partir de ce qui est sauvegardé dans le LS; si vide alors [];
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  //A chaque fois que la valeur du cart change sauvegarder
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])



  return (
    <Router>
    <div className="App">
      <Banner />
      <div className='lmj-layout-inner'>
        <Switch>
          <Route path='/' exact>
            <Home/>
          </Route>
          <Route path="/cart">
            <Cart  
              cart={cart} updateCart={updateCart}
            />
          </Route>

          <Route path='/shop'>
            <ShoppingList 
              cart={cart} updateCart={updateCart} 
            />
          </Route>
        </Switch>
      </div>
      
      <Footer />
    </div>
  </Router>
  );
}

export default App;
