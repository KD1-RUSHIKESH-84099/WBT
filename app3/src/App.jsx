
import { Route, Routes } from 'react-router-dom'

import Login from './screens/Login'
import Register from './screens/Register'
import Home from './screens/Home'
import Users from './screens/Users'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProperty
 from './screens/AddProperty';
 import Properties from './screens/Properties';
import PropertyDetails from './screens/PropertyDetails'
function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='' element={<Login />}/>
        <Route path='login' element={<Login />} /> 
        <Route path='register' element={<Register />} />
        
       <Route path='home' element={<Home />} />

        <Route path='properties' element={<Properties/>}/>
        <Route path='users' element={<Users/>}/>
        
        <Route path='Addproperty' element={<AddProperty/>}/>
        <Route path='propertydeatils' element={<PropertyDetails/>}/> 
      </Routes>
      <ToastContainer />

     
    </div>
  )}
  export default App