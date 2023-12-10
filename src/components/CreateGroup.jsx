import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const CreateGroup = () => {

    const navigate = useNavigate()

    const form = useForm()
    const { register, handleSubmit, setValue } = form

    const groupInfo = JSON.parse(localStorage.getItem('groupInfo'))


    useEffect(() => {

        if(groupInfo) {
            setValue("groupname", groupInfo['groupname'])
            setValue("desctription", groupInfo['desctription'])
            setValue("isPrivate", groupInfo['isPrivate'])
        }

    }, [])

    function onSubmit(data) {
        console.log(data)

        let sGroupInfo = JSON.stringify(data)
        localStorage.setItem("groupInfo", sGroupInfo)
        navigate('/choose-invite', {replace:true})
    }

    

  return (

    <>

    <form onSubmit={handleSubmit(onSubmit)} className='relative h-screen'>
        <button className='bg-regal-blue absolute bottom-0  mt-10 flex flex-row items-center justify-between w-full  rounded-[0.6rem] px-[1.125rem] py-[0.875rem] gap-3 text-white'>
            <div>Continue</div>
            <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" className='h-[1rem] w-[1rem]' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
        </button>

        <div className='text-[22px] font-bold'>Create Group Chat</div>

        <div className='bg-white mt-10 flex flex-col items-center justify-between w-full  rounded-[0.6rem] px-[1.125rem] py-[0.875rem] gap-3 text-white'>
            <div className=' flex flex-row items-center w-full bg-regal-white rounded-[0.6rem] px-[1.125rem] py-[0.875rem] gap-3 text-gray-icons'>
                <input placeholder='Group name' className='w-full outline-none bg-regal-white' {...register("groupname", {
                    required: {
                        value:true,
                        message:"group name is requried"
                    }
                })}></input>
            </div>

            <div className='flex flex-row items-center w-full bg-regal-white rounded-[0.6rem] px-[1.125rem] py-[0.875rem] gap-3 text-gray-icons'>
                <textarea placeholder='What is this group about?' className='w-full outline-none bg-regal-white resize-none' {...register("desctription")}></textarea>
            </div>

        </div>
        <div className='text-sm text-gray-icons mt-2 ml-3'>Enter a group name and add an optional photo</div>
        <div className='text-sm text-gray-icons mt-10 ml-3'>Options</div>

        <div className='bg-white mt-2 flex flex-row items-start w-full  rounded-[0.6rem] px-[1.125rem] py-[0.875rem] gap-3 '>
            <div className='bg-regal-white p-4 flex items-center justify-center rounded-md'>
                <svg xmlns="http://www.w3.org/2000/svg" className='h-[0.75rem] w-[0.75rem]' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>

            <div className='flex flex-col ml-3'>
                <div>Make private</div>
                <div className='mt-2 text-regal-text-gray'>Can only be viewed by invites</div>
            </div>

            <div className='flex self-center ml-auto'>
                <input type='checkbox' {...register("isPrivate")}/>
            </div>
        </div>
    </form>


    {/*
    <form onSubmit={handleSubmit(onSubmit)}>
        <span>Create Group</span>
        <div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 400 140.74"><defs><style>.cls-2{fill:#fff;opacity:0.1;}</style></defs><g><g><path d="M400,125A1278.49,1278.49,0,0,1,0,125V0H400Z"></path><path class="cls-2" d="M361.13,128c.07.83.15,1.65.27,2.46h0Q380.73,128,400,125V87l-1,0a38,38,0,0,0-38,38c0,.86,0,1.71.09,2.55C361.11,127.72,361.12,127.88,361.13,128Z"></path><path class="cls-2" d="M12.14,119.53c.07.79.15,1.57.26,2.34v0c.13.84.28,1.66.46,2.48l.07.3c.18.8.39,1.59.62,2.37h0q33.09,4.88,66.36,8,.58-1,1.09-2l.09-.18a36.35,36.35,0,0,0,1.81-4.24l.08-.24q.33-.94.6-1.9l.12-.41a36.26,36.26,0,0,0,.91-4.42c0-.19,0-.37.07-.56q.11-.86.18-1.73c0-.21,0-.42,0-.63,0-.75.08-1.51.08-2.28a36.5,36.5,0,0,0-73,0c0,.83,0,1.64.09,2.45C12.1,119.15,12.12,119.34,12.14,119.53Z"></path><circle class="cls-2" cx="94.5" cy="57.5" r="22.5"></circle><path class="cls-2" d="M276,0a43,43,0,0,0,43,43A43,43,0,0,0,362,0Z"></path></g></g></svg>
            </div>
            <div>
                <input placeholder='Enter group name' {...register("groupname", {
                    required: {
                        value:true,
                        message:"group name is requried"
                    }
                })}/>
            </div>
            <div>
                <textarea placeholder='What the purpose of this group' {...register("disctription")}></textarea>
            </div>
        </div>
        <span>Enter chat name and add a photo if you like</span>
        <span>Options</span>
        <div>
            <div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <div>
                    <span>Make private</span>
                    <span>Can only be viewed by invites</span>
                </div>
            </div>
            <div>
                <input type="checkbox" {...register("isPrivte")}/>
            </div>
        </div>

        <button type='submit'>
            <span>Start chat</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
    </form>
            */}
    </>
  )
}

export default CreateGroup