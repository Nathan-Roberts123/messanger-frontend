import React from 'react'


import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import SelectFriend from './SelectFriend'
import { useState, useEffect } from 'react'


const ChooseInvites = () => {

    const form = useForm()
    const {register, handleSubmit} = form
    const [ friends, setFriends ] = useState([]);

    const [invites, setInvites ] = useState([])

    const token = JSON.parse(localStorage.getItem('token'))

    const groupInfo = JSON.parse(localStorage.getItem('groupInfo'))
    console.log(groupInfo)

    function onSubmit(data) {
        console.log(data)
    }

    function addInvite(username) {
        setInvites(invites => [...invites, username])
    }

    function removeInvite(username) {
        const newInvites = invites.filter((invite) => invite !== username);
        setInvites(newInvites)
    }

    console.log(invites)

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

    function startChat() {

        fetch('http://127.0.0.1:8000/chat/create-groupchat/', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Token ${token}`
            },
            body: JSON.stringify({
                "invites": invites,
                'group_name': groupInfo['groupname'],
                'group_description': groupInfo['desctription']
            })
        })
        .then((res) => {
            return res.json()
        })
        .catch(err => {
            console.log(err.message)
        })

        localStorage.removeItem("groupInfo")
    }



  return (
    <form onSubmit={handleSubmit(onSubmit)} className='h-full relative'>
        <div className='text-[22px] font-bold'>Friends</div>
        <div>
            {friends.map((f) => {
                return (
                <SelectFriend key={f.id} first_name = {f.first_name} last_name = {f.last_name} username = {f.username} addInvite = { addInvite } removeInvite = { removeInvite } /> )
            })}
        </div>

        <div className='flex gap-3 mt-auto absolute bottom-0 left-0 right-0'>
            <Link to="/create-group" className='flex w-full py-3  text-regal-blue bg-white rounded-lg text-center align-middle justify-center'>Back</Link>

            <button type='submit' className='w-full py-3 bg-regal-blue text-white rounded-lg' onClick={ startChat }>Start Chat</button>
        </div>
    </form>
  )
}

export default ChooseInvites