import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

const DEMO_USER = {
  id: 1,
  name: 'Demo Admin',
  email: 'demo@local',
  role: 'admin',
};

export function AuthProvider({ children }) {
  const [user] = useState(DEMO_USER);
  const loading = false;

  const login = async () => DEMO_USER;
  const signup = async () => DEMO_USER;
  const logout = () => {};

  return (
    <AuthContext.Provider
      value={{ user, loading, login, signup, logout, isAuthenticated: true }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
