import React from 'react'
import image1 from '../images/6.jpg'

const Friend = (props) => {
    const token = JSON.parse(localStorage.getItem('token'))

    function changeChatUser(chat) {

        fetch('http://127.0.0.1:8000/chat/set-current-chat/', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Token ${token}`
            },
            body: JSON.stringify({
                type: "personal",
                username: chat
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
    <button onClick={()=>changeChatUser(props.username)} className='bg-white mt-4  rounded-[0.6rem] px-[1.125rem] py-[0.875rem] w-full'>
        <div className='flex flex-row items-start w-full'>
            <div className='w-11 h-11 flex flex-shrink-0 items-center justify-center rounded-full'>
                <img src={image1} alt="profile" className='w-11 h-11 rounded-full'/>
            </div>
            <div className='flex flex-col ml-3 w-full'>
                <div className='flex flwx-row w-full '>
                    <div>{props.username}</div>
                </div>

                <div className='flex flex-row items-center w-full'>
                    <div className='mt-1 text-regal-text-gray max-h-[48px] overflow-hiddenb text-start'>{props.first_name} {props.last_name}</div>
                </div>
            </div>
        </div>
    </button>
  )
}

export default Friend