import { FirestoreDataConverter } from '@angular/fire/firestore';
import { ICategory } from '../models/category';

export const categoryConverter: FirestoreDataConverter<ICategory> = {
  toFirestore: (product) => ({
    id: product.id,
    name: product.name,
    active: product.active,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
  }),
  fromFirestore: (snapshot, options) => {
    const data: any = snapshot.data(options);
    const category: ICategory = {
      id: data.id,
      name: data.name,
      active: data.active,
      createdAt: data.createdAt.toDate(),
      updatedAt: data.updatedAt.toDate(),
    };
    return category;
  },
};
