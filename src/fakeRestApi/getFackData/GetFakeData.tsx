import React,{ useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import isGetFakeData from '../../Redux/middilware/isGetFakeData'
import './GetFakeData.css'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, CircularProgress, Container,Fade,Modal,TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import ModalPopap from '../modal/ModalPopap';
  

let GetFakeData = () => {
    //1. state/hook 
    const state = useSelector((state: any) => state?.fakeData?.userData);
    const [searchData, setSearchData] = useState<any>(state)
    const [inputValue, setInputValue] = useState< any >('');
    const dispatch = useDispatch<any>();
    const [open, setOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading]= useState<boolean>(true);
    const handalOpen = () => setOpen(true);
    const handalClose = () => setOpen(false);
    useEffect(() => {
        getFakeData()
        
    }, [])

    //2. function defination
    let getFakeData = async () => {
        await dispatch(isGetFakeData())
        setIsLoading(false);

    }
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    let handalSearch = (e: any) => {
        // console.log(e.target.value)  
        const {value}=e.target 
        
        setInputValue(value)
        let state1 =state.filter((cv: any) => {
            
            if (value === '') {
                return cv;
            } else {
                return cv.title.toLowerCase().includes(value);
                
            }
        });
        setSearchData(state1)
        
    }
    
    // console.log(searchData)

    //2. return statement /jsx
    return (
        <Container maxWidth="lg">
            <Fade
                in={isLoading}
            >
                <CircularProgress />
            </Fade>
            
            <TextField
                className="mt-5"
                value={inputValue}
                id="filled-search"
                label="Search field"
                type="search"
                variant="outlined"
                onChange={handalSearch}
            />
            <Button className="mt-5  p-3 ms-3"  variant="outlined" onClick={handalOpen}>Open modal</Button>
            {
                open &&
                < ModalPopap open={open} close={handalClose}/>
            }
            <TableContainer component={Paper} className="mt-2">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow className="">
                            <StyledTableCell>id</StyledTableCell>
                            <StyledTableCell align="left">userId</StyledTableCell>
                            <StyledTableCell align="left">tittle</StyledTableCell>
                            <StyledTableCell align="left">completed</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                                searchData.slice(0, 10).map((cv: any, index: number) => (
                                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                    <TableCell component="th" scope="row">{cv.id}</TableCell>
                                    <TableCell align="left">{cv.userId}</TableCell>
                                    <TableCell align="left">{cv.title}</TableCell>
                                    <TableCell align="left">{cv.completed.toString()}</TableCell>
                                </TableRow>
                            ))
                            
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default GetFakeData
