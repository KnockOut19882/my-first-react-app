import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


const SearchForm = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_SEARCHSTRING', payload: search });
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSearch}>
            <TextInput name="search" placeholder="Search…" value={search} onChange={e => setSearch(e.target.value)} />
            <Button type="submit">
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;