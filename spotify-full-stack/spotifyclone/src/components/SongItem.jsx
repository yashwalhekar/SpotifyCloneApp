import React, { useContext } from 'react'
import { playerContext } from '../context/PlayerContext'

const SongItem = ({name,image,desc,id}) => {

  const {playWithId} = useContext(playerContext)
  return (
    <div onClick={()=>playWithId(id)} className='min-w-[180px] rounded p-2 px-3  cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded' src={image}/>
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItem
