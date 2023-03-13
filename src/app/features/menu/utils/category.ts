import { ICategory } from '../../../core/models/category';

export const findCategory = (
  categories: ICategory[],
  id: string
): ICategory | undefined => {
  return categories.find((category) => category.id === id);
};
