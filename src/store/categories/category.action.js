import { CATEGORIES_ACTION_TYPES } from './category.types';
// import { createAction } from '../../utils/reducer/reducer.utils';

export const setCategories = (categoriesArray) => ({
    type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
    payload: categoriesArray
});
