import { SyntheticEvent, useState } from 'react';

import { useNavigate } from 'react-router-dom';

const SearchOrder: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // handle order search and navigate to order summary
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (!query) return;

    navigate(`/order/${query}`);
    setQuery('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-40 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchOrder;
