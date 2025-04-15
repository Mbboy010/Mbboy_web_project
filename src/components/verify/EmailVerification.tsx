import { useEffect, useState } from "react";
import {
  getAuth,
  sendEmailVerification,
  onAuthStateChanged,
  User
} from "firebase/auth";
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../redux/store';
import { setLoad } from "../redux/slicer/Load"
import { useNavigate } from "react-router";
import {auth,db,storage} from "../../server/firebaseConfig"


const EmailVerification: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const isColor = useSelector((state: RootState) => state.color.value);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  useEffect(() => {
    
    const user = auth.currentUser;
    
    function mu() {
      if(!user) return navigate("/login");
        setUser(user);
        
      if(user.emailVerified){
           navigate("/")
        }
    }
     mu()
  });

  const handleSendVerification = async () => {
    dispatch(setLoad(true))
    if (user && !user.emailVerified) {
      try {
        
        await sendEmailVerification(user);
        setEmailSent(true);
        dispatch(setLoad(false))
      } catch (error) {
        console.error("Error sending verification email:", error);
        dispatch(setLoad(false))
      }
    }
  };

  if (!user || user.emailVerified) {
    return null; // Don't show the component if the user is verified or not logged in
  }

  return (
    <div>
  <h1 className="p-1"></h1>
    <div 
    
    className="max-w-md mt-20 mx-auto mt-10 p-6 rounded-2xl md:text-center">
      <h2 className="text-xl font-semibold  mb-2">
        Verify Your Email Address
      </h2>
      <p className=" mb-2">
        A verification email is required to complete your registration.
      </p>
      <p className=" text-sm mb-2">
        Verifying your email helps us confirm your identity and keep your account secure. It also enables access to all features of the application.
      </p>
      <p className=" text-sm mb-4">
        Without email verification:
        <ul className="list-disc list-inside text-left mt-2">
          <li>You may not be able to reset your password if you forget it.</li>
          <li>Your account could be limited or suspended for suspicious activity.</li>
          <li>You might miss out on important updates, notifications, and feature access.</li>
        </ul>
      </p>
      {emailSent ? (
        <p className="text-green-600 font-medium">
          Verification email sent! Please check your inbox.
        </p>
      ) : (
        <button
          
          onClick={handleSendVerification}
          
          className="bg-orange-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Send Verification Email
        </button>
      )}
    </div>
    </div>
  );
};

export default EmailVerification;
