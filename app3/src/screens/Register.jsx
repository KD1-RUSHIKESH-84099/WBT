// import { useState } from "react"
// //import { Link } from "react-router-dom"
// import { Link } from "react-router-dom"
// import { toast } from "react-toastify"
// import { useNavigate } from "react-router-dom"
// import { register } from "../services/admin"
// function Register()
// {

//   const[Firstname,setFirstname]=useState('')
//   const[lastname,setlastname]=useState('')
//   const[email,setEmail]=useState('')
//   const[password,setPassword]=useState('')
//   const[confirmpassword,setconfirmpassword]=useState('')

// //get the navigation hook 
//    const navigate=useNavigate() //function reference which is return by use navigate function
//   const onregister=async()=>{

//     if(Firstname.length==0)
//       toast.error("name is mandatory");

//     else if(lastname.length==0)
//     //conditonal rendering after true it will renders the red
//   //message while giving message at every name
//       toast.error("lastname is mandatory");
//     else
//     {
//       const result=await register(Firstname,lastname,email,password) 
//       if(result.status=='success')
//        {
        
//       toast.success("successfully registered")
    
//            navigate('/Login')
//         }
//         else{
//           toast.error(result.error)
//         }

      

//     }
   
//   }
 
//   return (
//     <div>
//       <h2 className='page-header'>Register</h2>
//       <div className='row'>
//         <div className='col'></div>
//         <div className='col'>
//           <div className='form'>
//             <div className='mb-3'>
//               <label htmlFor=''>Firstname</label>
//               <input
//               onChange={(e)=> setFirstname(e.target.value)}
               
//                 type='Text'
//                 className='form-control'
//               />
             
//             </div>
//             <div className='mb-3'>
//               <label htmlFor=''>lastname</label>
//               <input
//                     onChange={(e)=> setlastname(e.target.value)}
               
//                 type='text'
//                 className='form-control'
//               />
              
//             </div>
//             <div className='mb-3'>
//               <label htmlFor=''>email</label>
//               <input
//                     onChange={(e)=> setEmail(e.target.value)}
               
//                 type='email'
//                 className='form-control'
//               />
              
//             </div>
//             <div className='mb-3'>
//               <label htmlFor=''>password</label>
//               <input
//                     onChange={(e)=> setPassword(e.target.value)}
               
//                 type='password'
//                 className='form-control'
//               />
              
//             </div>
//             <div className='mb-3'>
//               <label htmlFor=''>confirmedpassword</label>
//               <input
//                     onChange={(e)=> setconfirmpassword(e.target.value)}
               
//                 type='password'
//                 className='form-control'
//               />
              
//             </div>
//             <div className='mb-3'></div>
//             <div>you already have an account ? <Link to='/login'>Login here</Link></div>
//              <button onClick ={onregister} className="btn btn-success mt-2">Register</button>
//            </div>
//         </div>
//         <div className='col'></div>
//       </div>
//     </div>
//   )
// }

    
// export default Register






























import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register } from '../services/admin'

function Register() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // get the navigation hook
  const navigate = useNavigate()

  const onRegister = async () => {
    if (firstName.length == 0) {
      toast.error('please enter first name')
    } else if (lastName.length == 0) {
      toast.error('please enter last name')
    } else if (email.length == 0) {
      toast.error('please enter email')
    } else if (password.length == 0) {
      toast.error('please enter password')
    } else if (confirmPassword.length == 0) {
      toast.error('please confirm the password')
    } else if (password != confirmPassword) {
      toast.error('password does not match')
    } else {
      // call post /admin/register api
      const result = await register(firstName, lastName, email, password)
      if (result['status'] == 'success') {
        toast.success('Successfully registered a new user')
        navigate('/login')
      } else {
        toast.error(result['error'])
      }
    }
  }

  return (
    <div>
      <h2 className='page-header'>Register</h2>
      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>First Name</label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Last Name</label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Confirm Password</label>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                type='password'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <div>
                Already have an account ? <Link to='/login'>Login here</Link>
              </div>
              <button onClick={onRegister} className='btn btn-success mt-2'>
                Register
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </div>
  )
}

export default Register

 