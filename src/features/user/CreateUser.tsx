import { SyntheticEvent, useState } from 'react';

import Button from '@/ui/Button';

const CreateUser: React.FC = () => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
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
          <Button type="primary" disabled={false} to="/menu">
            Start ordering
          </Button>
        </div>
      )}
    </form>
  );
};

export default CreateUser;
