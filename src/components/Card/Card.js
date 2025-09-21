import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardRedux';

const Card = props => {
    const dispatch = useDispatch();
    console.log(props);

    return (
        <li className={styles.card}>
            {props.title}
            <button
                className={styles.favoriteBtn}
                onClick={() => dispatch(toggleCardFavorite(props.id))}
                aria-label="Toggle favorite" >
                <i className={`fa ${props.isFavorite ? 'fa-star' : 'fa-star-o'}`}></i>
            </button>
        </li>
    );
};

export default Card;