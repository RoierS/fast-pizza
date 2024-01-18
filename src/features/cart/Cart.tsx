import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useFetcher } from 'react-router-dom';

import { IPizza } from '@/interfaces/pizza';
import Button from '@/ui/Button';
import LinkButton from '@/ui/LinkButton';

import { getUsername } from '../user/UserSlice';

import CartItem from './CartItem';
import { clearCart, getCart } from './CartSlice';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const username = useSelector(getUsername);
  const cart = useSelector(getCart);

  const dispatch = useDispatch();

  const fetcher = useFetcher();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    if (!fetcher.data && fetcher.state === 'idle') {
      fetcher.load('/menu');
    }
  }, [fetcher]);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem
            key={item.pizzaId}
            item={item}
            isLoadingItem={fetcher.state === 'loading'}
            image={
              fetcher.data?.find((el: IPizza) => el.id === item.pizzaId)
                .imageUrl
            }
          />
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-center gap-x-6">
        <Button type="primary" to="/order/new" disabled={false}>
          Order pizzas
        </Button>

        <Button type="secondary" disabled={false} onClick={handleClearCart}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
};

export default Cart;
