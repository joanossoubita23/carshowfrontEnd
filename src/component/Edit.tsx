import { ChangeEvent, useState } from "react"
import { Car, CarResponse, carEntry } from "../types"
import { Button } from "@mui/base"
import { Dialog, DialogActions, DialogTitle } from "@mui/material"
import CarDialogContent from "./CarDialogContent"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateCar } from "../carapi"


type Formprops={
  cardata:CarResponse
}

const Edit = ({cardata}:Formprops) => {


  const [car,setCar]=useState<Car>({
    id:0,
    make:'',
    model:'',
    color:'',
    registerNumber:'',
    year:0,
    price:0

  })
  const [open,setOpen]=useState(false)


  const handleChange=(event:ChangeEvent<HTMLInputElement>)=> {
    setCar({...car,[event.target.name]:event.target.value})
  }
  const handleClose=()=>
  setOpen(false)
 

  const handleOpen=()=>{
  setCar({
    id:0,
    make:cardata.make,
    model:cardata.model,
    color:cardata.color,
   registerNumber:cardata.registerNumber,
    year:cardata.year,
    price:cardata.price

  })
setOpen(true)
}
const queryClient=useQueryClient();

const {mutate}= useMutation(updateCar,{
  onSuccess:()=>{
      queryClient.invalidateQueries(['cars']);
  },
  onError:(err)=>{
      console.log(err)
  }
})




const handleSave=()=>{
  const url=cardata.id;
  const carEntry:carEntry={car,url}
  mutate(carEntry)
  setCar({
    
      id:0,
      make:'',
      model:'',
      color:'',
      registerNumber:'',
      year:0,
      price:0
  
    })
    setOpen(false)
  
}



  return (
    <>
    <Button onClick={handleOpen}>Edit</Button>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Car</DialogTitle>
      <CarDialogContent  car={car} handleChange={handleChange} />
      <DialogActions>
      <Button color="error" variant="contained" onClick={handleClose}>Cancel</Button>
    <Button color="primary" variant="contained" onClick={handleSave}>Save</Button>
    </DialogActions>

  
    </Dialog>
    </>
  )
}

export default Edit