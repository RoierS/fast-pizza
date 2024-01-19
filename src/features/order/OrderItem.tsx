import { ICart } from '@/interfaces/cart';
import Spinner from '@/ui/Spinner';
import { formatCurrency } from '@/utils/helpers';

interface IOrderItemProps {
  item: ICart;
  isLoadingIngredients: boolean;
  ingredients: string[];
  image: string;
}

const OrderItem: React.FC<IOrderItemProps> = ({
  item,
  isLoadingIngredients,
  ingredients,
  image,
}) => {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-x-1 px-1 py-2">
      <div className="flex items-center justify-between gap-4 text-sm">
        <div className="flex-raw mb-2 flex items-center justify-center gap-2 sm:mb-1">
          <div className="flex items-center justify-center">
            {isLoadingIngredients ? (
              <Spinner />
            ) : (
              <img className="block h-10 rounded-full" src={image} alt={name} />
            )}
          </div>

          <p>
            <span className="font-bold">{quantity}&times;</span> {name}
          </p>
        </div>

        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>

      <p className="text-sm font-bold capitalize italic text-stone-500">
        {isLoadingIngredients ? 'Loading...' : ingredients?.join(', ')}
      </p>
    </li>
  );
};

export default OrderItem;
