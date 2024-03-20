import { Form } from 'src/widgets/form';
import { useNavigate } from 'react-router-dom';
import { setCurrentUser } from 'src/shared/utils/user.ts';
import { useState } from 'react';
import { regUserInFirebase } from 'src/shared/utils/firebase.ts';

export const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const navigate = useNavigate();
  const handleRegister = (email: string, password: string) => {
    regUserInFirebase({
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
      title="Регистрация"
      handleClick={handleRegister}
      errorMessage={errorMessage}
      handleInputChange={handleInputChange}
    />
  );
};
