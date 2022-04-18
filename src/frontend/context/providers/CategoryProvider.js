import { createContext, useContext, useReducer, useEffect } from "react";
import { useToast } from "../../hooks";
import { getCategories } from "../../utils";
import { categoryReducer } from "../reducer";

const CategoryContext = createContext();

const categoryInitState = {
  categories: [],
  error: null,
  loading: false,
};

export const CategoryProvider = ({ children }) => {
  const [categoryState, categoryDispatch] = useReducer(
    categoryReducer,
    categoryInitState
  );

  const { showToast } = useToast();

  useEffect(() => {
    getCategories(categoryDispatch, showToast);
  }, []);

  return (
    <CategoryContext.Provider value={{ categoryState, categoryDispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
