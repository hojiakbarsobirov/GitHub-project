import React, { useRef } from 'react'
import AxiosInstance from './AxiosInstance'

const Modal = ({setShowModal, fetchData}) => {

    const imgRef = useRef('')
    const titleRef = useRef('')
    const additionRef = useRef('')

    const createData = async(e) => {
        e.preventDefault()

        const newData = {
            img: imgRef.current.value,
            title: titleRef.current.value,
            addition: additionRef.current.value
        }

        try{
            const response = await AxiosInstance.post('students', newData)
            setShowModal(false)
            fetchData()
        } catch (err) {
            alert('Error !')
        }
    }

  return (
    <>
        <section className='bg-black w-full h-screen fixed top-0 bg-opacity-55'>
            <header className='w-full h-full flex justify-center items-center'>
                <div className='bg-white w-[300px] h-[350px] rounded'>
                    <form onSubmit={createData} className='w-full h-full flex justify-around items-center flex-col'>
                        <input ref={imgRef} className='border-[1px] border-gray-300 w-[90%] h-12 rounded-md pl-4' placeholder='Img Url' type="url" />
                        <input ref={titleRef} className='border-[1px] border-gray-300 w-[90%] h-12 rounded-md pl-4' placeholder='Tittle' type="text" />
                        <input ref={additionRef} className='border-[1px] border-gray-300 w-[90%] h-12 rounded-md pl-4' placeholder='Addition' type="text" />
                        <div className='w-full flex justify-around items-center space-x-20'>
                            <b onClick={() => setShowModal(false)} className='text-red-500 text-xl cursor-pointer'>Cencel</b>
                            <b type='submit' className='text-blue-500 text-xl cursor-pointer'>Send</b>
                        </div>
                    </form>
                </div>
            </header>
        </section>
    </>
  )
}

export default Modal