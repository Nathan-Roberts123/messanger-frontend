import React from 'react'
import image from '../images/prf2.jpg'

const MsgSent = (props) => {
  return (
    <div className='col-start-6 col-end-13'>
        <div className='flex flex-row-reverse itmes-center'>
            <div className='flex items-center w-11 h-11 rounded-full flex-shrink-0 justify-center'>
                <img className='rounded-full w-11 h-11' src={image} alt="profile" />
            </div>
            <div className='mr-3'>
                <div className='bg-regal-white rounded-[0.6rem] py-[1rem] px-[1.25rem] text-regal-text-gray'>
                    <span>{props.msg}</span>
                </div>
                <div>3:30</div>
            </div>
        </div>
    </div>
  )
}

export default MsgSent