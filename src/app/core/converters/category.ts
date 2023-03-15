import { FirestoreDataConverter, Timestamp } from '@angular/fire/firestore';
import { ICategory } from '../models/category';

type FirestoreCategory = Omit<ICategory, 'createdAt' | 'updatedAt'> & {
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

export const categoryConverter: FirestoreDataConverter<ICategory> = {
  toFirestore: (product) => ({
    id: product.id,
    name: product.name,
    active: product.active,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
  }),
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options) as FirestoreCategory;
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
