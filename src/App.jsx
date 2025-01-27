import { useState } from 'react'
import './App.css'
import { OrderPizza } from './components/OrderPizza'
import { Switch,Route } from 'react-router-dom/cjs/react-router-dom.min'
import { HomePage } from './components/HomePage'


function App() {
  const [count, setCount] = useState(false)
  function handleClick()
  {
   <Link to="/OrderPizza"></Link>
   setCount(true);
  }

  return (
    <>
       <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          
          <Route path="/siparis">
          <OrderPizza/>

          </Route>
        </Switch>
    </>
  )
}

export default App
