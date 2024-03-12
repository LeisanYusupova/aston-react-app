import { useSelector } from 'react-redux';
import { RootState } from '../../app/store/store.tsx';

export function useAuth() {
  const { email, id } = useSelector((state: RootState) => state.userProcess);
  return {
    isAuth: !!email,
    email,
    id,
  };
}
