import { Form } from 'src/widgets/form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'src/features/redux/userProcess/userProcessSlice.ts';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setCurrentUser } from 'src/shared/utils/user.ts';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
          }),
        );
        setCurrentUser(user.email!);
        navigate('/');
      })
      .catch(() => alert('Invalid user'));
  };

  return <Form title="Авторизация" handleClick={handleLogin} />;
};
