import { Link } from 'react-router-dom';

import { testCart } from '@/data/testCart';

const Cart = () => {
  const cart = testCart;

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
