import { useRouteError } from 'react-router-dom';

import LinkButton from './LinkButton';

const Error: React.FC = () => {
  const error: unknown = useRouteError();

  const errorMessage = (error as { data: string }).data.startsWith(
    'Error: No route matches',
  )
    ? 'That page not found'
    : '';

  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-2">
      <h1 className="text-lg">Something went wrong 😢</h1>
      <p className="rounded-md bg-red-100 p-2 text-center text-xs text-red-700">
        <span className="text-lg leading-4">⚠️ </span>
        {errorMessage || (error as Error).message}
      </p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
};

export default Error;
