import { createContext, useContext, useReducer, useEffect } from 'react';
import { categoryReducer } from '../reducer';

const CategoryContext = createContext();

const categoryInitState = {
  categories: [],
  error: null,
  loading: false
};

export const CategoryProvider = ({ children }) => {
  const [categoryState, categoryDispatch] = useReducer(categoryReducer, categoryInitState);

  return (
    <CategoryContext.Provider value={{ categoryState, categoryDispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
