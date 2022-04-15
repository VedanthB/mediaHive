import { categoryActions } from '../context/constants';
import { getCategoriesService } from '../services';

export const getCategories = async (categoryDispatch) => {
  try {
    categoryDispatch({ type: categoryActions.LOADING });

    const {
      data: { categories },
      status
    } = await getCategoriesService();

    if (status >= 200 && status < 300) {
      categoryDispatch({ type: categoryActions.GET_CATEGORIES, payload: categories });
    }
  } catch (error) {
    categoryDispatch({ type: categoryActions.ERROR, payload: error });
  }
};
