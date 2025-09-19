import Hero from './components/Hero/Hero';
import SearchForm from './components/SearchForm/SearchForm';
import List from './components/List/List';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';

const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Home />
      </Container>
    </>
  );
};

export default App;