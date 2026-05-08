import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('ornix_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const login = ({ email, password }) => {
    // Simulate auth — in production connect to Supabase
    if (!email || !password) throw new Error('Email and password required');
    const userData = { email, name: email.split('@')[0], avatar: null };
    setUser(userData);
    localStorage.setItem('ornix_user', JSON.stringify(userData));
    return userData;
  };

  const signup = ({ email, password, name }) => {
    if (!email || !password || !name) throw new Error('All fields required');
    const userData = { email, name, avatar: null };
    setUser(userData);
    localStorage.setItem('ornix_user', JSON.stringify(userData));
    return userData;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ornix_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoggedIn: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
