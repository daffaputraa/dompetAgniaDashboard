import { useEffect } from "react";
import Login from "../components/application-ui/forms/sign-in-forms/simple"
import { Navigate, Outlet } from "react-router-dom";


const LoginPage = () => {
  const isLogged  = localStorage.getItem("isLogged")
  
  useEffect(()=> {
    if(isLogged === true) {
      Navigate("/dashboard")
    }
  }, [isLogged])
  
  return (  
    <>
     <Login/>
    </>
  )
}

export default LoginPage