import { Form } from 'src/widgets/form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'src/features/redux/userProcess/userProcessSlice.ts';
import { setCurrentUser } from 'src/shared/utils/user.ts';
import { useState } from 'react';

export const SignUp = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();
  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
      title="Регистрация"
      handleClick={handleRegister}
      errorMessage={errorMessage}
    />
  );
};
