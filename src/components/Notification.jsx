import React, { useState } from 'react'
import image1 from '../images/6.jpg'

const Notification = (props) => {

    const token = JSON.parse(localStorage.getItem('token'))


    function handleAccept() {
        fetch("http://127.0.0.1:8000/friends/accept-request/", {
              method: 'POST',
              headers: {
                'Content-Type':'application/json',
                'Authorization':`Token ${token}`
                },
              body: JSON.stringify({"username":props.sender})
            }).then((res) => {
              return res
            })
            .then((data) => {
              props.handleChangeState()
              return data
            })
            .catch((err) => {
              console.log(err)
            })
    }

    function handleDecline() {

        fetch("http://127.0.0.1:8000/friends/decline-request/", {
              method: 'POST',
              headers: {
                'Content-Type':'application/json',
                'Authorization':`Token ${token}`
                },
              body: JSON.stringify({"username":props.sender})
            }).then((res) => {
              return res
            })
            .then((data) => {
              props.handleChangeState()
              return data
            })
            .catch((err) => {
              console.log(err)
            })
      
        
    }

  return (

    <div className='bg-white mt-10  rounded-[0.6rem] px-[1.125rem] py-[0.875rem]'>
        <div className='flex flex-row items-start w-full'>
            <div className='w-11 h-11 flex flex-shrink-0 items-center justify-center rounded-full'>
                <img src={image1} alt="profile" className='w-11 h-11 rounded-full'/>
            </div>
            <div className='flex flex-col ml-3 w-full'>
                <div className='flex flwx-row w-full '>
                    <div>{props.sender}</div>
                    <div className='flex flex-col ml-auto items-end'>
                        <div className='text-[.665rem] text-gray-icons'>10:29PM</div>
                    </div>
                </div>

                <div className='flex flex-row items-center w-full'>
                    {props.type == "friend" && <div className='mt-1 text-regal-text-gray max-h-[48px] overflow-hidden'>Sent you a friend request</div>}
                    {props.type == "group" && <div className='mt-1 text-regal-text-gray max-h-[48px] overflow-hidden'>Added you in the group {props.group}</div>}
                    {props.type == "decline_request" && <div className='mt-1 text-regal-text-gray max-h-[48px] overflow-hidden'>Decline your friend request</div>}
                    {props.type == "accept_request" && <div className='mt-1 text-regal-text-gray max-h-[48px] overflow-hidden'>Accepted your friend request</div>}
                </div>
            </div>
        </div>

        {

        props.type == "friend" &&

        <div className='flex flex-row gap-4 mt-7'>
            { props.isDeclined &&
            <div className='w-full'>
                <button className='w-full h-10 bg-blue-200 rounded-md text-white disabled'>Declained</button>
            </div>
            }

            { props.isAccepted &&
            <div className='w-full'>
                <button className='w-full h-10 bg-blue-200 rounded-md text-white disabled'>Accepted</button>
            </div>
            }

            { !props.isAccepted && !props.isDeclined &&
            <div className='flex flex-row w-full gap-4'>
                <button onClick={handleAccept} className='w-full h-10 bg-regal-blue rounded-md text-white'>Accept</button>
                <button onClick={handleDecline} className='w-full h-10 bg-regal-white rounded-md text-gray-text-icons'>Decline</button>
            </div>
            }
            
        </div>

        }
    </div>
    
  )
}

export default Notification