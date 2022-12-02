import React from 'react'
import '../../index.css'
const Modal=({winner,openModal,setOpenModal})=>{
  return(
    <div className='bg-black'>
      {openModal && (
        <div>
          <h1>Congratulations you won the lottery</h1>
          <p className='solution'>{winner}</p>
          <button className='btn' onClick={()=>setOpenModal(false)}/>
        </div>
      )}
    </div>
  )

}

export default Modal