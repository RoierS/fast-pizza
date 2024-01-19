import { ReactNode, SyntheticEvent } from 'react';

import { Link } from 'react-router-dom';

interface IButtonProps {
  children: ReactNode;
  disabled?: boolean;
  to?: string;
  type: string;
  onClick?: (e: SyntheticEvent) => void;
}

interface IStyles {
  [key: string]: string;
  primary: string;
  small: string;
  secondary: string;
  round: string;
}

const Button: React.FC<IButtonProps> = ({
  children,
  disabled,
  to,
  type,
  onClick,
}) => {
  // base button style
  const base =
    'inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed text-xs sm:text-sm';

  // Button styles "type" prop
  const styles: IStyles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 sm:leading-4 md:leading-5',
    soldOut: base + ' px-4 py-2 md:px-5 md:py-2.5 opacity-70 grayscale',
    secondary:
      'text-sm border-2 border-stone-300 inline-block rounded-full font-semibold uppercase tracking-wide text-stone-500 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 hover:text-stone-800 focus:outline-none focus:ring focus:text-stone-800 focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 text-xs sm:text-sm px-4 py-2.5 md:px-6 md:py-3.5',
    round:
      base + ' text-sm md:w-10 md:h-10 sm:w-8 sm:h-8 w-8 h-8 shrink-0 grow-0',
  };

  // if component contains "to" prop return "Link"
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  // else return button
  return (
    <button className={styles[type]} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
