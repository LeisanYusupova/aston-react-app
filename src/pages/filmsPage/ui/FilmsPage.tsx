import { Films } from 'src/widgets/films';
import { useStoredState } from 'src/shared/hooks/useStoredState.ts';

export const FilmsPage = () => {
  useStoredState();
  return <Films />;
};
