import { createContext, useContext, ReactNode } from "react";

type AuthProviderProps = {
  children: ReactNode
}

type AuthContextData = {}

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({children}: AuthProviderProps) => {
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  return context
}