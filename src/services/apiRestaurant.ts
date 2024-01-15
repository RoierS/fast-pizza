import { ICart } from '@/interfaces/cart';
import { INewOrder } from '@/interfaces/newOrder';

const API_URL = 'https://react-fast-pizza-api.onrender.com/api';

export const getMenu = async () => {
  const res = await fetch(`${API_URL}/menu`);

  if (!res.ok) throw new Error('failed getting menu');

  const { data } = await res.json();
  return data;
};

export const getOrder = async (id: string) => {
  const res = await fetch(`${API_URL}/order/${id}`);

  if (!res.ok) throw new Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
};

export const createOrder = async (newOrder: INewOrder) => {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();

    const { data } = await res.json();
    return data;
  } catch (error) {
    throw Error('Could not create an order');
  }
};

export const updateOrder = async (id: string, updatedOrder: ICart) => {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updatedOrder),
      headers: {
        'Content-Type': 'Application/json',
      },
    });

    if (!res.ok) throw Error;
  } catch (error) {
    throw Error('Error updating order');
  }
};
