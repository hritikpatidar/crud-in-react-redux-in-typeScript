import './ChangeProfile.css'
import {  useDispatch, useSelector } from 'react-redux'
import ProfileUpdate from '../../Redux/middilware/ProfileUpdate'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';

function ChangeProfile() {
    //1. state/hook
    const state = useSelector((state: any) => state?.login?.userData)
    const dispatch = useDispatch<any>()
    // const navigate = useNavigate()

    let userImage:any = localStorage.getItem("userData");
    let userData = JSON.parse(userImage);

    //2. function defination
    let handalChange=(e:any)=>{
        let newImage= e.target.files[0]
        state.profilePic = newImage
        
        let token = localStorage.getItem("token")

        dispatch(ProfileUpdate(state,token))
        
       
    }
    
    
    function RedBar() {
        return (
          <Box
            sx={{
              height: 20,
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? 'rgba(255, 0, 0, 0.1)'
                  : 'rgb(255 132 132 / 25%)',
            }}
          />
        );
      }
    // console.log("state",image)

    //3. return statement / jsx
    return (
        <>
            <section>
                <label>
                    <img src={userData.profilePic} />
                    <input type="file" name="image" onChange={handalChange} />
                </label>

            </section>
            <Container maxWidth="md">
                <Box
                    sx={{
                        alignItems:"center",
                        textAlign:"center",
                        display: 'flex',
                        flexDirection: 'column',
                        '& .MuiTextField-root': { width: '40ch' },
                        
                    }}
                    >
                   
                    <TextField label={'userName'} id="margin-none" />
                   
                    <TextField label={'Email'} id="margin-dense" margin="dense" />
                   
                </Box>
            </Container>
        </>
    )
}

export default ChangeProfile
