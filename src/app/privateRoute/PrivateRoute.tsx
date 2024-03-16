import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthorizeCheckedSelector, getUserSelector } from '../../store';

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useAppSelector(getUserSelector)!;
  const authorizeChecked = useAppSelector(getAuthorizeCheckedSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email && authorizeChecked) {
      navigate('/signin');
    }
  }, [user, navigate, authorizeChecked]);

  return authorizeChecked && <>{children}</>;
};
