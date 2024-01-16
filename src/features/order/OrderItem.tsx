import { ICart } from '@/interfaces/cart';
import { formatCurrency } from '@/utils/helpers';

interface IOrderItemProps {
  item: ICart;
  isLoadingIngridients?: boolean;
  ingridients?: string[];
}

const OrderItem: React.FC<IOrderItemProps> = ({
  item,
  // isLoadingIngridients,
  // ingridients,
}) => {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="px-1 py-2">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
};

export default OrderItem;
