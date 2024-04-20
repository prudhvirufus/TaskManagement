import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Grid, Paper,Box } from "@mui/material";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUserNow = () => {
    dispatch(loginUser(true));
    navigate("/dashboard");
  };

  return (
    <div class="bg-[#80BCBD] flex flex-row justify-center  w-full  p-10">

     <Container bgcolor={'#80BCBD'} width={'100vw'} height={'100vh'}>
        <Paper elevation={12} width={'80vw'}>
          <Grid container bgcolor={'#AAD9BB'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'80vh'} width={'80vw'} spacing={2}  justifyItems={'center'} >
          <Box
             component="img"
              sx={{
              height: '80vh',
              width: '45vw',
        
           }}
             alt="The house from the offer."
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
           />
          <Grid item >
            <TextField  id="outlined-basic" label="Enter Email" variant="outlined" />
          </Grid>
          <Grid item >
          <TextField id="outlined-basic" label="Enter password" type='password' variant="outlined" />
          </Grid>
          <Grid item >
          <Button  onClick={loginUserNow} variant="contained">Login</Button>
          </Grid>
           </Grid>
           </Paper>

      
        </Container>    
    </div>


   )
};
      
export default Login;
