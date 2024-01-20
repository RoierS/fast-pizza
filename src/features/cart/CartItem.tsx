import { ICart } from '@/interfaces/cart';
import Spinner from '@/ui/Spinner';
import { formatCurrency } from '@/utils/helpers';

import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';

interface ICartItemProps {
  item: ICart;
  image: string;
  isLoadingItem: boolean;
}

const CartItem: React.FC<ICartItemProps> = ({ item, image, isLoadingItem }) => {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="s:flex xs:items-center xs:justify-between block gap-2 py-3">
      <div className="flex-raw mb-2 flex items-center justify-start gap-2 sm:mb-0">
        <div className=" flex items-center justify-center">
          {isLoadingItem ? (
            <Spinner />
          ) : (
            <img className="block h-10 rounded-full" src={image} alt={name} />
          )}
        </div>
        <span>
          {quantity}&times; {name}
        </span>
      </div>
      <div className="xs:gap-2 flex items-center justify-between sm:gap-x-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity pizzaId={pizzaId} />

        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
};

export default CartItem;
