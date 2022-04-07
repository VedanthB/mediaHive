import React, { useEffect, useState } from "react";
import { filterActions } from "../../context/constants";
import { useFilters } from "../../context/providers";

const FiltersDropdownSelect = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { filtersDispatch } = useFilters();

  useEffect(() => {
    filtersDispatch({
      type: filterActions.FILTER_BY,
      payload: selectedCategory,
    });
  }, [selectedCategory]);

  return (
    <div className="custom-select">
      <select
        className="bg-amber-600 text-white text-xl"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Disney">Disney</option>
        <option value="Pixar">Pixar</option>
        <option value="Marvel">Marvel</option>
        <option value="Star Wars">Star Wars</option>
        <option value="Nat Geo">Nat Geo</option>
      </select>
    </div>
  );
};

export default FiltersDropdownSelect;
