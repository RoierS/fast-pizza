import { IPizza } from '@/interfaces/pizza';
import { formatCurrency } from '@/utils/helpers';

interface IMenuItemProps {
  pizza: IPizza;
}

const MenuItem: React.FC<IMenuItemProps> = ({ pizza }) => {
  const { name, unitPrice, ingredients, soldOut: isSoldOut, imageUrl } = pizza;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div>
          {!isSoldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
