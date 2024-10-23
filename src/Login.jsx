import { Avatar, Button, Checkbox, FormControlLabel, Grid, IconButton, InputAdornment, Link, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HttpsIcon from '@mui/icons-material/Https';
const Login = () => {
    const paperStyle={
        padding:40,

        height:'70vh',
        width: 280,
        margin: '20px auto'
    }
    const avatarStyle={
        backgroundColor: "#00FFFF"
    }
    const btStyle={margin: "8px auto"}
  return (
    <div>
        <Grid item>
                <Paper elevation={10} style={paperStyle}>
                    <Grid container 
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    pb={5}>
                        <Avatar style={avatarStyle}><AccountCircleIcon/></Avatar>
                        <Typography variant='h6'>Sign in</Typography> 
                    </Grid>
                    <TextField 
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <IconButton>
                            <PersonOutlineIcon />
                            </IconButton>
                        </InputAdornment>
                        ),
                        }}
                    sx={{pb:{xs:"8px"}}} 
                    variant='standard' 
                    placeholder='UserName' 
                    fullWidth required/>
                    <TextField  InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <IconButton>
                            <HttpsIcon />
                            </IconButton>
                        </InputAdornment>
                        ),
                        }}sx={{pb:{xs:"8px"}}} 
                        variant='standard' 
                        placeholder='Password' 
                        type='password'fullWidth 
                        required/>
                    <FormControlLabel control={<Checkbox />} label="Remember me " />
                    <Button style={btStyle} type='submit' color='primary' variant='contained' fullWidth>Sign In</Button>
                    <Typography> Do you have an account ? <Link>Sign Up
                    </Link></Typography>
                </Paper>
        </Grid>  
    </div>
  )
}

export default Login