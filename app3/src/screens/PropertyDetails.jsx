import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import { useState } from 'react'

function PropertyDetails() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [guestRooms, setGuestRooms] = useState('')
  const [bedRooms, setBedRooms] = useState('')
  const [bathRooms, setBathRooms] = useState('')

  const navigate = useNavigate()

  const onSave = () => {
   
    navigate('/properties')
  }

  return (
    <div>
      <Navbar />
      <h2 className='page-header'>Property Details</h2>
      <div className='form'>
        <div className='mb-3'>
          <label htmlFor=''>Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Description</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            className='form-control'
          ></textarea>
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Address</label>
          <textarea
            onChange={(e) => setAddress(e.target.value)}
            rows={2}
            className='form-control'
          ></textarea>
        </div>
        <div className='row mb-3'>
          <div className='col'>
            <div className='mb-3'>
              <label htmlFor=''>City</label>
              <input
                onChange={(e) => setCity(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
          </div>
          <div className='col'>
            <div className='mb-3'>
              <label htmlFor=''>State</label>
              <input
                onChange={(e) => setState(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
          </div>
          <div className='col'>
            <div className='mb-3'>
              <label htmlFor=''>Zip Code</label>
              <input
                onChange={(e) => setZipCode(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col'>
            <div className='mb-3'>
              <label htmlFor=''>#Guest Rooms</label>
              <input
                onChange={(e) => setGuestRooms(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
          </div>
          <div className='col'>
            <div className='mb-3'>
              <label htmlFor=''>#Bed Rooms</label>
              <input
                onChange={(e) => setBedRooms(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
          </div>
          <div className='col'>
            <div className='mb-3'>
              <label htmlFor=''>#Bath Rooms</label>
              <input
                onChange={(e) => setBathRooms(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <button onClick={onSave} className='btn btn-success me-2'>
            Save
          </button>
          <Link to='/properties' className='btn btn-danger'>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails
