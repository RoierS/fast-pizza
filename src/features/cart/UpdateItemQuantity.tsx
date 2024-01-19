import { useDispatch, useSelector } from 'react-redux';

import Button from '@/ui/Button';

import {
  decreaseQuatity,
  getCurrentQuantityById,
  increaseQuatity,
} from './CartSlice';

interface UpdateItemQuantityProps {
  pizzaId: number;
}

const UpdateItemQuantity: React.FC<UpdateItemQuantityProps> = ({ pizzaId }) => {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  const handleIncrement = () => {
    dispatch(increaseQuatity(pizzaId));
  };

  const handleDecrement = () => {
    dispatch(decreaseQuatity(pizzaId));
  };

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={handleDecrement}>
        -
      </Button>

      <span className="text-sm font-medium">{currentQuantity}</span>

      <Button type="round" onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
