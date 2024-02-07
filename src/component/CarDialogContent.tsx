import { DialogContent, TextField } from "@mui/material"
import { DialogFromProps } from "../types"


const CarDialogContent = ({car,handleChange}:DialogFromProps) => {
  return (
   <DialogContent>
    <TextField value={car.make} name="make" placeholder="make" variant="filled" onChange={handleChange}/><br/>
   
    <TextField value={car.model} name="model" placeholder="model" variant="filled" onChange={handleChange}/><br/>
    
    <TextField value={car.color} name="color" placeholder="color" variant="filled" onChange={handleChange}/><br/>
   
    <TextField value={car.registerNumber} name="registerNumber" placeholder="RegistNumber" variant="filled" onChange={handleChange}/><br/>
   
    <TextField value={car.year} name="year" placeholder="year" variant="filled" onChange={handleChange}/><br/>
  
    <TextField value={car.price} name="price" placeholder="price" variant="filled" onChange={handleChange}/><br/>
   </DialogContent>
  )
}

export default CarDialogContent