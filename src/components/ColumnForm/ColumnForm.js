import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';

const ColumnForm = () => {
    const [value, setValue] = useState('');
    const [icon, setIcon] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title: value, icon }));
        setValue('');
        setIcon('');
    };

	return (
        <form  onSubmit={handleSubmit} className={styles.columnform}>
            <label>
              Title:
              <TextInput value={value} onChange={e => setValue(e.target.value)} />
            </label>
            <label>
              Icon:
              <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            </label>
            <Button type="submit">Add column</Button>
        </form>
	);
};

export default ColumnForm;