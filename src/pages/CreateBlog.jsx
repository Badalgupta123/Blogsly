import React from 'react'

const CreateBlog = () => {
  return (
    <div className=''>
        <div className='w-[40%] flex flex-col items-center  bg-green-500 mx-auto h-[45rem]'>
            <input type="text" placeholder='Enter Your Name'/>
            <input type="text" placeholder='Enter Title' />
            <input type="file" name="image" id=""  />
            <textarea name="" id="" cols="30" rows="10" placeholder='Start writing from here...'></textarea>
            <button className='bg-yellow-200 rounded-lg p-2 mt-5'>Submit</button>
        </div>
    </div>
  )
}

export default CreateBlog