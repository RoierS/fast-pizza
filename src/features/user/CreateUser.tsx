import { SyntheticEvent, useState } from 'react';

import { useDispatch } from 'react-redux';

import Button from '@/ui/Button';

import { updateName } from './UserSlice';

const CreateUser: React.FC = () => {
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  const handleClick = () => {
    if (!username) return;
    dispatch(updateName(username));
    setUsername('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className="input mb-7 w-72"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <Button
            type="primary"
            disabled={false}
            to="/menu"
            onClick={handleClick}
          >
            Start ordering
          </Button>
        </div>
      )}
    </form>
  );
};

export default CreateUser;
