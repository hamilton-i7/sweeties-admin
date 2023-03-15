import { FirestoreDataConverter, Timestamp } from '@angular/fire/firestore';
import { IUser } from '../models/users';

type FirestoreUser = Omit<IUser, 'createdAt' | 'updatedAt'> & {
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

export const userConverter: FirestoreDataConverter<IUser> = {
  toFirestore: (user) => ({
    email: user.email,
    name: user.name,
    lastName: user.lastName,
    role: user.role,
    active: user.active,
    imgPath: user.imgPath,
    imgUrl: user.imgUrl,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  }),
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options) as FirestoreUser;
    const user: IUser = {
      email: data.email,
      name: data.name,
      lastName: data.lastName,
      role: data.role,
      active: data.active,
      imgPath: data.imgPath,
      imgUrl: data.imgUrl,
      createdAt: data.createdAt.toDate(),
      updatedAt: data.updatedAt.toDate(),
    };
    return user;
  },
};
