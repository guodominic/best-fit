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
        <Route path='best-fit/shop/*' element={<Shop />} />
        <Route path='best-fit/contact' element={<Contact />} />
        <Route path='best-fit/auth' element={<Authentication />} />
        <Route path='best-fit/checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App