import React, { useState } from 'react'
import Chat from './Chat'
import { useEffect } from 'react'

const Chats = () => {

    const token = JSON.parse(localStorage.getItem('token'))
    const [ chats, setChats ] = useState([]);


    useEffect(() => {
        fetch('http://127.0.0.1:8000/chat/get-chats/', {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Token ${token}`
            }
        })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setChats(data);
        })
        .catch(err => {
            console.log(err.message)
        })

    }, [])


    

  return (
    <>
        <div className='text-[22px] font-bold'>Chats</div>

        <div>
            {chats.map((c) => {
                return (<Chat name = {c.user} msg = {c.message} unread = {c.unread} time={c.time} type={c.type} />)
            })}
        </div>
    </>
  )
}

export default Chats