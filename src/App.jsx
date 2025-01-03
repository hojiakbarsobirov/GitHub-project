import { useEffect, useState } from 'react'
import './App.css'
import AxiosInstance from './AxiosInstance'
import Modal from './Modal'

function App() {

  const [showModal, setShowModal] = useState(false)

  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async() => {
    try {
      const response = await AxiosInstance.get('students')
      setData(response.data)
    } catch (err) {
      alert("Error !")
    }
  }

  console.log(data)

  return (
    <>
    <section className='bg-gray-100 w-full h-[85vh]'></section>

    <section className=' w-full h-[15vh] flex justify-center items-center'>
      <button onClick={() => setShowModal(true)} className='bg-black text-white font-bold px-5 py-3 rounded-md text-2xl'>+</button>
    </section>

    {
      showModal && <Modal setShowModal={setShowModal} fetchData={fetchData}/>  
    }
    </>
  )
}

export default App
