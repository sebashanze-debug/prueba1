import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';

export const PostLogin =  async (email, password) => {
    try {
        const body = {
          email,
          password
      }
        const response = await axios.post(`${BASE_URL}users/login`, body)
        return response.data
      } catch(error){
        alert(error.response.data.message)
      } 
};
export const PostSignup =  async (name, email, password) => {
  try {
      const body = {
        name,
        email,
        password,
    }
      const response = await axios.post(`${BASE_URL}users/register`, body)
      alert(response.data.message)
      
      return response.data
    } catch(error){
      alert(error.response.data.message)
    } 
};
export const PostSocialLogin = async (name, email, password) => {
  try {
    const body = {
      name,
      email,
      password,
    }
    const response = await axios.post(`${BASE_URL}users/register`, body)
    return response.data
  } catch (error) {
    const status = error?.response?.status
    if (status === 409) {
      try {
        const response = await axios.post(`${BASE_URL}users/login`, { email, password })
        return response.data
      } catch (loginError) {
        alert(loginError?.response?.data?.message || "Algo deu errado")
      }
      return
    }
    alert(error?.response?.data?.message || "Algo deu errado")
  }
};
export const PostUserFeed =  async (formData, config) => {
  console.log(formData)
  try {
      const response = await axios.post(`${BASE_URL}posts`, formData, config)
      alert(response.data.message)
      return response.data
    } catch(error){
      alert("Algo deu errado")
    } 
};
export const GetInfoUser =  async (token) => {
  try {
      const response = await axios.get(`${BASE_URL}users/perfil`, { headers: { authorization: token }})      
      return response.data
    } catch(error){
      console.log(error.response)
      return null
    } 
};
export const GetPerfilUser = async (idUser) => {
  try {
      const response = await axios.get(`${BASE_URL}users/perfil`, { headers: { authorization: idUser}})      
      return response.data

    } catch(error){
      console.log(error.response)
    } 
};
export const GetFeed =  async (token) => {
  try {
      const response = await axios.get(`${BASE_URL}posts`)      
      return response.data
    } catch(error){
      console.log(error.response)
    } 
};
