import { useLoaderData } from 'react-router-dom';

import { IOrder } from '@/interfaces/order';
import {
  calculateMinutesLeft,
  formatCurrency,
  formatDate,
} from '@/utils/helpers';

import OrderItem from './OrderItem';

const Order: React.FC = () => {
  const order = useLoaderData();

  const {
    id,
    status,
    priority: hasPriority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order as IOrder;

  const deliverIn = calculateMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between">
        <h2 className="text-xl font-semibold">Status of order #{id}</h2>

        <div className="space-x-2">
          {hasPriority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium">
          {deliverIn >= 0
            ? `Only ${calculateMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated Delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map((item) => (
          <OrderItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {hasPriority && (
          <p className="text-sm font-medium text-stone-600">
            Price Priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery:
          {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
};

export default Order;
