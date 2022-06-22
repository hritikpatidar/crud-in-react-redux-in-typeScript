import React from 'react'
import { useSelector } from 'react-redux'

function ChangeProfile() {
    const state = useSelector((state:any) => state?.changeuserProfile.userData)

    console.log(state)
    return (
       <>
       <input type="file"  />
        <img className="rounded-circle" src={state.profilePic}/>
       </>
    )
}

export default ChangeProfile
