
import styles from './NavBar.module.scss';
import 'font-awesome/css/font-awesome.min.css';
import Container from '../Container/Container';

const NavBar = () => (
  <nav className={styles['nav-bar']}>
    <Container>
      <div className={styles['parent']}>
        <div className={styles['home-icon-container']}>
          <a href="/"><i className='fa fa-tasks'></i></a>
        </div>
        <div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/favorites">Favorite</a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  </nav>
)

export default NavBar;