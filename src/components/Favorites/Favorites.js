import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import Card from '../Card/Card';
import styles from './Favorites.module.scss';

const Favorites = () => {
  const favoriteCards = useSelector(getFavoriteCards);

  return (
    <section className={styles.favorites}>
      <h2>Favorite cards</h2>
      <ul>
        {favoriteCards.map(card => (
          <Card key={card.id} {...card} />
        ))}
        {favoriteCards.length === 0 && <p>No favorite cards yet.</p>}
      </ul>
    </section>
  );
};

export default Favorites;