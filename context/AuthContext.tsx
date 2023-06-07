import { createContext, useContext, useEffect, useState } from "react";

const auth = true;

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export default function AuthContextProvider({ children }: any) {
    const [user, setUser] = useState<{} | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user: any) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
}

function onAuthStateChanged(auth: boolean, user: (user: any) => any) {
    return auth
        ? () => {
              user: {
                  loggedIn: true;
              }
          }
        : () => false;
}
