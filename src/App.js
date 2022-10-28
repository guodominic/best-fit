import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home-component'
import Navigation from './routes/navigation/navigation-component'
import Authentication from './routes/authentication/authentication-component'

const App = () => {

  const Shop = () => {
    return <h1>I'm the shop</h1>
  }
  const Contact = () => {
    return <h1>I'm the Contact</h1>
  }
  return (
    <Routes>
      <Route path='/best-fit' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='best-fit/shop' element={<Shop />} />
        <Route path='best-fit/contact' element={<Contact />} />
        <Route path='best-fit/auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App