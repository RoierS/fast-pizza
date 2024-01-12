import { ICart } from '@/interfaces/cart';
import { formatCurrency } from '@/utils/helpers';

interface IOrderItemProps {
  item: ICart;
  isLoadingIngridients: boolean;
  ingridients: string[];
}

const OrderItem: React.FC<IOrderItemProps> = ({
  item,
  // isLoadingIngridients,
  // ingridients,
}) => {
  const { quantity, name, totalPrice } = item;
  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
};

export default OrderItem;
