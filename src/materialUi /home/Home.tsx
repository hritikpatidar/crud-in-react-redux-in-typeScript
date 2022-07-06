import {Container, Stack } from '@mui/material'
import React from 'react'
import AutoCompleteValue from '../autoComplete/AutoCompleteValue'
import Calander from "../calander/Calander"
import CustomizedList from '../customizedList/CustomizedList'
import LikeButton from '../likeButton/LikeButton'
import NestedList from '../NestedList/NestedList'
import StarRating from '../starRating/StarRating'
import BasicTable from '../table/BasicTable'
import CircularProgress from '@mui/material/CircularProgress';
import ReactSlider from '../../slider/ReactSlider'

const Home =()=> {
  
    return (
        <>
            <Container  maxWidth="xl" className="mt-5">
           
                <ReactSlider />
                <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                    <CircularProgress color="secondary" />
                    <CircularProgress color="success" />
                    <CircularProgress color="inherit" />
                </Stack>
                <Calander />
                <AutoCompleteValue />
                <LikeButton />
                <StarRating />
                <NestedList />
                <CustomizedList />
                <BasicTable />
            </Container> 

        </>
    )
}

export default Home
