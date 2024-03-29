import { useSelector } from 'react-redux';

import { getUsername } from './UserSlice';

const Username: React.FC = () => {
  // getting username frome store
  const username = useSelector(getUsername);

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
};

export default Username;
