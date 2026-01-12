import { useContext } from "react";
import { AuthContext } from "../../context/Auth";

export const TokenAuthenticator = () => {
  const { user } = useContext(AuthContext) 
  const token = window.localStorage.getItem("Token")
  return !(user || token)
}
