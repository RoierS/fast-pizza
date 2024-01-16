import { ICart } from '@/interfaces/cart';
import Button from '@/ui/Button';
import { formatCurrency } from '@/utils/helpers';

interface ICartItemProps {
  item: ICart;
}

const CartItem: React.FC<ICartItemProps> = ({ item }) => {
  const { pizzaId, name, quantity, totalPrice } = item;

  // eslint-disable-next-line no-console
  console.log(pizzaId);
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-x-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small" disabled={false}>
          Delete
        </Button>
      </div>
    </li>
  );
};

export default CartItem;
