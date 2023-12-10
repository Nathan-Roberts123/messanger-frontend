import React from 'react'
import image from '../images/prf2.jpg'

const Profile = () => {
  return (
    <>
    <div className='flex flex-col items-center'>
        <div className='w-24 h-24 flex flex-shrink-0 items-center justify-center rounded-full'>
            <img src={image} alt="profile" className='w-24 h-24 rounded-full'/>
        </div>

        <div className='mt-10 text-xl'>William Oshaq</div>
        <div className=' text-sm text-regal-text-gray'>12william</div>
    </div>

    <div className='mt-10 bg-white rounded-md'>
        <div className='flex flex-row items-center px-3 py-3'>
            <div>
                <div>Location</div>
                <div className='text-regal-text-gray'>New York, USA</div>
            </div>

            <div className="ml-auto p-2 rounded-md bg-regal-white">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-[0.75rem] h-[0.75rem] text-regal-text-gray' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
        </div>
        <hr></hr>
        <div className='flex flex-row items-center px-3 py-3'>
            <div>
                <div>Email</div>
                <div className='text-regal-text-gray'>william@gmail.com</div>
            </div>

            <div className="ml-auto p-2 rounded-md bg-regal-white">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-[0.75rem] h-[0.75rem] text-regal-text-gray' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
        </div>
        <hr></hr>
        <div className='flex flex-row items-center px-3 py-3'>
            <div>
                <div>Phone</div>
                <div className='text-regal-text-gray'>(+27) 646 55483</div>
            </div>

            <div className="ml-auto p-2 rounded-md bg-regal-white">
            <svg xmlns="http://www.w3.org/2000/svg" className='w-[0.75rem] h-[0.75rem] text-regal-text-gray' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
        </div>
        <hr></hr>
        <div className='flex flex-row items-center px-3 py-3'>
            <div>
                <div>Gender</div>
                <div className='text-regal-text-gray'>male</div>
            </div>

            <div className="ml-auto p-2 rounded-md bg-regal-white">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-[0.75rem] h-[0.75rem] text-regal-text-gray' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile