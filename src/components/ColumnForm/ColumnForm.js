import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = props => {
    const [value, setValue] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: value, icon: icon });
        setValue('');
        setIcon('');
    };

	return (
        <form className="columnForm" onSubmit={handleSubmit}>
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