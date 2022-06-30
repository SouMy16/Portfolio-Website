import './App.css';
import Home from "./Components/Home";
import Header from './Components/Header';
import Nav from './Components/Nav';
import Section2 from './Components/Section2';
import Collections from './Components/Collections';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Nav />
      <Section2 />
      <Collections />
      <Contact />
    </div>
  );
}

export default App;
