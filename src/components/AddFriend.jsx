import React from 'react'
import { useForm } from 'react-hook-form'

const AddFriend = () => {
    
    const form = useForm()
    const { register, handleSubmit, reset } = form
    const token = JSON.parse(localStorage.getItem('token'))

    function onSubmit(data) {
        fetch("http://127.0.0.1:8000/notifications/create-friendRequest/", {
              method: 'POST',
              headers: {
                'Content-Type':'application/json',
                'Authorization':`Token ${token}`
                },
              body: JSON.stringify(data)
            }).then((res) => {
              return res
            })
            .then((data) => {
              return data
            })
            .catch((err) => {
              console.log(err)
            })

        reset()
    }

    function onUserChange(e) {
        console.log(e.target.value)
    }

  return (
    <>
    <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
        <div className='w-full'>
            <span>Username</span>
            <div className='w-full'>
                <input className='w-full px-2 py-1 mt-2 rounded-[0.6rem]' placeholder='Username' {...register("username", {
                    required: {
                        value:true,
                        message:"enter a username"
                    }
                })}

                onChange={onUserChange}
                
                />
            </div>
        </div>
        {/*
        <div className='w-full mt-5'>
            <span>Message</span>
            <div className='w-full'>
                <textarea className='w-full px-2 py-1 mt-2 resize-none rounded-[0.6rem]' placeholder='Message'  {...register("message") }></textarea>
            </div>
        </div>
        */}
        <button className='flex justify-between w-full mt-5 bg-slate-300 px-2 py-2 rounded-[0.6rem]'>
            <span>Send</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
    </form>

    <div className='w-full mt-2'>
        <p>User</p>
    </div>
    </>
  )
}

export default AddFriend