import Navbar from "./components/NavBar/Navbar"
import Hero from "./components/Hero/Hero"
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

        <Navbar/>
        <Hero />

      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
