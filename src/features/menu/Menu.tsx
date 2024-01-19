import { useLoaderData } from 'react-router-dom';

import { IPizza } from '@/interfaces/pizza';

import MenuItem from './MenuItem';

const Menu: React.FC = () => {
  const menu = useLoaderData() as IPizza[];

  return (
    <ul className="divide-y-2 divide-stone-200 px-2">
      {menu.map((pizza: IPizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
};

export default Menu;
