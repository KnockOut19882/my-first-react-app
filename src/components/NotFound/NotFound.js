import styles from './NotFound.module.scss';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className={styles.NotFound}>
    <h2 className={styles.errorCode}>404 - Page Not Found</h2>
    <p className={styles.message}>The page you are looking for does not exist.</p>
    <Link to="/" className={styles.homeLink}>Go to Home</Link>
  </div>
);

export default NotFound;