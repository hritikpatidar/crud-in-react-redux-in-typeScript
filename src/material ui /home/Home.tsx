import { Container } from '@mui/material'
import React from 'react'
import Calander from "../calander/Calander"

function Home() {
    return (
        <>
            <Container className="mt-5">
                <Calander />
            </Container>
          
        </>
    )
}

export default Home
