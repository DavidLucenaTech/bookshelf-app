import './App.css'
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer'
import { Favorites } from './components/favorites/Favorites'
import { Cosmere } from './components/cosmere/Cosmere'
import { Thenameofwind } from './components/thenameofwind/Thenameofwind'
import { Throneofglass } from  './components/throneofglass/Throneofglass'
import { Empyrean } from './components/empyrean/Empyrean'
import { Routes, Route} from 'react-router-dom'

export function App() {

  return (
    <div>
      <Header/>
      <Navbar/>
      <section>
          <Routes>
            <Route 
                path='/'
                element= {
                  <Favorites></Favorites>
                }
              />
            <Route 
              path='/favorites'
              element= {
                <Favorites></Favorites>
              }
            />
            <Route 
              path='/cosmere'
              element= {
                <Cosmere></Cosmere>
              }
            />
            <Route 
              path='/thenameofwind'
              element= {
                <Thenameofwind></Thenameofwind>
              }
            />
            <Route 
              path='/throneofglass'
              element= {
                <Throneofglass></Throneofglass>
              }
            />
            <Route 
              path='/empyrean'
              element= {
                <Empyrean></Empyrean>
              }
            />
          </Routes>
      </section>
      <Footer/>
    </div>
  )
}

export default App
