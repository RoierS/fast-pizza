import { Params } from 'react-router-dom';

import { getOrder } from '@/services/apiRestaurant';

export const orderLoader = async ({
  params,
}: {
  params: Params<'orderId'>;
}) => {
  if (params.orderId) {
    const order = await getOrder(params.orderId);
    return order;
  }
};
