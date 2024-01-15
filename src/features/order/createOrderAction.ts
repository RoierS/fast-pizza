import { redirect } from 'react-router-dom';

import { INewOrder } from '@/interfaces/newOrder';
import { createOrder } from '@/services/apiRestaurant';
import { isValidPhone } from '@/utils/helpers';

export interface IErrors {
  phone?: string;
}

export const createOrderAction = async ({ request }: { request: Request }) => {
  const formData: FormData = await request.formData();

  const data = Object.fromEntries(formData) as unknown as INewOrder;
  const cart = formData.get('cart') as string;

  const order = {
    ...data,
    cart: JSON.parse(cart),
    priority: data.priority === 'on',
  };
  const errors: IErrors = {};

  if (!isValidPhone(order.phone))
    errors.phone = 'Please give us correct phone number';

  if (Object.keys(errors).length > 0) return errors;

  // if all ok create new order and redirect
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
};
