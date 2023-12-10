import { React, useEffect, useState } from 'react'
import image1 from '../images/prf.jpg'
import { useNavigate } from 'react-router-dom'



const UserProfile = () => {
    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem('token'))
    const [ upload, setUpload ] = useState("")

    const [ prfInfo, setPrfInfo ] = useState({});
    
    useEffect(() => {
        fetch('http://127.0.0.1:8000/accounts/user-profile/', {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Token ${token}`
            }
        })
        .then(res => res.json())
        .then((data) => {
            setPrfInfo(data)
        })

    }, [upload])

    function fileUpload(e) {
        let image = e.target.files[0]
        const formData = new FormData()

        formData.append('file', image)

        fetch('http://127.0.0.1:8000/accounts/update-image/', {
            method: 'POST',
            headers: {
                'Authorization':`Token ${token}`
            },
            body: formData
        })
        .then((res) => {
            setUpload(prfInfo['profile picture'])
            return res.json()
        })
        .then((data) => {
            return data
        })
        .catch(err => {
            console.log("error: " + err)
            setUpload(prfInfo['profile picture'])  
        })

        


    }

    console.log(prfInfo)

  return (
    <>
    <div className='flex flex-col items-center'>

        <input type='file' name="image" id='image' className='hidden' onChange={ fileUpload }/>

        <div className='w-24 h-24 flex flex-shrink-0 items-center justify-center rounded-full relative'>
            <img src={`http://127.0.0.1:8000/accounts/media/${prfInfo['profile picture']}`} alt="profile" className='w-24 h-24 rounded-full'/>
        
            <label for="image" className='p-2 rounded-full bg-gray-200 absolute -bottom-2 -right-2 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
            </label>
  
        </div>

        <div className='mt-10 text-xl'>{prfInfo['first name']} {prfInfo['last name']}</div>
        <div className=' text-sm text-regal-text-gray'>{prfInfo['username']}</div>
    </div>

    <div className='mt-10 bg-white rounded-md'>
        <div className='flex flex-row items-center px-3 py-3'>
            <div>
                <div>Location</div>
                <div className='text-regal-text-gray'>{prfInfo['state']}, {prfInfo['country']}</div>
            </div>

            <div className="ml-auto p-2 rounded-md bg-regal-white">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-[0.75rem] h-[0.75rem] text-regal-text-gray' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
        </div>
        <hr></hr>
        <div className='flex flex-row items-center px-3 py-3'>
            <div>
                <div>Email</div>
                <div className='text-regal-text-gray'>{prfInfo['email']}</div>
            </div>

            <div className="ml-auto p-2 rounded-md bg-regal-white">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-[0.75rem] h-[0.75rem] text-regal-text-gray' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
        </div>
        <hr></hr>
        <div className='flex flex-row items-center px-3 py-3'>
            <div>
                <div>Phone</div>
                <div className='text-regal-text-gray'>{prfInfo['phone']}</div>
            </div>

            <div className="ml-auto p-2 rounded-md bg-regal-white">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-[0.75rem] h-[0.75rem] text-regal-text-gray' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
        </div>
        <hr></hr>
        <div className='flex flex-row items-center px-3 py-3'>
            <div>
                <div>Gender</div>
                <div className='text-regal-text-gray'>{prfInfo['gender']}</div>
            </div>

            <div className="ml-auto p-2 rounded-md bg-regal-white">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-[0.75rem] h-[0.75rem] text-regal-text-gray' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
        </div>
        <hr className='border-4'></hr>
        <div className='px-3 py-3'>
            <button className='text-red-600' onClick={()=>navigate("/login")}>Logout</button>
        </div>
    </div>
  </>
  )
}

export default UserProfile