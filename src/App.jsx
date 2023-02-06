import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import Menu from './Components/Menu/Menu'
import Footer from './Components/Footer/Footer'
import PizzaInfo from './Components/PizzaInfo/PizzaInfo'
import Cart from './Components/Cart/Cart'
import { BrowserRouter , Route , Switch } from 'react-router-dom'

function App() {

  return(
<BrowserRouter>
    <section>
      <Nav/>

      <Switch>

        <Route exact path='/' >
          <Home/>
          <Menu/>
          <Footer/>
        </Route>

        <Route path='/PizzaInfo:id' >
          <PizzaInfo/>
        </Route>

        <Route>
          <Cart/>
        </Route>

      </Switch>
      
    </section>
</BrowserRouter>

  );
}

export default App;
