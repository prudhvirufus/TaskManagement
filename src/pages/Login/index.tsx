import LockOutlined from "@mui/icons-material/LockOutlined"
import { Avatar, Button, Checkbox, CssBaseline, FormControlLabel, Link, Paper, TextField, ThemeProvider, Typography, createTheme } from "@mui/material"
import {Grid,Box} from "@mui/material"

import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";






// const userFixtures = [
//   {
//     name: "admin",
//     email: "admin@gmail.com",
//     role: "admin",
//     password: "123456",
//   },
//   {
//     name: "manager",
//     role: "manager@gmail.com",
//     password: "123456",
//   },
//   {
//     name: "employee",
//     role: "employee@gmail.com",
//     password: "123456",
//   },
// ];

const defaultTheme = createTheme()

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUserNow = (user: string) => {
    if (user === "admin") {
      dispatch(
        loginUser({
          name: "ADMIN",
          isAuthenticated: true,
        })
      );
      navigate("admindashboard");
    } else if (user === "manager") {
      dispatch(
        loginUser({
          name: "MANAGER",
          isAuthenticated: true,
        })
      );
      navigate("managerdashboard");
    } else if (user === "employee") {
      navigate("employeedashboard");
      dispatch(
        loginUser({
          name: "EMPLOYEE",
          isAuthenticated: true,
        })
      );
    }
  };

  return (
    <>

<ThemeProvider theme={defaultTheme}>
    <Grid container component={'main'} sx={{height:'100vh',width:'100vw'}}>
      <CssBaseline/>
      <Grid item xs={false} sm={4} md={6} sx={{backgroundImage:'url(https://source.unsplash.com/random?wallpapers)',backgroundPosition:'center' , backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></Grid>
       <Grid item component={Paper} elevation={6} square xs={12} sm={8} md={6}>
        <Box container sx={{display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <Avatar sx={{marginTop:4,marginBottom:1,backgroundColor:"orange"}}>
            <LockOutlined/>
          </Avatar>
          <Typography sx={{marginBottom:4}} component={'h1'} variant="h5">Login</Typography>
          <Box component={'form'}   sx={{display:'flex', flexDirection:'column',justifyContent:'center',width:"25vw"}} >
            <TextField name="user email"  sx={{marginBottom:2}} id="email" autoFocus required label="email" autoComplete="email" />
            <TextField name="password" sx={{marginBottom:2}} id="password" type="password" label="password" autoFocus  required/>
            <FormControlLabel control={<Checkbox value={'remember'} color="primary"/>} label="Remember Me?" />
            <Button type="submit"  onClick={ () => loginUserNow("admin")}   sx={{ mt: 3, mb: 2 }} variant="contained">Login</Button>
            
            <Grid container justifyContent={'flex-end'}>
             <Grid item>
               <Link href="#" variant="body2" >forgot password?</Link>
             </Grid>
            </Grid>
            <Grid container justifyContent={'flex-start'}>
             <Grid item>
               <Link href="#" variant="body2" >Don't have an account? Sign Up</Link>
             </Grid>
            </Grid>
          
          </Box>

        </Box>

       </Grid>



    </Grid>


   </ThemeProvider>
        

      
    </>


   )
};
<Button   variant="contained">Login</Button>      
export default Login;
