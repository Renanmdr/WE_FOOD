import { BrowserRouter, Routes, Route} from 'react-router-dom'

// components
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Container } from './components/layout/Container'
import { Message } from './components/layout/Messsage'

// pages
import { Home } from './components/pages/Home'
import { Register } from './components/pages/auth/Register'
import { Login } from './components/pages/auth/Login'


// context
import { UserProvider } from './context/UserContext'

function App() {


  return (
    <BrowserRouter>
    <UserProvider>
      <Navbar />
      <Message />
      <Container>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Container>
    <Footer />
    </UserProvider>
    </BrowserRouter>
  )
}

export default App
