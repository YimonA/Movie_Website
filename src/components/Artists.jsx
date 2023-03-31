import React, { useEffect, useState } from 'react'
import { useContextCustom } from '../context/stateContext'
import ArtistCard from './ArtistCard';

const Artists = () => {
   
  const {people}=useContextCustom();
  
  return (
    <div>
      {/*
      <div className=' flex justify-center p-6 '>
      <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      
            type="text"
            placeholder="search artist"
            className="input input-ghost border-[#ff0] w-[90%]"
          />
      </div>
  */}
      <div className=' flex flex-wrap gap-10 justify-center items-center bg-black pb-24'>
        {people.map(artist=>{
            return(
                <ArtistCard key={artist.id} {...artist}></ArtistCard>
            )
        })}
        </div>
    </div>
  )
}

export default Artists
