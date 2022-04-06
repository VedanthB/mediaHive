import React from 'react';
import { FiltersDropdownSelect } from '../components';

const ExplorePage = () => {
  return (
    <div className="landingPage__container">
      {/* drop down to select categories  */}
      <div className="mt-10 flex justify-start">
        <FiltersDropdownSelect />
      </div>
      {/* video cards mapped */}
    </div>
  );
};

export default ExplorePage;
