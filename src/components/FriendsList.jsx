import React, { useState, useEffect } from 'react'
import AddFriend from './AddFriend';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Friend from './Friend';

import Group from './Group';


const FriendsList = () => {
    const [ addFriend, setAddFriend ] = useState(false);

    const [ friends, setFriends ] = useState([]);
    const [ privateGroups, setPrivateGroups ] = useState([]);

    const token = JSON.parse(localStorage.getItem('token'))

    const form = useForm()
    const { register, handleSubmit } = form

    function onSubmit(data) {
        console.log(data)
    }

    function openChat() {
        //send a request to create room
    }

    useEffect(() => {
        fetch('http://127.0.0.1:8000/friends/getFriends/', {
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
            setFriends(data);
        })
        .catch(err => {
            console.log(err.message)
        })

    }, [])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/chat/getPrivateGroups/', {
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
            setPrivateGroups(data);
        })
        .catch(err => {
            console.log(err.message)
        })

    }, [])


  return (
    
    <>
    <div className='text-[22px] font-bold'>Friends And Groups</div>

    <div className='mt-10 flex flex-row items-center w-full bg-[#ebf1f7] rounded-[0.6rem] px-[1.125rem] py-[0.875rem] gap-3 text-gray-icons'>
        <div className='text-gray-icons'>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-[1rem] w-[1rem]' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> 
        </div>
        <div className='w-full'>
            <input placeholder='Search for friend or group' className='w-full outline-none bg-[#ebf1f7]'></input>
        </div>
    </div>

    <Link to='/add-friend' className='bg-regal-blue mt-10 flex flex-row items-center justify-between w-full  rounded-[0.6rem] px-[1.125rem] py-[0.875rem] gap-3 text-white'>
        <div>Find Friends</div>
        <div className=''>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-[0.75rem] h-[0.75rem]' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
        </div>
    </Link>

    
    <div>
        {friends.map((f) => {
            return (
            <Friend key={f.id} first_name = {f.first_name} last_name = {f.last_name} username = {f.username} /> )
        })}

        {privateGroups.map((g) => {
            return (
            <Group key={g.id} group_name = {g.name} /> )
        })}

    </div>
    
    {/*
    <div>
        { addFriend && <div className='fixed bg-black top-0 bottom-0 left-0 right-0'>
            <button className='bg-white' onClick={()=>setAddFriend(false)}>Back</button>
            <div className='bg-white flex justify-center items-center'>
                <AddFriend />
            </div>
        </div> }

        <span>Friends</span>
        <form onSubmit={ handleSubmit(onSubmit) }>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input placeholder='Search friends' {...register("friend")}/>
            <button type='submit'>search</button>
        </form>
    
        <button onClick={()=>setAddFriend(true)}>
            <span>Find friend</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
        </button>


        <div>

            <div>
                <span>A</span>

                <div>
                    <div className='relative mt-10 flex flex-row bg-white rounded-xl px-8 py-4 '>
                        <div className='absolute top-0 right-0 mr-8 mt-3 text-[.665em]'>5 min</div>
                        <div className='flex flex-shrink-0 justify-center items-center rounded-full w-11 h-11  mr-3'>
                            <img className='rounded-full w-11 h-11' src={image1} alt="profile" />
                        </div>

                        <div className='flex flex-col flex-grow'>
                            <div className=''>John Lucas</div>
                            <div className='w-56 mt-3 overflow-hidden text-regal-text-gray'>Hello, Lorem</div>
                        </div>

                        <div className='flex-shrink-0 self-end ml-auto'>
                            <span className='flex items-center justify-center w-5 h-5 bg-regal-blue text-white rounded-full'>5</span>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <span>A</span>
                <div>
                    <div>
                        <button onClick={openChat}>
                            <div>
                                <img src={image1} alt="profile"/>
                                <div>
                                    <span>Ali Marrow</span>
                                    <span>Last seen 2 weeks ago</span>
                                </div>
                            </div>
                        </button>

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <span>B</span>
                <div>
                    <div>
                        <button>
                            <div>
                                <img src={image1} alt="profile"/>
                                <div>
                                    <span>Bill Marrow</span>
                                    <span>Last seen 2 weeks ago</span>
                                </div>
                            </div>
                        </button>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

  */}

  </>
      
  )
}

export default FriendsList