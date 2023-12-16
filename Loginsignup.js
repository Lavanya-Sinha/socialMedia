import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { AppRegistrationOutlined } from '@mui/icons-material';

export default function Loginsignup() {
  const [isSignUp,setIsSignUp] = React.useState(false);
  const[input,setInput] = React.useState({
    name: '',
    email: '',
    age: '', 
    username: '',
    password: ''
  });

    const handleChange = (event)=>{
      const { name, value } = event.target;
         setInput((prevState)=> ({
          ...prevState ,
          [name]: event.target.type === 'number' ? parseInt(value) || '' : value
         }))
    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(input)
    }

    const resetState = ()=>{
      setIsSignUp(!isSignUp);
      setInput({ name: '',
      email: '',
      age: '', 
      username: '',
      password: ''})
    }
     return(

      <div className="main_container">
        <div className="box">

       <div className="content_container">
          <h1>Connect</h1>
          <p>Hey Buddy! Ready To Make Some New Friends?</p>
        </div>

      <div className='container'>
        <form onSubmit={handleSubmit}>

  <Typography variant='h3' sx={{ color: 'gray' }} padding={3} textAlign={'center'}>
    {isSignUp ? "Signup" : "Login"}
  </Typography>

  {isSignUp && (
    <>
      <TextField
        margin='normal'
        type={"text"}
        variant='outlined'
        placeholder='Name'
        name="name"
        value={input.name}
        onChange={handleChange}
      />
      <TextField
        margin='normal'
        type={"email"}
        variant='outlined'
        placeholder='Email'
        name="email"
        value={input.email}
        onChange={handleChange}
      />
      <TextField
        margin='normal'
        type={"number"}
        variant='outlined'
        placeholder='Age'
        name="age"
        value={input.age}
        onChange={handleChange}
        inputProps={{ min: 0 }}
      />
    </>
  )}

  <TextField
    margin='normal'
    type={"text"}
    variant='outlined'
    placeholder='Username'
    name="username"
    value={input.username}
    onChange={handleChange}
  />
  <TextField
    margin='normal'
    type={"password"}
    variant='outlined'
    placeholder='Password'
    name="password"
    value={input.password}
    onChange={handleChange}
  />
  <Button variant='contained' sx={{ marginTop: 3, borderRadius: 3 }} type='submit' endIcon = {isSignUp? <AppRegistrationOutlined/> : <LoginOutlinedIcon/>}>
    {isSignUp ? "Signup" : "Login"} 
  </Button>
  <Button onClick={resetState} sx={{ marginTop: 3, borderRadius: 3 }} endIcon = {isSignUp? <LoginOutlinedIcon/>:  <AppRegistrationOutlined/> }>
    Change To {isSignUp ? "Login" : "SignUp"}
  </Button>
      </form>
</div>
      </div>
        </div>

     )
}
