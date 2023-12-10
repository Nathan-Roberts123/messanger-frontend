import React from 'react'
import image from '../images/prf2.jpg'

const MsgReceived = (props) => {
  return (

    <div className='col-start-1 col-end-8'>
        <div className='flex flex-row itmes-center'>
            <div className='flex items-center w-11 h-11 rounded-full flex-shrink-0 justify-center'>
                <img className='rounded-full w-11 h-11' src={image} alt="profile" />
            </div>
            <div className='ml-3'>
                <div className='bg-regal-blue rounded-[0.6rem] py-[1rem] px-[1.25rem] text-white'>
                    <span>{props.msg}</span>
                </div>
                <div>3:30</div>
            </div>
        </div>
    </div>
  )
}

export default MsgReceived