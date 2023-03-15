export interface IUser {
  readonly email: string;
  readonly name: string;
  readonly lastName: string;
  readonly role: UserRole;
  readonly active: boolean;
  readonly imgPath: string;
  readonly imgUrl: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export enum UserRole {
  ADMIN = 'ADMIN',
  AUTHOR = 'AUTHOR',
  EDITOR = 'EDITOR',
}
