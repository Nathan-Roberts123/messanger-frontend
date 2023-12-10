import React from 'react'
import image1 from '../images/6.jpg'

const Chat = (props) => {
    const token = JSON.parse(localStorage.getItem('token'))

    function changeChatUser(chat) {
        
      fetch('http://127.0.0.1:8000/chat/set-current-chat/', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Token ${token}`
            },
            body: JSON.stringify({
                type: props.type,
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
        
        {/*
        fetch("http://127.0.0.1:8000/chat/mark-as-read/", {
              method: 'POST',
              headers: {
                'Content-Type':'application/json',
                'Authorization':`Token ${token}`
                },
              body: JSON.stringify({"chat":chat})
            }).then((res) => {
              return res
            })
            .then((data) => {
              return data
            })
            .catch((err) => {
              console.log(err)
            })

          */}
        window.location.reload()
    }

  return (
        <button onClick={ () => changeChatUser(props.name) } className='bg-white mt-10 flex flex-row items-start w-full  rounded-[0.6rem] px-[1.125rem] py-[0.875rem] gap-3 '>
            <div className='w-11 h-11 flex flex-shrink-0 items-center justify-center rounded-full'>
                <img src={image1} alt="profile" className='w-11 h-11 rounded-full'/>
            </div>
            <div className='flex flex-col ml-3 w-full'>
                <div className='flex flwx-row w-full '>
                    <div>{props.name}</div>
        
                    <div className='flex flex-col ml-auto items-end'>
                        <div className='text-[.665rem] text-gray-icons'>{props.time}</div>
                    </div>
                </div>

                <div className='flex flex-row items-center w-full'>
                    <div className='mt-1 text-regal-text-gray text-start max-h-[48px] overflow-hidden'>{props.msg}</div>
                    { props.unread != "0" && <div className='ml-auto text-[.665rem] p-2 flex flex-shrink-0 h-5 w-5 items-center justify-center text-white  rounded-full bg-regal-blue'>{ props.unread }</div> }
                </div>
            </div>
        </button>

  )
}

export default Chat