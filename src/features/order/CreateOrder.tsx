import { Form, useActionData, useNavigation } from 'react-router-dom';

import { testCart } from '@/data/testCart';

import Button from '@/ui/Button';

import { IErrors } from './createOrderAction';

const CreateOrder: React.FC = () => {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = testCart;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const formErrors = useActionData() as IErrors;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-4 text-center text-xl font-semibold sm:mb-8">
        Ready to order? <span className="text-nowrap">Let's go!</span>
      </h2>

      <Form method="POST">
        <div className="mb-4 flex flex-col gap-1 sm:mb-6 sm:flex-row sm:items-center sm:gap-2">
          <label className="sm:basis-40">First Name</label>
          <input className="input grow" type="text" name="customer" required />
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
          className={`mb-4 sm:mb-6 ${formErrors?.phone ? 'mt-14 sm:mt-16' : ''} flex flex-col gap-1 sm:mt-0 sm:flex-row sm:items-center sm:gap-2`}
        >
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting order' : 'Order now'}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateOrder;
