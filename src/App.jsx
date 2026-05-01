import Greeting from './components/Greeting.jsx'
import NavBar from './components/NavBar.jsx'
import './App.css'

function App() {
  return (
    <div className="app" id="home">
      <NavBar />
      <main>
        <Greeting />
      </main>
    </div>
  )
}

export default App
