import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';


const Register = () => {

  const navigate = useNavigate();


  const form = useForm()
  const { register, control,  handleSubmit, formState } = form
  const { errors } = formState

  const onSubmit = (data) => {
    
    fetch('http://127.0.0.1:8000/accounts/profiles/', {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify(data)
    }).then(() => {
      console.log('done')
    })

  }

  return (
    <>

    <div className='flex h-screen w-full  justify-center bg-regal-white py-3 font-body'>
      <form onSubmit={ handleSubmit(onSubmit) } className='flex flex-col w-2/5 bg-white px-5 rounded-md h-fit py-4'>
        <div className='flex self-center font-bold text-3xl'>Register</div>
        <div className='flex flex-row w-full gap-3 mt-6'>
          <div className='w-full p-2 bg-white rounded-md border-2'>
            <input placeholder='First Name' className='w-full outline-none' {...register("firstname", { 
              required: {
                value:true, 
                message:"first name is required"},
              })}/>

            <p className='text-red-500'>{errors.firstname?.message}</p>
          </div>
          <div className='w-full p-2 bg-white rounded-md border-2'>
            <input type='text' placeholder='Last Name' className='w-full outline-none' {...register("lastname", { 
              required: {
                value:true, 
                message:"last name is required"},
              })}/>

          </div>
        </div>

        <div className='flex flex-row w-full gap-3 mt-4'>
          <div className='w-full p-2 bg-white rounded-md border-2'>
            <input placeholder='Username' className='w-full outline-none' {...register("username", { 
              required: {
                value:true, 
                message:"username is required"},
              })}/>

          </div>
          <div className='w-full p-2 bg-white rounded-md border-2'>
            <input type='email' placeholder='Email' className='w-full outline-none' {...register("email", { 
              required: { value:true, message:"Email is required" }, 
              pattern: { value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message:"Enter a valid email" }
              })}/>
          </div>
        </div>

        <div className='flex flex-row w-full gap-3 mt-4'>
          <div className='w-full p-2 bg-white rounded-md border-2'>
            <input type='password' placeholder='Password' className='w-full outline-none' {...register("password")}/>
          </div>
          <div className='w-full p-2 bg-white rounded-md border-2'>
            <input type='password' placeholder='Confirm Password' className='w-full outline-none' {...register("password2")}/>
          </div>
        </div>

        <div className='flex flex-row w-full gap-3 mt-4'>
          <div className='w-full p-2 bg-white rounded-md border-2'>
            <input placeholder='Phone' className='w-1/2 outline-none' {...register("phone number")}/>
          </div>
          
        </div>

        <div className='mt-5'>Address</div>
        <div className='flex flex-row w-full gap-3 mt-1'>
          <div className='w-full p-2 bg-white rounded-md border-2'>
           <input placeholder='State' className='w-full outline-none' {...register("state")}/>
          </div>

          <div className='w-full p-2 bg-white rounded-md border-2'>
            <select className='w-full outline-none text-gray-500' {...register("country")}>
              <option>Country</option>
              <option>South Africa</option>
              <option>USA</option>
              <option>China</option>
              <option>India</option>
            </select>
          </div>
        </div>

        <div className='flex flex-row w-full gap-3 mt-4'>
          <div className='w-full p-2 bg-white rounded-md border-2'>
            <input placeholder='Street name' className='w-full outline-none' {...register("address")}/>
          </div>
        </div>

        

        <div className='mt-4'>Gender</div>
        <div className='flex flex-row w-full gap-3 mt-1'>
          <div className='flex p-2 bg-white rounded-md border-2'>
            <div className='mr-3'>Male</div>
            <input type='radio' value="Male" className='outline-none' {...register("gender")}/>
          </div>
          <div className='flex p-2 bg-white rounded-md border-2'>
            <div className='mr-3'>Female</div>
            <input type='radio' value="Female" className='outline-none' {...register("gender")}/>
          </div>
          <div className='flex p-2 bg-white rounded-md border-2'>
            <div className='mr-3'>Other</div>
            <input type='radio' value="Other" className='outline-none' {...register("gender")}/>
          </div>
        </div>
        
        <button type='submit' className='bg-regal-blue text-white w-full mt-5 h-12 flex items-center justify-center rounded-md'>Register</button>
        <div className='flex justify-center mt-5'>Already have an account?<Link to={'/login'} className='ml-1 text-regal-blue'>Login</Link></div>
      </form>
    </div>

    {/*
    <form onSubmit={ handleSubmit(onSubmit) } noValidate>

      <span>Register</span>

      <div>
        <span>username</span>
        <input className='border' type='text' {...register("username", {
          required: {
            value:true,
            message:"Username is required"},
        })} />
        <p>{errors.username?.message}</p>
      </div>

      <div>
        <span>email</span>
        <input className='border' type='email' {...register("email", {
          required: {
            value:true,
            message:"Email is required"
          },
          pattern: {
            value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message:"Enter a valid email"
          }

        })} />
      </div>
      <p>{errors.email?.message}</p>

    
      <div>
        <span>first name</span>
        <input className='border' type='text' {...register("firstName", {
          required: {
            value:true,
            message:"first name is required"
          }
        })} />
        <p>{errors.firstName?.message}</p>
      </div>

      <div>
        <span>last name</span>
        <input className='border' type='text' {...register("lastName", {
          required: {
            value:true,
            message:"last name is required"
          }
        })} />
        <p>{errors.lastName?.message}</p>
      </div>

      <div>
        <span>Phone number</span>
        <input className='border' type='text' {...register("phone-number")} />
      </div>
      

      <div>
        <span>Select country</span>
        <select className='border' {...register("country")}>
          <option value="south africa">South Africa</option>
          <option value="USA">USA</option>
          <option value="saudi">Saudi</option>
        </select>
      </div>


      <div>
        <span>address</span>
        <input className='border' type='text' {...register("address")} />
      </div>

      <div>
        <span>password</span>
        <input className='border' type='password' {...register("password1")} />
      </div>

      <div>
        <span>confirm password</span>
        <input className='border' type='password' {...register("password2")} />
      </div>

      

      <div>
        <span>Gender</span>
        <div>
          <span>Male</span>
          <input type="radio" value="male" {...register("gender")} />
        </div>
        <div>
          <span>Femle</span>
          <input type="radio" value="female" {...register("gender")} />
        </div>
      </div>
  

      <button type='submit'>Sign up</button>
      
    </form>
      */}
    </>
  )
}

export default Register