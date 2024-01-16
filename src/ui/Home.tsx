import { useSelector } from 'react-redux';

import CreateUser from '@/features/user/CreateUser';
import { RootState } from '@/store/store';

import Button from './Button';

const Home: React.FC = () => {
  const { username } = useSelector((state: RootState) => state.user);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-center text-3xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {!username ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="./menu">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
};

export default Home;
