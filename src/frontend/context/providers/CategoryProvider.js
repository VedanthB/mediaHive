import { createContext, useContext, useReducer, useEffect } from "react";
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

  console.log(categoryState);

  useEffect(() => {
    getCategories(categoryDispatch);
  }, []);

  return (
    <CategoryContext.Provider value={{ categoryState, categoryDispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
