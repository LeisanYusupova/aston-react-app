import { Form } from 'src/widgets/form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'src/features/userProcess/userProcessSlice.ts';

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
          }),
        );
        navigate('/');
      })
      .catch();
  };
  return <Form title="Регистрация" handleClick={handleRegister} />;
};
