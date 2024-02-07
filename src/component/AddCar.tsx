import {  Box, Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { ChangeEvent, useState } from "react"
import CarDialogContent from "./CarDialogContent";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addCar } from "../carapi";


const AddCar = () => {
    const [car,setCar]=useState<car>({
        id:0,
        make:'',
        model:'',
        color:'',
        RegistNumber:'',
        year:0,
        price:''

    })
    const[open,setOpen]=useState(false);
    const queryClient=useQueryClient();
    
    const {mutate}= useMutation(addCar,{
        onSuccess:()=>{
            queryClient.invalidateQueries(['cars'])
        },
        onError:(err)=>{
            console.log(err)
        }
    })

    const handleOpen =()=>{
        setOpen(true)
    }
    const handleClose =()=>{
        setOpen(false)
    }
    const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
        setCar({...car,[event.target.name]:event.target.value})
    }
    const handleSave=()=>{
        mutate(car) 
        setCar({
            id:0,
            make:'',
            model:'',
            color:'',
            RegistNumber:'',
            year:0,
            price:''
    
        })
    

    }

  return (
    <>
    <Dialog open={open} onClose={handleClose}>
<DialogTitle> New Car</DialogTitle>
<CarDialogContent car={car} handleChange={handleChange}/>
<DialogActions>
    <Button color="error" variant="contained" onClick={handleClose}>Cancel</Button>
    <Button color="primary" variant="contained" onClick={handleSave}>Save</Button>
</DialogActions>
    </Dialog>
    <Box 
    display='flex'
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
    padding='20px'

     >
    <Button variant="contained" onClick={handleOpen}>Add Car</Button>
     </Box>
   
    </>
    
    
  )
}

export default AddCar