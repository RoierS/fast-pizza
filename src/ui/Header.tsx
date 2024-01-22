import { Link } from 'react-router-dom';

import SearchOrder from '@/features/order/SearchOrder';
import Username from '@/features/user/Username';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between gap-1 border-b-8 border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link
        to="/"
        className="flex items-center justify-center gap-2 tracking-widest"
      >
        <img className="max-h-12" src="./logo.png" alt="logo" />
        <span>Fast Pizza Co.</span>
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
};

export default Header;
