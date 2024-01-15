import { redirect } from 'react-router-dom';

import { createOrder } from '@/services/apiRestaurant';

export const createOrderAction = async ({ request }: { request: Request }) => {
  const formData: FormData = await request.formData();

  const data = Object.fromEntries(formData);
  const cart = formData.get('cart') as string;

  const order = {
    ...data,
    cart: JSON.parse(cart),
    priority: data.priority === 'on',
  };

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
};
