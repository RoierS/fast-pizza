import { useFetcher } from 'react-router-dom';

import { IOrder } from '@/interfaces/order';

import Button from '@/ui/Button';
import Loader from '@/ui/Loader';
import { formatCurrency } from '@/utils/helpers';

interface IUpdateOrderProps {
  order: IOrder;
}

const UpdateOrder: React.FC<IUpdateOrderProps> = ({ order }) => {
  const fetcher = useFetcher();

  const addPriorityPrice = Math.round(order.orderPrice * 0.2);

  const isUpdatingPriority = fetcher.state === 'loading';

  if (isUpdatingPriority) return <Loader />;

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">
        {isUpdatingPriority
          ? 'Updating...'
          : `
        Add priority for ${formatCurrency(addPriorityPrice)}
        `}
      </Button>
    </fetcher.Form>
  );
};

export default UpdateOrder;
