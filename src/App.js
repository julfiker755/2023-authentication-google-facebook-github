import React, { useState } from 'react';
import { useSignInWithGoogle,useSignInWithGithub,useSignInWithFacebook,useAuthState,useSignOut} from 'react-firebase-hooks/auth';
import { GoogleAuthProvider,signInWithPopup,GithubAuthProvider,FacebookAuthProvider,signOut } from "firebase/auth";
import auth from "./Firebase/Firebase";
function App() {
  const [user, setuser] = useState([])
  // react firebase hooks-----------
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [signOut] = useSignOut(auth);
  const [userall] = useAuthState(auth);
  // handlegoogle
  const Handlegoogle=()=>{
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth,provider)
    .then(result=>{
      const user=result.user
      setuser(user)
    }).catch(error=>{
      console.log(error)
    })
  }
// handle github
const Handlegithub=()=>{
  const provider = new GithubAuthProvider();
  signInWithPopup(auth,provider)
  .then(result=>{
    const user=result.user
    setuser(user)
  }).catch(error=>{
    console.log(error)
  })
}
// handlefacebook
const Handlefacebook=()=>{
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth,provider)
  .then(result=>{
    const user=result.user
    setuser(user)
  }).catch(error=>{
    console.log(error)
  })
}
// Handle sign out
const SignOut=()=>{
  signOut(auth).then(() => {
    setuser([])
  }).catch((error) => {
    console.log(error)
  });
}
// deastaring obj
  const {displayName,email}=user || {}
  return (
    <div className="App flex justify-center flex-col items-center h-screen">
       {/* ------------Simple React Firebase Authentication---------------- */}
        <h1 className="text-[35px] text-bold mb-5">Simple React Firebase Authentication</h1>
      {displayName ?  
      <button onClick={()=>SignOut()} className="bg-[#864f13] text-white py-2 px-4">Sign Out</button> : <div className='flex gap-3'>
       <button onClick={()=>Handlegoogle()} className="bg-[green] text-white py-2 px-4">Google sign In</button>
        <button onClick={()=>Handlegithub()} className="bg-[#190b3b] text-white py-2 px-4">Github sign In</button>
        <button onClick={()=>Handlefacebook()} className="bg-[#124e6e] text-white py-2 px-4">Facebook sign In</button>
       </div>}
        {displayName && <>
         <h1>Display Name:{displayName}</h1>
         <h1>Email:{email}</h1>
        </>}
        <div className="divider">OR</div>
        {/* ------------Easy Authentication:React Firebase Hooks---------------- */}
       <h1 className="text-[35px] text-bold mb-5">Easy Authentication:React Firebase Hooks</h1>   
       {userall && userall.displayName ?  
      <button  
       onClick={async()=>{await signOut()}}
        className="bg-[#864f13] text-white py-2 px-4">Sign Out</button> : <div className='flex gap-3'>
       <button onClick={()=>signInWithGoogle()} className="bg-[green] text-white py-2 px-4">Google sign In</button>
        <button onClick={()=>signInWithGithub()} className="bg-[#190b3b] text-white py-2 px-4">Github sign In</button>
        <button onClick={()=>signInWithFacebook()} className="bg-[#124e6e] text-white py-2 px-4">Facebook sign In</button>
       </div>}
        {userall &&  <>
         <h1>Display Name::{userall.displayName}</h1>
         <h1>Email::{userall.email}</h1>
        </>}
    </div>
  );
}

export default App;
