import './App.css';
import { Formations } from './components/Formations';
import { Header } from './components/Header';
import { About } from './components/About';
import { Testimonies } from './components/Testimonies';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Formations />
      <About />
      <Testimonies  />
      <Footer  />
    </>

  );
}

export default App;
