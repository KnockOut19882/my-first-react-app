import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardRedux';
import { removeCard } from '../../redux/cardRedux';

const Card = props => {
    const dispatch = useDispatch();
    console.log(props);

    return (
        <li className={styles.card}>
            {props.title}
            <div className={styles.actions}>
                <button
                    className={styles.favoriteBtn}
                    onClick={() => dispatch(toggleCardFavorite(props.id))}
                    aria-label="Toggle favorite" >
                    <i className={`fa ${props.isFavorite ? 'fa-star' : 'fa-star-o'}`}></i>
                </button>
                <button
                    className={styles.deleteBtn}
                    onClick={() => dispatch(removeCard(props.id))}
                    aria-label="Delete card">
                    <i className="fa fa-trash"></i>
                </button>
            </div>
        </li>
    );
};

export default Card;