import { redirect } from 'react-router-dom';

import { INewOrder } from '@/interfaces/newOrder';
import { createOrder } from '@/services/apiRestaurant';
import store from '@/store/store';
import { isValidPhone } from '@/utils/helpers';

import { clearCart } from '../cart/CartSlice';

export interface IErrors {
  phone?: string;
}

export const createOrderAction = async ({ request }: { request: Request }) => {
  // reading data from form
  const formData: FormData = await request.formData();

  const data = Object.fromEntries(formData) as unknown as INewOrder;
  const cart = formData.get('cart') as string;

  // new order with form data
  const order = {
    ...data,
    cart: JSON.parse(cart),
    priority: data.priority === 'true',
  };

  const errors: IErrors = {};

  if (!isValidPhone(order.phone))
    errors.phone = 'Please give us correct phone number';

  if (Object.keys(errors).length > 0) return errors;

  // if all ok create new order and redirect
  const newOrder = await createOrder(order);

  // clear cart after order
  store.dispatch(clearCart());

  // redirect to order summary
  return redirect(`/order/${newOrder.id}`);
};
