import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

/**
 * Minimal auth stub. Swap the login/register bodies for real calls to
 * the Spring Boot /api/auth endpoints once the backend is wired up
 * (see src/services/api.js).
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = window.localStorage.getItem('tempvision-user')
    return saved ? JSON.parse(saved) : null
  })

  const login = async ({ email }) => {
    // TODO: replace with POST /api/auth/login
    const fakeUser = { email, name: email.split('@')[0] }
    window.localStorage.setItem('tempvision-user', JSON.stringify(fakeUser))
    setUser(fakeUser)
    return fakeUser
  }

  const register = async ({ email, name }) => {
    // TODO: replace with POST /api/auth/register
    const fakeUser = { email, name }
    window.localStorage.setItem('tempvision-user', JSON.stringify(fakeUser))
    setUser(fakeUser)
    return fakeUser
  }

  const logout = () => {
    window.localStorage.removeItem('tempvision-user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
