import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Chats from '../components/Chats'
import CreateGroup from '../components/CreateGroup'
import FriendsList from '../components/FriendsList'
import Notifications from '../components/Notifications'
import Sidebar from '../components/Sidebar'
import UserProfile from '../components/UserProfile'
import ChooseInvites from '../components/ChooseInvites'

import MessageBox from '../components/MessageBox'
import PickChat from '../components/PickChat'
import AddFriend from '../components/AddFriend'

import image from '../images/prf2.jpg'
import { useState} from 'react'
import { useEffect } from 'react'


const Home = () => {


  const [ user, setUser ] = useState('')
  const token = JSON.parse(localStorage.getItem('token'))

  useEffect(() => {
    fetch('http://127.0.0.1:8000/chat/get-current-chat/', {
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
      //SocketConnect(data.type, data.name)
      setUser(data)
    })
    .catch(err => {
        console.log(err.message)
    })
  }, [])


  let socket = null
  
  if (user) {
    let url = `ws://localhost:8000/ws/${user.type}/${user.name}/`
    url += '?token='+token
    socket = new WebSocket(url);
    console.log("connected")
  }


  return (
    <div className='flex flex-row h-screen font-medium leading-6 text-[.9375rem] font-body'>

      <div className='flex flex-row w-[700px] bg-regal-white'>
        <div className=''>
          <Sidebar />
        </div>

        <div className='py-6 overflow-y-auto flex flex-col w-full px-5'>
          <Routes>
              <Route path='/user-profile' element={<UserProfile />} />
              <Route path='/notifications' element={<Notifications />} />
              <Route path='/friends' element={<FriendsList />} />
              <Route path='/create-group' element={<CreateGroup />} />
              <Route path='/choose-invite' element={<ChooseInvites />} />
              <Route path='/add-friend' element={<AddFriend />} />
              <Route path='/' element={<Chats />} />
          </Routes>
        </div>
      </div>

      { user !== "" ? <MessageBox className='' socket={socket} user={ user.name } type={user.type} />: <PickChat /> }

    
    </div>
  )
}

export default Home