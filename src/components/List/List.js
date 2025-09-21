import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getAllColumns, getListById, getColumnsByListId } from '../../redux/store';



const List = () => {
  const columns = useSelector(state => getColumnsByListId(state, 1));
  const ListData = useSelector(state => getListById(state, 1));

  if (!ListData) return <div>Loading...</div>;

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{ListData.title}<span>{ListData.subtitle}</span>
        </h2>
      </header>
      <p className={styles.description}>{ListData.description}</p>
      <section className={styles.columns}>
        {columns.map(column =>
          <Column key={column.id} {...column} />
        )}
      </section>
      <ColumnForm />
    </div>
  );
};
          
          

export default List;