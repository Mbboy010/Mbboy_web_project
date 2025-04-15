import { useState, useEffect, useRef, FC } from "react";
import type { RootState } from '../../components/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from "react-router-dom"


const VerifyT: FC = () => {
  
  const isColor = useSelector((state: RootState) => state.color.value);
  
  
  return (
    <div className="flex flex-col justify-center w-full items-center min-h-screen">
      <div 
      style={{backgroundColor: isColor ? "black" : "white"}}
      className="max-w-md mx-auto mt-10 p-4 rounded-lg ">
      <h2 className="font-semibold text-lg">Action Restricted</h2>
      <p className="text-sm mb-2">
        You cannot send messages or motivate because your account is not verified.
        Please{' '}
        <Link to="/verification" className="font-medium underline hover:text-yellow-900">
          verify your account
        </Link>{' '}
        to unlock full features.
      </p>
      <ul className="list-disc list-inside text-sm ">
        <li>Secure token-based validation</li>
        <li>Prevents access to restricted routes</li>
        <li>Real-time auth state listener</li>
        <li>Improved trust and app integrity</li>
      </ul>
    </div>
    </div>
  );
};

export default VerifyT;
