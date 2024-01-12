import { Link } from 'react-router-dom';

import { IOrder } from '@/interfaces/order';

const fakeCart: IOrder[] = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

const Cart = () => {
  const cart = fakeCart;

  // eslint-disable-next-line no-console
  console.log(cart);

  return (
    <div>
      <Link to="/menu">&larr; Back to menu</Link>

      <h2>Your cart, %NAME%</h2>

      <div>
        <Link to="/order/new">oredr pizzas</Link>
        <button>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
