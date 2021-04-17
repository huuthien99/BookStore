import { Router, Switch, Route } from 'react-router-dom'

import history from './utils/history'

import Login from './pages/Login/Login'

function BrowserRouter() {
  function Home() {
    return <h1>Home</h1>
  }
  function Product() {
    return <h1>Product</h1>
  }

  function About() {
    return <h1>About</h1>
  }

  function Cart() {
    return <h1>cart</h1>
  }

  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/product' component={Product} />
        <Route exact path='/about' component={About} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </Router>
  )
}
export default BrowserRouter;