import React from 'react'
import image1 from '../images/6.jpg'

const SelectFriend = (props) => {

    function handleAddRemoveInvite(e) {
        let state = e.target.checked
        if (state) {
            props.addInvite(props.username)

        } else if (!state) {
            props.removeInvite(props.username)
        }
    }

  return (
    <div  className='bg-white mt-4  rounded-[0.6rem] px-[1.125rem] py-[0.875rem] w-full'>
        <div className='flex flex-row items-center w-full'>
            <div className='w-11 h-11 flex flex-shrink-0 items-center justify-center rounded-full'>
                <img src={image1} alt="profile" className='w-11 h-11 rounded-full'/>
            </div>
            <div className='flex flex-col ml-3 w-full'>
                <div className='flex flwx-row w-full '>
                    <div>{props.username}</div>
                </div>

                <div className='flex flex-row items-center w-full'>
                    <div className='mt-1 text-regal-text-gray max-h-[48px] overflow-hidden'>{props.first_name} {props.last_name}</div>
                </div>
            </div>

            <div className='flex h-full ml-auto items-center align-middle justify-center'>
                <input type="checkbox" onChange={ handleAddRemoveInvite }/>
            </div>
        </div>
    </div>
  )
}

export default SelectFriend