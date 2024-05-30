import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import { getProperties } from '../services/property'
import { useEffect } from 'react'
import { useState } from 'react'


function Properties() {
  const [properties, setProperties] = useState([])
  const navigate = useNavigate()

  const loadproperties =async () =>{
    const result=await getProperties()
    if(result.success=='succcess')
      {
        setProperties(result.data)
      }
  }
  useEffect(()=>{
loadproperties()//this funcion willbe called after immmediately after component
  },[])

  const onDelete = (index) => {
    // delete a property
    properties.splice(index, 1)
    setProperties([...properties])//rest value comes to state so...
  }

  const onDetails = (index) => {
    navigate('/Propertydetails')
  }

  return (
    <div>
      <Navbar />
      <h2 className='page-header'>Properties</h2>
      <Link to='/AddProperty' className='btn btn-primary'>
        Add Property
      </Link>
      {properties.length == 0 && (//conditional rendering vimp
        <h3 className='mt-5' style={{ textAlign: 'center' }}>
          There are not properties at the moment. Please use Add Property button
          to add one.
        </h3>
      )}

      {properties.length > 0 && (
        <table className='table table-striped mt-5'>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>ZipCode</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{property['title']}</td>
                  <td>{property['address']}</td>
                  <td>{property['city']}</td>
                  <td>{property['state']}</td>
                  <td>{property['zipCode']}</td>
                  <td>
                    <button
                      onClick={() => {
                        onDelete(index)//ondelte fun call using index we passed so we
                        //wrote in this manner
                      }}
                      className='btn btn-danger bt-sm me-2'
                    >
                      delete
                    </button>
                    <button
                      onClick={() => {
                        onDetails(index)
                      }}
                      className='btn btn-primary bt-sm'
                    >
                      details
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Properties
