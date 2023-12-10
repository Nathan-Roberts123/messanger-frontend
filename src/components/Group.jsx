import React from 'react'
import image1 from '../images/6.jpg'

const Group = (props) => {
    const token = JSON.parse(localStorage.getItem('token'))

    function changeChatUser(chat) {

        fetch('http://127.0.0.1:8000/chat/set-current-chat/', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Token ${token}`
            },
            body: JSON.stringify({
                "type": "Private Group",
                "group_name": chat
            })
        })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            return data
        })
        .catch(err => {
            console.log(err.message)
        })
    }

  return (
    <button  onClick={()=>changeChatUser(props.group_name)} className='bg-white mt-4  rounded-[0.6rem] px-[1.125rem] py-[0.875rem] w-full'>
        <div className='flex flex-row items-start w-full'>
            
            <div className='w-11 h-11 flex flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-xl'>
                {props.group_name[0]}
            </div>

            <div className='flex flex-col ml-3 w-full'>
                <div className='flex flwx-row w-full '>
                    <div>{props.group_name}</div>
                </div>

                <div className='flex flex-row items-center w-full'>
                    <div className='mt-1 text-regal-text-gray max-h-[48px] overflow-hidden text-start'>This is the description of a group</div>
                </div>
            </div>
        </div>
    </button>
  )
}

export default Group