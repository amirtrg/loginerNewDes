import React,{useState,useEffect} from "react";
import "./style.css"; 
import Header from "./components/Header/Header";
import Login from "./components/Login/Login"
import Home from "./components/Home/Home";

const App=()=> {
const [IsLoggedIn,setIsLoggedIn]=useState(localStorage.getItem("LoggedIn"));


const loginHandler=()=>{
  localStorage.setItem("LoggedIn",true)
  setIsLoggedIn(true);
}
const logOutHandler=()=>{
  localStorage.removeItem("LoggedIn");
  setIsLoggedIn(false);
}
  return (
    <>
    <Header Login={IsLoggedIn}
    onLogOut={logOutHandler}
    />
    {(IsLoggedIn)?
    <Home/>:<Login onLogin={loginHandler}/>
}
    </>
  );
}
export default App;