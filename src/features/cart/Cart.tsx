import { useSelector } from 'react-redux';

import { RootState } from '@/store/store';
import Button from '@/ui/Button';
import LinkButton from '@/ui/LinkButton';

import CartItem from './CartItem';

const Cart = () => {
  const { username } = useSelector((state: RootState) => state.user);

  const { cart } = useSelector((state: RootState) => state.cart);

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-center gap-x-6">
        <Button type="primary" to="/order/new" disabled={false}>
          Order pizzas
        </Button>

        <Button type="secondary" disabled={false}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
};

export default Cart;
