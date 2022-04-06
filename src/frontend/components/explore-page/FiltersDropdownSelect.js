import React, { useEffect, useState } from 'react';

const FiltersDropdownSelect = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // filtersDispatch({ type: 'FILTER_BY', payload: selectedCategory });
  }, [selectedCategory, setSelectedCategory]);

  return (
    <div className="custom-select">
      <select className="bg-amber-600 text-white text-xl">
        <option value="all">All</option>
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
