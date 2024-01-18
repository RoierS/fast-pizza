import { ICart } from '@/interfaces/cart';
import { formatCurrency } from '@/utils/helpers';

import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';

interface ICartItemProps {
  item: ICart;
}

const CartItem: React.FC<ICartItemProps> = ({ item }) => {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="s:flex xs:items-center xs:justify-between block py-3">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="xs:gap-2 flex items-center justify-between sm:gap-x-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity pizzaId={pizzaId} />

        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
};

export default CartItem;
