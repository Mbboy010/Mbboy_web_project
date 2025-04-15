import React, { useState, FormEvent } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import {auth,db,storage} from "../../server/firebaseConfig" // Adjust path as needed
import { setLoad } from "../redux/slicer/Load"
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../redux/store';



const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const isColor = useSelector((state: RootState) => state.color.value);

  const handleReset = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('✅ Password reset email sent! Please check your inbox and spam folder.');
      window.scrollTo(0, 0);
    } catch (err: any) {
      setError(err.message || '❌ Failed to send password reset email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex  min-h-screen px-4">
    <h1 className="p-1"></h1>
      <div  className="w-full mt-20 max-w-md p-8 rounded-2xl">
        <h2 className="text-2xl font-semibold text-center mb-6">Reset Password</h2>

        {/* Message Feedback */}
        {message && <div className="mb-4 text-sm font-medium text-green-600 bg-green-100 p-3 rounded-md">{message}</div>}
        {error && <div className="mb-4 text-sm font-medium text-red-600 bg-red-100 p-3 rounded-md">{error}</div>}

        {/* Important Info */}
        <div className="mb-6 text-sm  p-3 rounded-md ">
          <p className="font-semibold  mb-1">Important:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Make sure the email is linked to your account.</li>
            <li>Check your spam or junk folder if you don't see the email.</li>
            <li>The reset link will expire after a short time.</li>
            <li>If you have trouble, contact support for help.</li>
          </ul>
        </div>

        {/* Reset Form */}
        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-orange-500 focus:border-orange-500 border-orange-300"
              placeholder="you@example.com"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 text-white py-2 rounded-xl hover:bg-orange-700 transition duration-300 disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Reset Email'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
