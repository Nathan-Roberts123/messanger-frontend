import React, { useState } from 'react'
import image from '../images/prf2.jpg'
import Profile from './Profile'

   
import { useEffect } from 'react'
import $ from "jquery"
import 'emojionearea'

import MsgReceived from './MsgReceived'
import MsgSent from './MsgSent'
import { v4 as uudiv4 } from "uuid";




window.jQuery = $;

const MessageBox = (props) => {

    const [ userInfo, setUserInfo ] = useState()
    const [ username, setUsername ] = useState('')



    let user = props.user;

    //const user = localStorage.getItem('chat')
    
    const token = JSON.parse(localStorage.getItem('token'))

    const [ newMessages, setNewMessages ] = useState([]);
    const [ prfVisibility, setPrfVisibility ] = useState(false)
    const [ messages, setMessages ] = useState([])
    const [ isTyping, setIsTyping ] = useState(false)
    
    
    props.socket.onmessage = function(e) {
        let data = JSON.parse(e.data)
        let type = data["type"]
        let receiver = data["receiver"]

        if (type === "sent") {
            let message = data["message"]

            setNewMessages(prev => {
                return [...prev, {
                    "id": uudiv4(),
                    "text": message,
                    "receiver": receiver
                }]
            })
        }
        else if (type === "isTyping") {
            let status = data["status"]

            if (receiver != user)  { 

                if (status === "typing") {
                    setIsTyping(true)
                } else if (status === "stoped") {
                    setIsTyping(false)
                }
                
            }
        }
    }


    
    console.log(newMessages)
    

    function toogleProfile() {
        prfVisibility ? setPrfVisibility(false) : setPrfVisibility(true)
    }

    function handleSubmit(e) {
        e.preventDefault()
        let msg = e.target.message.value
        
        if (msg) {
            const data = { "msg": msg, "chat": user }

            props.socket.send(JSON.stringify({
                "message":msg,
                "receiver": user,
                "type":"sent"
            }))

            e.target.message.value = ""

            props.socket.send(JSON.stringify({
                "type":"isTyping",
                "status": "stoped",
                "receiver": user
            }))
        }

    }

    function handleChange(e) {
        let msg = e.target.value

        if (msg == "") {
            props.socket.send(JSON.stringify({
                "type":"isTyping",
                "status": "stoped",
                "receiver": user
            }))
            
        } else {
            props.socket.send(JSON.stringify({
                "type":"isTyping",
                "status":"typing",
                "receiver": user
            }))
        }
    }


    

    useEffect(() => {
        fetch('http://127.0.0.1:8000/chat/get-chat-messages/', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Token ${token}`
            },
            body: JSON.stringify({
                'type': props.type,
                'chatUser': user
            })
        })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setMessages(data)
            return data
        })
        .catch(err => {
            console.log(err.message)
        })

    }, [])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/accounts/get-username/', {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Token ${token}`
            },
        })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setUsername(data.username)
            return data
        })
        .catch(err => {
            console.log(err.message)
        })

    }, [])





  return (
    <div className='flex flex-row w-full'>

        <div className='flex flex-col w-full h-full px-4 pb-6'>

            <div className='flex flex-row items-center py-4'>
                <div className='flex gap-2'>
                    <img className='rounded-full w-11 h-11' src={image} alt="profile" />
                    <div>
                        <span className='block'>{user}</span>
                        {isTyping && <span className='text-red-300'>is typing...</span>}
                    </div>
                </div>

                <div className='ml-auto text-regal-text-gray'>
                    <button onClick={ toogleProfile }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                    </button>
                </div>
            </div>



            <div className='h-full overflow-hidden border-t-2'>

                <div className='h-full overflow-y-auto'>
                    <div className='grid grid-cols-12 gap-y-10 mt-3' id="messages-body">

                        {messages.map((m) => {
                            if (m.sender.username === username) {
                                return (<MsgReceived msg={m.text} /> )
                            }

                            else {
                                return (<MsgSent msg={m.text} />)
                            }
    
                        })}

                        {newMessages.map((m) => {
                            console.log(m.receiver)
                            console.log(user)
                            if (m.receiver === username) {
                                return (<MsgSent msg={m.text} />)
                            }

                            else {
                                return (<MsgReceived msg={m.text} /> )
                            }
    
                        })}

                        
                    </div>
                </div>
            </div>


            <form onSubmit={handleSubmit} className='flex flex-row w-[calc(100% + (2rem))] items-center rounded-full bg-regal-white h-20 pl-4 pr-2 gap-x-3'>
                <button>
                    <input className='hidden' id="file" type='file' />
                    <label for="file">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-icons w-[1rem] h-[1rem]"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                    </label>
                </button>
                <div className="w-full">
                    <input className="w-full text-sm h-12 bg-regal-white outline-none" name="message" placeholder="Type Your Message" onChange={handleChange} />
                </div>

                <div className='flex flex-row items-center gap-x-3'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-icons stroke-2 w-[1.125rem] h-[1.125rem]"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                    </button>

                    <button type='submit' className='flex flex-row flex-shrink-0 items-center justify-center rounded-full h-[calc(1.6em+1.1875rem+4px)] w-[calc(1.6em+1.1875rem+4px)] w-10 bg-regal-blue'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white stroke-2 w-[1rem] h-[1rem]"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </button>
                </div>
            </form>

            
        </div>

        { prfVisibility && <div className='w-9/12 h-full bg-white px-5 pt-5 border-l-2'><Profile /></div> }
    </div>
  )
}

export default MessageBox