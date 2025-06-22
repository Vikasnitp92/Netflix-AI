import { useRef, useState } from "react";
import {  updateProfile } from "firebase/auth";
import { PHOTO_URL } from "../utils/constant";
import {login} from "../utils/UserSlice";
import Header from "./Header";
  import { checkValidData } from "../utils/Validate";
  import {auth  } from "../utils/Firebase"
  import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { useDispatch } from "react-redux";

const Login = () => { 
  const [isSignIn ,setIsSignIn] = useState(true);
  const [errorMessage,setErrorMessage]= useState(null);


  const dispatcher = useDispatch();

  // Form inputs
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef (null);

  // Handle sign in/up form submission
  const handleButtonClick = () => {
  
    // TODO: Add authentication logic here

    const message  = checkValidData(name?.current?.value,email.current.value,password.current.value,isSignIn);

    setErrorMessage(message);
    //requestFormReset();

    if(message) return;

    if(!isSignIn) {
      // Create a new user
      console.log(email.current.value +"-" +password.current.value);
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
       // Signed up 
       const user = userCredential.user;
       //update the user profile's

       updateProfile(auth.currentUser, {
        displayName: name.current.value,
        photoURL :PHOTO_URL
      }).then(() => {
        // Profile updated!
        const {uid,email,displayName,photoURL}= auth.currentUser;
                 dispatcher(login({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                 
        // ...
      }).catch((error) => {
        setErrorMessage("Error Occured");
        // ...
      });

        // ...
        console.log("User signed up successfully!" + user);
        
        //...
         })
     .catch((error) => {
       // const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
       // ..
       });
    }else{
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("User signed in successfully!" + user);
   
    // ...
  })
  .catch((error) => {
    //const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage);
  });
 }
    //console.log(message);
    // Reset form inputs

  }

  // Reset form inputs
  // const requestFormReset = () => {
  //   email.current.value = "";
  //   password.current.value = "";
  //   if (!isSignIn) {
  //   name.current.value = "";
  //   }
  // }
  
  // Switch between sign in and sign up page
  const handleForm = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage(null);
  }
  return (
    <div>
      <Header/>
       <div className="absolute">
       <img  className="h-auto w-screen" src="https://occ-0-2218-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABe5CHwwZ8S4j91phfWWM1qmM7gA4TS4tIEBRcNY-DZPZiPgRZR2jj9yH5WglzkoAvTcT8BT5lQiDfceRKYwaCPgaZb_DdkLmFvKb.webp?r=bf7" alt="body content" />
       </div>
       {/* Sign in/Sign up page */}
           
             <form onSubmit={(e)=> e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg text-white opacity-85">
                 <hi className=" mb-8 text-xl font-bold">{isSignIn ? "Sign In" :"Sign UP" } </hi>
                 {
                   !isSignIn &&  <input ref={name} type="text" className="p-4 my-4 w-full  bg-gray-700" placeholder=" Name"/>
                   
                 }
               <input ref={email} type="text" className="p-4 my-4 w-full bg-gray-700" placeholder="Email Address"/>
                <input ref={password} type="password" className=" p-4 my-4 w-full bg-gray-700" placeholder="Password"/>
                <p className="py-1 text-wrap font-bold text-red-600 italic">{errorMessage}</p>
                <button className="p-4 my-4 w-full bg-red-700 rounded-lg" onClick={handleButtonClick}>{isSignIn ? "Sign In" :"Sign UP" }</button>
                  <p className="p-4 my-4 w-full" onClick={handleForm} > New to Netflix ? {isSignIn ? <span className="cursor-pointer"> "Sign Up"</span> :<span className="cursor-pointer">"Already Sign  up .Please  log in now" </span>}  </p>
              </form>
       
    </div>
  );
};

export default Login;