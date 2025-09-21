import { addList } from "../../redux/store";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { useState } from "react";
import styles from "./ListForm.module.scss";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const ListForm = () => {
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title: value, description, id: Date.now() }));
        setValue('');
        setDescription('');
    };

	return (
        <form  onSubmit={handleSubmit} className={styles.listform}>
            <label>
              Title:
              <TextInput value={value} onChange={e => setValue(e.target.value)} />
            </label>
            <label>
              Description:
              <TextInput value={description} onChange={e => setDescription(e.target.value)} />
            </label>
            <Button type="submit">Add list</Button>
        </form>
	);
};

export default ListForm;