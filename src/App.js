import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Favorites from './components/Favorites/Favorites';
import NotFound from './components/NotFound/NotFound'; // Create this component

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} /> {/* 404 route */}
        </Routes>
      </Container>
    </main>
  );
};

export default App;