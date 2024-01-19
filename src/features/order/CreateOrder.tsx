import { SyntheticEvent, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Form, useActionData, useNavigation } from 'react-router-dom';

import { AppDispatch, RootState } from '@/store/store';
import Button from '@/ui/Button';

import { formatCurrency } from '@/utils/helpers';

import { getCart, getTotalCartPrice } from '../cart/CartSlice';
import EmptyCart from '../cart/EmptyCart';
import { fetchAddress, getUsername } from '../user/UserSlice';

import { IErrors } from './createOrderAction';

const CreateOrder: React.FC = () => {
  const [isWithPriority, setisWithPriority] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const username = useSelector(getUsername);
  const cart = useSelector(getCart);
  const dispatch = useDispatch<AppDispatch>();

  const {
    status: addressStatus,
    address,
    position,
    error: errorAdress,
  } = useSelector((state: RootState) => state.user);

  const isLoadingAddress = addressStatus === 'loading';

  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = isWithPriority ? Math.round(totalCartPrice * 0.2) : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  const formErrors = useActionData() as IErrors;

  if (!cart.length) return <EmptyCart />;

  const handleGetPosition = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(fetchAddress());
  };

  return (
    <div className="px-4 py-6">
      <h2 className="mb-4 text-center text-xl font-semibold sm:mb-8">
        Ready to order? <span className="text-nowrap">Let's go!</span>
      </h2>

      <Form method="POST">
        <div className="mb-4 flex flex-col gap-1 sm:mb-6 sm:flex-row sm:items-center sm:gap-2">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            required
            defaultValue={username}
          />
        </div>

        <div
          className={`mb-4 flex flex-col gap-1 sm:mb-6 sm:flex-row sm:items-center
          sm:gap-2 ${formErrors?.phone ? 'mb-11 sm:mb-14' : ''}`}
        >
          <label
            className={`sm:basis-40 ${formErrors?.phone ? 'text-red-700' : ''}`}
          >
            Phone number
          </label>
          <div className="relative grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formErrors?.phone && (
              <p className="absolute left-1/2 top-1/2 mt-8 w-full -translate-x-1/2 transform rounded-md bg-red-100 p-2 text-center text-xs text-red-700">
                <span className="text-lg leading-4">⚠️</span>{' '}
                {formErrors?.phone}
              </p>
            )}
          </div>
        </div>

        <div
          className={`relative mb-4 sm:mb-6 ${formErrors?.phone ? 'mt-14 sm:mt-16' : ''} flex flex-col gap-1 sm:mt-0 sm:flex-row sm:items-center sm:gap-2 `}
        >
          <label className="sm:basis-40">Address</label>
          <div className="relative grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              disabled={isLoadingAddress}
              defaultValue={address}
              required
            />
            {addressStatus === 'error' && (
              <p className="absolute left-1/2 top-1/2 mt-8 w-full -translate-x-1/2 transform rounded-md bg-red-100 p-2 text-center text-xs text-red-700">
                <span className="text-lg leading-4">⚠️ </span>
                {errorAdress}
              </p>
            )}
            {!position.latitude && !position.longitude && (
              <span className="z-888 absolute right-[3px] top-1/2 -translate-y-1/2 transform sm:top-1/2 sm:leading-4">
                <Button
                  type="small"
                  onClick={handleGetPosition}
                  disabled={isLoadingAddress}
                >
                  {isLoadingAddress ? 'Searching...' : 'Get position'}
                </Button>
              </span>
            )}
          </div>
        </div>

        <div
          className={`${addressStatus === 'error' ? 'mb-10 mt-16' : ''} mb-12 flex items-center gap-5`}
        >
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={String(isWithPriority)}
            onChange={(e) => setisWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          {/* hidden inputs to pass cart object and position */}
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.latitude && position.longitude
                ? `${position.latitude}, ${position.longitude}`
                : ''
            }
          />

          <Button type="primary" disabled={isSubmitting || isLoadingAddress}>
            {isSubmitting
              ? 'Submitting order'
              : `Order now ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateOrder;
