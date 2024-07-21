import './App.css'
import Introduction from './components/Introduction/Introduction'
import Projects from './components/Projects/Projects'
import NavBar from './components/NavBar/NavBar'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer/Footer'

function App() {
  
  return (
    <>
      <NavBar />
      <Introduction />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default App
