import './App.css'
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer'
import { Body } from './components/body/Body'

export function App() {

  return (
    <div>
      <Header/>
      <Navbar/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App
