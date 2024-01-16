import { useSelector } from 'react-redux';

import { RootState } from '@/store/store';

const Username: React.FC = () => {
  const { username } = useSelector((state: RootState) => state.user);

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
};

export default Username;
