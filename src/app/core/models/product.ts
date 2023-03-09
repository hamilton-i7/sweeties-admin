export interface IProduct {
  readonly id: string;
  readonly categoryId: string;
  readonly name: string;
  readonly description?: string;
  readonly price?: string;
  readonly active: boolean;
  readonly recommended: boolean;
  readonly imgPath: string;
  readonly imgUrl: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
