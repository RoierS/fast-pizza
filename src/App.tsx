import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Cart from './features/cart/Cart';
import Menu from './features/menu/Menu';
import { menuLoader } from './features/menu/menuLoader';
import CreateOrder from './features/order/CreateOrder';
import { createOrderAction } from './features/order/createOrderAction';
import Order from './features/order/Order';
import { orderLoader } from './features/order/orderLoader';
import { updateOrderAction } from './features/order/updateOrderAction';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import Home from './ui/Home';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
