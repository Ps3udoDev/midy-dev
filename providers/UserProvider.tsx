'use client';

import { MyUserContextProviders } from "../hooks/useUser";

interface UserProvidersProps {
  children: React.ReactNode;
};

const UserProvider: React.FC<UserProvidersProps> = ({children}) => {
  return (
    <MyUserContextProviders>
      {children}
    </MyUserContextProviders>
  )
}

export default UserProvider;