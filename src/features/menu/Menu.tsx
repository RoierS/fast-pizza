import { useLoaderData } from 'react-router-dom';

import { IPizza } from '@/interfaces/pizza';

import MenuItem from './MenuItem';

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
