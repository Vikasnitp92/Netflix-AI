import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn ,setIsSignIn] = useState(true);
  const handleForm = () => {
    setIsSignIn(!isSignIn);
  }
  return (
    <div>
      <Header/>
       <div className="absolute">
       <img  className="h-auto w-screen" src="https://occ-0-2218-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABe5CHwwZ8S4j91phfWWM1qmM7gA4TS4tIEBRcNY-DZPZiPgRZR2jj9yH5WglzkoAvTcT8BT5lQiDfceRKYwaCPgaZb_DdkLmFvKb.webp?r=bf7" alt="body content" />
       </div>
       {/* <div className="flex justify-center mt-6"> */}
           
             <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg text-white opacity-85">
                 <hi className="p2 m4 text-xl font-bold">{isSignIn ? "Sign In" :"Sign UP" } </hi>
                 {
                   !isSignIn &&  <input type="text" className="p-4 my-4 w-full bg-gray-700" placeholder=" Name"/>
                   
                 }
               <input type="text" className="p-4 my-4 w-full bg-gray-700" placeholder="Email Address"/>
                <input type="password" className=" p-4 my-4 w-full bg-gray-700" placeholder="Password"/>
                <button className="p-4 my-4 w-full bg-red-700 rounded-lg">{isSignIn ? "Sign In" :"Sign UP" }</button>
                  <p className="p-4 my-4 w-full" onClick={handleForm} > New to Netflix ? {isSignIn ? <span className="cursor-pointer"> "Sign Up"</span> :"Already Sign  up .Please log in now"}  </p>
              </form>
       
    </div>
  );
};

export default Login;