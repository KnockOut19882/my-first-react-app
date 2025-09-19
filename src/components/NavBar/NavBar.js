
import styles from './NavBar.module.scss';
import 'font-awesome/css/font-awesome.min.css';
import Container from '../Container/Container';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className={styles['nav-bar']}>
    <Container>
      <div className={styles['parent']}>
        <div className={styles['home-icon-container']}>
          <a href="/"><i className='fa fa-tasks'></i></a>
        </div>
        <div>
          <ul>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorites">Favorite</NavLink></li>
          </ul>
        </div>
      </div>
    </Container>
  </nav>
)

export default NavBar;