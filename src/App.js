import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home-component'
import Navigation from './routes/navigation/navigation-component'
import Authentication from './routes/authentication/authentication-component'
import Shop from './routes/shop/shop-component'
import Checkout from './routes/checkout/checkout-component'

const App = () => {

  const Contact = () => {
    return <h1>I'm the Contact</h1>
  }
  return (
    <Routes>
      <Route path='/best-fit' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='contact' element={<Contact />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App