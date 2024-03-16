import { Form } from 'src/widgets/form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'src/features/redux/userProcess/userProcessSlice.ts';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setCurrentUser } from 'src/shared/utils/user.ts';

export const Login = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
          }),
        );
        setCurrentUser(user.email!);
        navigate('/');
      })
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <Form
      title="Авторизация"
      handleClick={handleLogin}
      errorMessage={errorMessage}
    />
  );
};
