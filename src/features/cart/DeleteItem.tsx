import { useDispatch } from 'react-redux';

import Button from '@/ui/Button';

import { deleteFromCart } from './CartSlice';

interface IDeleteItemProps {
  pizzaId: number;
}

const DeleteItem: React.FC<IDeleteItemProps> = ({ pizzaId }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteFromCart(pizzaId));
  };

  return (
    <Button type="small" disabled={false} onClick={handleDeleteItem}>
      Delete
    </Button>
  );
};

export default DeleteItem;
