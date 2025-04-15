import Web from '../../works/Web';
import Sec from './Sec';
import Mus from './Mus';
import Des from './Des';
import Dev from './Dev';
import React from 'react'

export default function Acontainer() {
  return (
    <div className="flex flex-col gap-5 mt-7 w-screen justify-center items-center">


       <Web
      value="tyyy"
      data={<h2 className="text-3xl md:text-4xl font-bold text-center  my-12">My Skills</h2>}
      />
    <div className="flex gap-5 flex-col md:flex-row">
    <Dev />
    <Des />
    </div>
    
    <div className="flex gap-5 flex-col md:flex-row">
    <Mus />
    <Sec />
    </div>

    </div>
  )
}