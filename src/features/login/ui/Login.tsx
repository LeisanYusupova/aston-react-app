import { Form } from 'src/widgets/form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setCurrentUser } from 'src/shared/utils/user.ts';
import { loginUserInFirebase } from 'src/shared/utils/firebase.ts';

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();
  const handleLogin = (email: string, password: string) => {
    loginUserInFirebase({
      data: { email: email, password: password },
      successHandler: (userCredential) => {
        const user = userCredential.user!;
        const userData = { email: user.email! };
        setCurrentUser(userData.email);
        navigate('/');
      },
      errorHandler: (error) => {
        setErrorMessage(error.message);
      },
    });
  };
  const handleInputChange = () => {
    setErrorMessage('');
  };

  return (
    <Form
      title="Авторизация"
      handleClick={handleLogin}
      errorMessage={errorMessage}
      handleInputChange={handleInputChange}
    />
  );
};
