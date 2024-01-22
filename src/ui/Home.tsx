import { useSelector } from 'react-redux';

import CreateUser from '@/features/user/CreateUser';
import { RootState } from '@/store/store';

import Button from './Button';
import LogoBig from './LogoBig';

const Home: React.FC = () => {
  const { username } = useSelector((state: RootState) => state.user);

  return (
    <div className="my-10 flex flex-col items-center justify-center px-4 text-center sm:my-16">
      <h1 className="mb-8 text-center text-3xl font-semibold">
        The best pizza.
        <br />
        <span className="text-wrap text-yellow-500 md:text-nowrap">
          Straight out of the oven,
          <span className="sm:text-nowrap "> straight to you.</span>
        </span>
      </h1>

      {!username ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="./menu">
          Continue ordering, {username}
        </Button>
      )}

      <LogoBig />
    </div>
  );
};

export default Home;
