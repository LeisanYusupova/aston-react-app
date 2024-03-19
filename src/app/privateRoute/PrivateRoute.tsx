import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'src/shared/hooks/useAuth.ts';

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/signin');
    }
  }, [isAuth, navigate]);

  return isAuth && <>{children}</>;
};
