
export const checkValidData = (name ,email,password ,signInFlag) =>{
 if (!signInFlag){
    if(name === ""){
         return "Name is required";
    }
 }
  if(email === "" || password === ""){
    return "Email and password are required";
  }
  // Validate email format using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email)){
    return "Please enter a valid email address";
  }
  // Validate password complexity using regex
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if(!passwordRegex.test(password)){
    return "Password should be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character";
  }
  return "";  // if all data is valid, return an empty string
   
} ;