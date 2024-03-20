import {
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

export const loginUserInFirebase = ({
  data,
  successHandler,
  errorHandler,
}: {
  data: { email: string; password: string };
  successHandler: (data: UserCredential) => void;
  errorHandler: () => void;
}) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, data.email, data.password)
    .then(successHandler)
    .catch(errorHandler);
};

export const regUserInFirebase = ({
  data,
  successHandler,
  errorHandler,
}: {
  data: { email: string; password: string };
  successHandler: (data: UserCredential) => void;
  errorHandler: (data: string) => void;
}) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then(successHandler)
    .catch(errorHandler);
};
