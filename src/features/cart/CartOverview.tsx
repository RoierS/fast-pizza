import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { formatCurrency } from '@/utils/helpers';

import { getTotalCartPrice, getTotalQuantity } from './CartSlice';

const CartOverview: React.FC = () => {
  const totalPrice = useSelector(getTotalCartPrice);

  const totalPizzaQuantity = useSelector(getTotalQuantity);

  if (!totalPizzaQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="sp:space-x-6 space-x-4 font-semibold text-stone-300">
        <span>{`${totalPizzaQuantity} ${totalPizzaQuantity === 1 ? 'pizza' : 'pizzas'}`}</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
};

export default CartOverview;
