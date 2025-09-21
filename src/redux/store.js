import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import { strContains } from '../utils/strContains';
import listsReducer from './listsRedux';
import columnsReducer from './columnRedux';
import cardsReducer from './cardRedux';
import searchStringReducer from './searchRedux';


//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));
  
export const getAllColumns = state => state.columns;

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

export const getColumnsByListId = (state, listId) =>
  state.columns.filter(column => column.listId === listId);

export const getAllLists = state => state.lists;

export const getCardById = ({ cards }, cardId) => cards.find(card => card.id === cardId);

export const getFavoriteCards = state => state.cards.filter(card => card.isFavorite);


    
const subreducers = {
      lists: listsReducer,
      columns: columnsReducer,
      cards: cardsReducer,
      searchString: searchStringReducer
    };
    
const reducer = combineReducers(subreducers);

    const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;