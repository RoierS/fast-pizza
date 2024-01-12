import { IPizza } from '@/interfaces/pizza';
import { formatCurrency } from '@/utils/helpers';

interface IMenuItemProps {
  pizza: IPizza;
}

const MenuItem: React.FC<IMenuItemProps> = ({ pizza }) => {
  const {
    id,
    name,
    unitPrice,
    ingridients,
    soldOut: isSoldOut,
    imageUrl,
  } = pizza;

  // eslint-disable-next-line no-console
  console.log(id);

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingridients.join(', ')}</p>
        <div>
          {!isSoldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
