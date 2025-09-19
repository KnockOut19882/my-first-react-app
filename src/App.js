import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Favorites from './components/Favorites/Favorites';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Container>
 </main>
  );
};

export default App;