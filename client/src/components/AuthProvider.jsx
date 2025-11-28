import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import auth from '../firebase';
import { AuthContext } from '../context/AuthContext';

export function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState('');
  const [loading, setLoading] = useState(true);

  const value = {
    authUser,
    loading,
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      setAuthUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribed();
    };
  }, []);

  if (loading) {
    return <p>loading...</p>;
  } else {
    return (
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    );
  }
}
