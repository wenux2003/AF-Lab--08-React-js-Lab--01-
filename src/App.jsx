import Button from './components/Button.jsx'
import Greeting from './components/Greeting.jsx'
import NavBar from './components/NavBar.jsx'
import './App.css'

function App() {
  return (
    <div className="app" id="home">
      <NavBar />
      <main>
        <Greeting />
        <section className="actions">
          <Button href="#services" size="large">
            View Services
          </Button>
          <Button href="#contact" variant="secondary">
            Contact Me
          </Button>
        </section>
      </main>
    </div>
  )
}

export default App
