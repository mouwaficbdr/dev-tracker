import { useState, useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from '@/firebase/firebase';
import { AuthContext } from "./contexts/AuthContext";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, []);

  return (
    <AuthContext.Provider value={{currentUser, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;



