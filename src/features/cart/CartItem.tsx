import { IOrder } from '@/interfaces/order';
import { formatCurrency } from '@/utils/helpers';

interface ICartItemProps {
  item: IOrder;
}

const CartItem: React.FC<ICartItemProps> = ({ item }) => {
  const { pizzaId, name, quantity, totalPrice } = item;

  // eslint-disable-next-line no-console
  console.log(pizzaId);
  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
};

export default CartItem;
