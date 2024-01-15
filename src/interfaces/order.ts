import { ICart } from './cart';

export interface IOrder {
  address: string;
  cart: ICart[];
  createdAt: string;
  customer: string;
  estimatedDelivery: string;
  id: string;
  orderPrice: number;
  phone: string;
  priority: boolean;
  priorityPrice: number;
  position: string;
  status?: string;
}
