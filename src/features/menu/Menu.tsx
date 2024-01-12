import { useLoaderData } from 'react-router-dom';

import { IPizza } from '@/interfaces/pizza';
import { getMenu } from '@/services/apiRestaurant';

import MenuItem from './MenuItem';

// eslint-disable-next-line react-refresh/only-export-components
export const menuLoader = async () => {
  const menu = await getMenu();
  return menu;
};

const Menu: React.FC = () => {
  const menu = useLoaderData() as IPizza[];

  // eslint-disable-next-line no-console
  console.log(menu);

  return (
    <ul>
      {menu.map((pizza: IPizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
};

export default Menu;
