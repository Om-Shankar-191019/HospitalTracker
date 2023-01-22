import React,{ useState } from 'react'
import styled from 'styled-components'


const InputField = ({label,placeholder,type}) => {
    return(
        <Inputs>
            <p>{label}</p>
            <input type={type} placeholder={placeholder} /> 
        </Inputs>
    )
}
const Login = () => {
    const [registerHere, setRegisterHere] = useState(true);
    
    const checkBox = (label) => {
        return(
            <Check>
                <input type="checkbox" id={label} name="scales" />
                <label htmlFor={label}>{label}</label>
            </Check>
        )
    }
   
  return (
    <Container>
        
        <Right>
            <LoginWrapper>
                <LoginContent>
                    <SignInwithgoogle> 
                        <button>
                            <img src='https://cdn-icons-png.flaticon.com/128/300/300221.png' />
                            Sign In with Google
                        </button>
                    </SignInwithgoogle>
                    
                    {!registerHere ?
                        <>
                            <InputField label="Eamil" placeholder="Enter Email ID" type="text"/>
                            <InputField label="Password" placeholder="Enter Password" type="password"/>
                            <CheckContainerOne>
                                {checkBox("Remember Me")}  
                            </CheckContainerOne>
                        </>
                     : 
                        <>
                            <InputField label="Username" placeholder="Enter username" type="text"/> 
                            <InputField label="Eamil" placeholder="Enter Email ID" type="text"/>
                            <InputField label="Password" placeholder="Enter Password" type="password"/>
                        </>
                    }
                   
                    <Button>
                        <button type='submit'>{!registerHere ? 'Login' : 'Sign Up'}</button>
                    </Button>
                    <Register>
                        <p>{!registerHere ? `Don't have an account?` : `Already have an account?`}</p>
                        <a href='#'>{!registerHere ? 'Register Here' : 'Login Here'}</a>
                    </Register>
                </LoginContent>
            </LoginWrapper>
        </Right>
    </Container>
  )
}

export default Login

const Container = styled.div`
    max-width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    font-family:arial;
    background-image:url('https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg');

`
const Right = styled.div`
    flex:0.55;
    display: flex;
    justify-content:center;
    align-items:center;
    

    @media (max-width: 624px) {
    flex:1;
  }
`

const LoginWrapper = styled.div`
    border-radius:5px;
    box-shadow:0px 0px 20px #cfd1d4;
    height:90%;
    width:90%;
    display: flex;
    justify-content:center;
    align-items:center;  
    background-color:white;
`
const LoginContent = styled.div`
    width:80%;
`
const CheckContainerOne = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-top:8px;
    color:gray;
    margin-top:5px;
    font-size:14px;
    a{
        color:orange;
        text-decoration:none;
    }
`
const Inputs = styled.div`
   
    display:flex;
    flex-direction:column;
    margin-bottom:19px;
    
    p{
        font-size:15px;
        font-weight:600;
        margin-bottom:10px;
    }
    input {
        font-size:16px;
        padding:13px;
        outline:none;
        color:black;
        border:1px solid gray;
        width:90%;
        border-radius:4px;
    }
`

const Check = styled.div`
    input{
        margin-left:0;
    }
`
const Button = styled.div`
    display:flex;
    justify-content:center;
    margin-top:24px;
    margin-bottom:12px;
    width:100%;

    button{
        width:70%;
        padding:12px;
        color:white;
        background-color:#1575a7;
        border:none;
        border-radius:4px;
        cursor:pointer;
        font-weight:bold;
    }
`
const SignInwithgoogle = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:32px;
    width:100%;

    img{
        object-fit:cover;
        height:20px;
        margin-right:10px;
    }

    button{
        display:flex;
        justify-content:center;
        align-items:center;
        width:70%;
        padding:14px;
        color:black;
        background-color:white;
        border:1px solid #1575a7;
        border-radius:4px;
        cursor:pointer;
        font-weight:bold;
    }
`

const Register = styled.div`
    display:flex;
    align-items:baseline;
    justify-content:center;
    font-size:14px;
    a{
        color:orange;
        margin-left:2px;
        font-weight:700;
    }
`