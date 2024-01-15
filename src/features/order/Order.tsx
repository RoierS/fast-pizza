import { useLoaderData } from 'react-router-dom';

import { IOrder } from '@/interfaces/order';
import {
  calculateMinutesLeft,
  formatCurrency,
  formatDate,
} from '@/utils/helpers';

const Order: React.FC = () => {
  const order = useLoaderData();

  const {
    id,
    status,
    priority: hasPriority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    // cart,
  } = order as IOrder;

  const deliverIn = calculateMinutesLeft(estimatedDelivery);

  return (
    <div>
      <div>
        <h2>Status of order {id}</h2>

        <div>
          {hasPriority && <span>Priority: </span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliverIn >= 0
            ? `Only ${calculateMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p>(Estimated Delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {hasPriority && <p>Price Priority: {formatCurrency(priorityPrice)}</p>}
        <p>
          To pay on delivery:
          {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
};

export default Order;
