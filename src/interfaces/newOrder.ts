import { ICart } from './cart';

export interface INewOrder {
  address: string;
  cart: ICart[];
  customer: string;
  phone: string;
  priority: boolean | string;
}
