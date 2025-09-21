import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './components/About/About';
import Favorites from './components/Favorites/Favorites';
import NotFound from './components/NotFound/NotFound';
import List from './components/List/List';

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
          <Route path="*" element={<Navigate to="/" />} /> {/* przekierowanie na Home */}
          <Route path="/list/:listId" element={<List />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;