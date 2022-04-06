import React from 'react';
import { useCategory } from '../../context/providers/CategoryProvider';
import CategoryCard from './CategoryCard';

const FeaturedCategories = () => {
  const {
    categoryState: { categories }
  } = useCategory();

  return (
    <div className="featuredCategories__container">
      {/* cards */}

      {categories && categories.map((category, i) => <CategoryCard category={category} key={i} />)}
      {/* cards */}
    </div>
  );
};

export default FeaturedCategories;
