import Co from '../works/Co';
import HeroDis from '../home/hero/HeroDis';
import ProfileCard from './ProfileCard';
import React from 'react'

export default function AboutCon() {
  return (
    <div className="w-full relative ">
    <div className="p-1">
    </div>
    <div className="w-full md:flex md:gap-7 md:justify-center  md:flex-row mt-20">

        <div className="md:w-[50%] md:mt-6 lg:mt-10 xl:mt-15 ">
          <ProfileCard />
        </div>

      <div className="hidden h-[29rem] relative md:block">
          <HeroDis />
    </div>
    
    </div>
    <Co />

    </div>
  )
}