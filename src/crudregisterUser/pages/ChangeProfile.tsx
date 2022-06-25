import { useState } from 'react'
import './ChangeProfile.css'
import { useDispatch, useSelector } from 'react-redux'
import ProfileUpdate from '../../Redux/middilware/ProfileUpdate'
import { useNavigate } from 'react-router-dom'
import Header from '../../component/Header'

function ChangeProfile() {
    //1. state/hook
    const state = useSelector((state: any) => state?.changeuserProfile.userData)
    const [image, setImage] = useState<any>(state)
    const dispatch = useDispatch<any>()
    const navigate = useNavigate()


    //2. function defination
    let handalChange=()=>{
        
    }
  
    // console.log("state",newData)
    //3. return statement / jsx
    return (
        <>
            <Header />
            <section>
                <label>
                    <img src={state.profilePic} />
                    <input type="file" name="image" onChange={handalChange} />
                </label>

            </section>

        </>
    )
}

export default ChangeProfile
