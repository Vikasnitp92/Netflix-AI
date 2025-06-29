import { signOut } from "firebase/auth";
import  {auth}  from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {  onAuthStateChanged } from "firebase/auth";
import {getGptSearchStatus} from "../utils/GptSlice";
import {getCurrentLanguage} from "../utils/ConfigSlice"
 

import {login,logout} from "../utils/UserSlice";
import { LANG_SELECTOR } from "../utils/constant";
const Header = () =>{ 
  const dispatcher = useDispatch();
  const gptSearchToggle =useSelector((store)=> store.gpt.showGptSearch);

  const user = useSelector(store => store.user);
   const navigate = useNavigate();
  const handleSignOut = ()=>{
    signOut(auth).then(() => {

      
    }).catch((error) => {
      navigate("/Error");
    });
  };

  //handing login status of an user through redux store 
  useEffect(() => {
    const unsubscribe =   onAuthStateChanged(auth, (user) => {
      if (user) {
   
       
         const {uid,email,displayName,photoURL}= auth.currentUser;
         dispatcher(login({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      
       navigate("/browse")
      } else {
        // User is signed out
       dispatcher(logout());
       navigate("/");
      
      
      }
    });
    return  () => unsubscribe();
  
},[] );

const handleOnClickGptSerch =()=>{
    dispatcher(getGptSearchStatus());
}

const handleLanguageChange =(e)=>{
 dispatcher(getCurrentLanguage(e.target.value))
}

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between" >
            <img className="w-44"  src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix Logo" />

            <div className="flex p-2">
              <select className="p-2 m-2 bg-purple-600 text-white rounded-lg" onChange={handleLanguageChange}>
                {LANG_SELECTOR.map((lang)=><option value={lang.identifier}>{lang.name}</option>)} 
              </select>
              <button className="px-2 my-2 mx-4 bg-fuchsia-800 rounded-lg font-bold text-white " onClick={handleOnClickGptSerch}>GPT Search</button>

             {user && (<img className="w-12 h-12" alt="Login User" src={user?.photoURL}/>)}

              <button className="mr-auto p-1 font-bold text-white" onClick={handleSignOut}>Sign Out</button>
                
            </div>
          </div>
          )
          
};

export default Header;

//"https://occ-0-2218-2219.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"