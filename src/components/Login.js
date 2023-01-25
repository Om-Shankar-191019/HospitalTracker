import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import './Login.css'
const Login = () => {
    const {register, handleSubmit, formState: { errors },watch} = useForm();
    const [notRegistered,setNotRegistered] = useState(false);
    const submitForm = (data) =>{
        console.log(data);
    }

  return (
    <div className='login-container'>
        <div className='login-form-wrapper'>
            <div className='btn-container' >
                <button className='btns' style={{marginTop:"40px",marginBottom:"12px"}}>
                    <img src='https://cdn-icons-png.flaticon.com/128/300/300221.png' />
                    Sign In with Google
                </button>
            </div>
            <form onSubmit={handleSubmit((data) => submitForm(data))}>
                
                {notRegistered ? 
                    <div className='form-column'>
                        <p className='form-label'>Username</p>
                        <input className='input' {...register('username',{required:"username is required",
                        minLength:{value:3,message:"username must be more than 3 character"},
                        maxLength:{value:16,message:"username can not exceed more than 16 character"},
                        })}
                        type="text" placeholder="Enter your Username" /> 
                        {errors.username && <p className='form-error'>{errors.username.message}</p>}
                        
                    </div>
                    : null
                }
                <div className='form-column'>
                    <p className='form-label'>Email</p>
                    <input className='input' {...register('email',{required:"email is required",
                        pattern:{value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message: "invalid email address"},
                        })} 
                        type="text" placeholder="Enter your email" /> 
                    {errors.email && <p className='form-error'>{errors.email.message}</p>}
                    
                </div>
                <div className='form-column'>
                    <p className='form-label'>Password</p>
                    <input className='input' {...register('password',{ required:"password is required.",
                        minLength:{value:4,message:"password must be more than 4 character"},
                        maxLength:{value:15,message:"password can not exceed more than 15 character"},
                        validate: (value) => {
                            return (
                                [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
                                pattern.test(value)
                                ) || "must include lower, upper, number, and special chars"
                            );
                            },
                        })} 
                        type="password" placeholder="Enter your password" /> 
                        {errors.password && <p className='form-error'>{errors.password.message}</p>}
                </div>
                {notRegistered ? 
                    <div className='form-column'>
                        <p className='form-label'>Confirm Password</p>
                        <input className='input' {...register('confirm_password',{ required:"confirm password is required.",
                        
                        validate: (val) => {
                                if (watch('password') != val) {
                                return "Your passwords do no match";
                                }
                            },
                        })} 
                        type="password" placeholder="Confirm your password" /> 
                        {errors.confirm_password && <p className='form-error'>{errors.confirm_password.message}</p>}
                    </div>
                    : null
                }
                <div className='btn-container'>
                    <button className='btns' type='submit' style={{marginTop:"24px",marginBottom:"10px" , backgroundColor:"blueviolet",color:'white'}}>
                        Submit
                    </button>
                </div>
                
            </form>
            {notRegistered ?
                <p className='asking-label'>Already have an account? <button onClick={()=> setNotRegistered(false)} className='asking-button'>Login Here</button></p>
                :
                <p className='asking-label'>Don't have an account? <button onClick={()=> setNotRegistered(true)} className='asking-button'>Register Here</button></p>
            }
        </div>
    </div>
  )
}

export default Login