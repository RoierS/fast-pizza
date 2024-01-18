import { Params } from 'react-router-dom';

import { updateOrder } from '@/services/apiRestaurant';

export const updateOrderAction = async ({
  params,
}: {
  params: Params<'orderId'>;
}) => {
  const data = { priority: true };
  if (params.orderId) {
    await updateOrder(params.orderId, data);
  }

  return null;
};
