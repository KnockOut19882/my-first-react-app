import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateSearchString } from '../../redux/store';
import { useLocation } from 'react-router-dom';

const SearchForm = () => {
    const dispatch = useDispatch();  // dostęp do dispatch
    const [search, setSearch] = useState('');   // lokalny stan dla wartości input
    const location = useLocation(); // hook do śledzenia zmiany ścieżki

    useEffect(() => {
        setSearch('');  // wyczyszczenie lokalnego stanu
        dispatch(updateSearchString(''));   // wyczyszczenie stanu w Reduxie
    }, [location.pathname, dispatch]);  // efekt uruchomi się przy zmianie ścieżki

    const handleSearch = (e) => {
        e.preventDefault();
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSearch}>
            <TextInput
                name="search"
                placeholder="Search…"
                value={search}
                onChange={e => {
                    setSearch(e.target.value);  // aktualizacja lokalnego stanu
                    dispatch(updateSearchString(e.target.value));   // wysyłanie frazy do Reduxa
                }}
            />
            <Button type="submit">
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;