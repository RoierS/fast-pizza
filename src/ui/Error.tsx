import { useRouteError } from 'react-router-dom';

import LinkButton from './LinkButton';

const Error: React.FC = () => {
  const error: unknown = useRouteError();
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{(error as { data: string }).data || (error as Error).message}</p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
};

export default Error;
