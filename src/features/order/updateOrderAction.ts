import { Params } from 'react-router-dom';

import { updateOrder } from '@/services/apiRestaurant';

export const updateOrderAction = async ({
  params,
}: {
  params: Params<'orderId'>;
}) => {
  const data = { priority: true };

  // updating order priority
  if (params.orderId) {
    await updateOrder(params.orderId, data);
  }

  return null;
};
