import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import Notification from './Notification'


const Notifications = () => {

    const [ notifications, setNotifications ] = useState([]);
    const token = JSON.parse(localStorage.getItem('token'))

    const [ updated, setUpdated ] = useState(false)

    useEffect(() => {
        console.log("fetching data ")
        fetch('http://127.0.0.1:8000/notifications/get-notifications/', {
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
            setNotifications(data);
        })
        .catch(err => {
            console.log(err.message)
        })

    }, [ updated])


    function handleChangeState() {
        setUpdated(true)    
    }

    

  return (
    <>
    <div className='text-[22px] font-bold'>Notifications</div>

    <div>
        {notifications.map((n) => {
            return (
                <Notification key={n.id} sender = {n.sender.username} type = {n.type} isAccepted = {n.accepted} isDeclined = {n.declined} group = {n.group  ? n.group.name : "group"} handleChangeState = { handleChangeState } />
            )
        })}
    </div>

    {/*
    <div className='bg-white mt-10  rounded-[0.6rem] px-[1.125rem] py-[0.875rem]'>
        <div className='flex flex-row items-start w-full'>
            <div className='w-11 h-11 flex flex-shrink-0 items-center justify-center rounded-full'>
                <img src={image1} alt="profile" className='w-11 h-11 rounded-full'/>
            </div>
            <div className='flex flex-col ml-3 w-full'>
                <div className='flex flwx-row w-full '>
                    <div>Ryna Johnson</div>
                    <div className='flex flex-col ml-auto items-end'>
                        <div className='text-[.665rem] text-gray-icons'>10:29PM</div>
                    </div>
                </div>

                <div className='flex flex-row items-center w-full'>
                    <div className='mt-1 text-regal-text-gray max-h-[48px] overflow-hidden'>Sent you a friend request</div>
                </div>
            </div>
        </div>

        <div className='flex flex-row gap-4 mt-7'>
            <button className='w-full h-10 bg-regal-blue rounded-md text-white'>Accept</button>
            <button className='w-full h-10 bg-regal-white rounded-md text-gray-text-icons'>Reject</button>
        </div>
    </div>

    <div className='bg-white mt-10  rounded-[0.6rem] px-[1.125rem] py-[0.875rem]'>
        <div className='flex flex-row items-start w-full'>
            <div className='w-11 h-11 flex flex-shrink-0 items-center justify-center rounded-full'>
                <img src={image1} alt="profile" className='w-11 h-11 rounded-full'/>
            </div>
            <div className='flex flex-col ml-3 w-full'>
                <div className='flex flwx-row w-full '>
                    <div>Ryna Johnson</div>
                    <div className='flex flex-col ml-auto items-end'>
                        <div className='text-[.665rem] text-gray-icons'>10:29PM</div>
                    </div>
                </div>

                <div className='flex flex-row items-center w-full'>
                    <div className='mt-1 text-regal-text-gray max-h-[48px] overflow-hidden'>Added you in the Musicias group</div>
                </div>
            </div>
        </div>
    </div>

    <div className='bg-white mt-10  rounded-[0.6rem] px-[1.125rem] py-[0.875rem]'>
        <div className='flex flex-row items-start w-full'>
            <div className='w-11 h-11 flex flex-shrink-0 items-center justify-center rounded-full'>
                <img src={image1} alt="profile" className='w-11 h-11 rounded-full'/>
            </div>
            <div className='flex flex-col ml-3 w-full'>
                <div className='flex flwx-row w-full '>
                    <div>Ryna Johnson</div>
                    <div className='flex flex-col ml-auto items-end'>
                        <div className='text-[.665rem] text-gray-icons'>10:29PM</div>
                    </div>
                </div>

                <div className='flex flex-row items-center w-full'>
                    <div className='mt-1 text-regal-text-gray max-h-[48px] overflow-hidden'>Accepted your friend request</div>
                </div>
            </div>
        </div>
    </div>

    */}

    {/*
    <div>
        <span>Notifications</span>
        <div>
            <div>
                <div>
                    <div>
                        <img src={image1} alt="profile"/>
                        <div>
                            <span>Ali Marrow</span>
                            <span>sent you a friend request</span>
                        </div>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </div>
                </div>
                <div>
                    <button>Hide</button>
                    <button>Confirm</button>
                </div>
            </div>

            <div>
                <div>
                    <div>
                        <img src={image1} alt="profile"/>
                        <div>
                            <span>Ali Marrow</span>
                            <span>added you in a group chat</span>
                        </div>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    */}
    </>
  )
}

export default Notifications