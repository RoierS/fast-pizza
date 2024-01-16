import { IPizza } from '@/interfaces/pizza';
import Button from '@/ui/Button';
import { formatCurrency } from '@/utils/helpers';

interface IMenuItemProps {
  pizza: IPizza;
}

const MenuItem: React.FC<IMenuItemProps> = ({ pizza }) => {
  const { name, unitPrice, ingredients, soldOut: isSoldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${isSoldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex flex-auto flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between gap-x-1">
          {!isSoldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-md text-sm uppercase text-stone-500">Sold out</p>
          )}

          <Button
            disabled={isSoldOut ? true : false}
            type={isSoldOut ? 'soldOut' : 'small'}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
