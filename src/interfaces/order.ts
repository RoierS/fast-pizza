import { ICart } from './cart';

export interface IOrder {
  id: string;
  customer: string;
  phone: string;
  priority: boolean;
  estimatedDelivery: string;
  cart: ICart[];
  position: string;
  orderPrice: number;
  priorityPrice: number;
}
