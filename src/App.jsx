import Banner from './components/Banner.jsx'
import Button from './components/Button.jsx'
import Card from './components/Card.jsx'
import Greeting from './components/Greeting.jsx'
import NavBar from './components/NavBar.jsx'
import heroImage from './assets/hero.png'
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
        <Banner />
        <section className="section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Featured React service</h2>
          </div>
          <Card
            image={heroImage}
            title="Component Design"
            description="Reusable React components for neat, responsive user interfaces."
          />
        </section>
      </main>
    </div>
  )
}

export default App
