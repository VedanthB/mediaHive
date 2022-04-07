import { useContext, createContext, useReducer } from "react";

const FiltersContext = createContext();

const filtersInitialState = {
  filterBy: null,
};

export const FiltersProvider = ({ children }) => {
  const [filtersState, filtersDispatch] = useReducer(
    filterReducer,
    filtersInitialState
  );

  //   const {
  //     state: { videos }
  //   } = useVideos();

  return (
    <FiltersContext.Provider value={{ filtersState, filtersDispatch }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => useContext(FiltersContext);
