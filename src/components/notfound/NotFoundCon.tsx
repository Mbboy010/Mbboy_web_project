import React from 'react'
import {Link} from "react-router-dom"
export default function NotFoundCon() {
  return (
   <div className="flex  flex-col items-center min-h-screen ">
      <h1 className="text-6xl mt-20 font-bold">404</h1>
      <p className=" mt-4">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-700 transition"
      >
        Go Home
      </Link>
    </div>
  )
}