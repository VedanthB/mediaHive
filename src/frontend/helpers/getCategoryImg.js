export const getCategoryImg = (category, categories) => {
  let foundCategory = categories.find((item) => item.categoryName === category);

  return foundCategory?.categoryImg;
};
