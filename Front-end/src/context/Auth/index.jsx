import { createContext, useEffect, useState } from "react";
import { goToHomePage } from "../../routes/coordinator";
import { GetFeed, GetInfoUser, PostLogin, PostSocialLogin } from "../../services/Api";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => window.localStorage.getItem("Token"))
  const [headerBarUserInfo, setHeaderBarUserInfo] = useState(null)
  const [feed, setFeed] = useState(null)
  const [refreshPage, setRefreshPage] = useState(true)

  const signin = async (email, password, navigate, keepLogin) => {
    const response = await PostLogin(email, password)
    setUser(response.token)
    if(keepLogin){
      window.localStorage.setItem("Token", response.token)
    }
    goToHomePage(navigate)
  }
  const signinSocial = async (name, email, password, navigate, keepLogin) => {
    const response = await PostSocialLogin(name, email, password)
    if (!response?.token) {
      return
    }
    setUser(response.token)
    if (keepLogin) {
      window.localStorage.setItem("Token", response.token)
    }
    goToHomePage(navigate)
  }
  const signout = () => {
    setUser(null)
    window.localStorage.removeItem('Token')
    UpdatePage()
  }
  const  UpdatePage = () => {
    setRefreshPage(!refreshPage)
  }
  useEffect(() => {
    const token = user || window.localStorage.getItem('Token')

    const InfoUser = async () => {
      if (token) {
        const getInfoUser = await GetInfoUser(token)
        setHeaderBarUserInfo(getInfoUser?.user || null)
      } else {
        setHeaderBarUserInfo(null)
      }
      const getFeed = await GetFeed()
      setFeed(getFeed)
    }
    InfoUser()
  }, [user, refreshPage])

  return (
    <AuthContext.Provider value={{ user, signin, signinSocial, signout, headerBarUserInfo, feed, UpdatePage, setUser }}>{children}</AuthContext.Provider>
  )
} 
