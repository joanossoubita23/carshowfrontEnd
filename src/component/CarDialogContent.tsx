import { DialogContent, TextField } from "@mui/material"
import { DialogFromProps } from "../types"


const CarDialogContent = ({car,handleChange}:DialogFromProps) => {
  return (
   <DialogContent>
    <TextField value={car.make} placeholder="Make" variant="filled" onChange={handleChange}/>
   
    <TextField value={car.model} placeholder="Model" variant="filled" onChange={handleChange}/>
    
    <TextField value={car.color} placeholder="Color" variant="filled" onChange={handleChange}/>
   
    <TextField value={car.registerNumber} placeholder="RegistNumber" variant="filled" onChange={handleChange}/>
   
    <TextField value={car.year} placeholder="year" variant="filled" onChange={handleChange}/>
  
    <TextField value={car.price} placeholder="Price" variant="filled" onChange={handleChange}/>
   </DialogContent>
  )
}

export default CarDialogContent