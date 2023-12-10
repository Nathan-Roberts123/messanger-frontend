import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'


const Login = () => {

  const navigate = useNavigate()
  const [ err, setErr ] = useState(null);

  function onSubmit(DATA) {

    fetch("http://127.0.0.1:8000/accounts/login/", {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(DATA)
    }).then((res) => {
      if (!res.ok) {
        throw Error('enable to login with provided creditials')
      }
      return res.json()
    })
    .then((data) => {
      const token = JSON.stringify(data['token']);
      localStorage.setItem("token", token);
      localStorage.removeItem("chat")
      navigate('/', { replace: true })
    })
    .catch((err) => {
      setErr(err.message)
    })

    
  }

  const form = useForm()
  const { register, handleSubmit,formState } = form
  const { errors } = formState

  return (

    <>
    <div className='flex h-screen w-full items-center  justify-center bg-regal-white py-5 font-body'>
      <form onSubmit={ handleSubmit(onSubmit) } className='flex flex-col w-2/6 bg-white px-5 rounded-md h-fit py-4'>

        <div className='flex self-center font-bold text-3xl mt-4'>Login</div>
        
        <div className='w-full p-2 bg-white rounded-md border-2 mt-4'>
          <input type='text' placeholder='Username' className='w-full outline-none' {...register("username", { 
            required:{ value:true, 
            message:"username is required" }
          })}/>
        </div>
        <div className='w-full p-2 bg-white rounded-md border-2 mt-4'>
          <input type='password' placeholder='Password' className='w-full outline-none' {...register("password", { required: 
            { value:true, 
              message:"password is required" }
            })}/>
        </div>
        { err && <p className='text-red-500 text-center text-xs'>{err}</p>}
        <button type='submit' className='bg-regal-blue text-white w-full mt-5 h-12 flex items-center justify-center rounded-md'>Login</button>
        <div className='flex justify-center mt-5'>Don't have an account?<Link to={'/register'} className='ml-1 text-regal-blue'> Sign up</Link></div>
      </form>
    </div>


    {/*
    <form onSubmit={ handleSubmit(onSubmit) }>
      <span>Login</span>
      <div>
        <span>username</span>
        <input className='border' type='text' {...register("username", {
          required:{
            value:true,
            message:"username is required"
          }
        })}/>
        <p>{errors.username?.message}</p>
      </div>
      <div>
        <span>password</span>
        <input className='border' type='password' {...register("password", {
          required: {
            value:true,
            message:"password is required"
          }
        })}/>
        <p>{errors.password?.message}</p>
      </div>

      <button type='submit'>Log in</button>

    </form>
      */}
    </>
  )
}

export default Login