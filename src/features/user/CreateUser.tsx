import { SyntheticEvent, useState } from 'react';

import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import Button from '@/ui/Button';

import { updateName } from './UserSlice';

const CreateUser: React.FC = () => {
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // create user and navigates to "menu"
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (!username) return;

    dispatch(updateName(username));
    navigate('/menu');
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
          <Button type="primary" disabled={false}>
            Start ordering
          </Button>
        </div>
      )}
    </form>
  );
};

export default CreateUser;
