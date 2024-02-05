import { Dialog, DialogTitle } from "@mui/material";
import { ChangeEvent, useState } from "react"
import CarDialogContent from "./CarDialogContent";


const AddCar = () => {
    const [car,setCar]=useState({
        make:'',
        model:'',
        color:'',
        RegistNumber:'',
        year:0,
        price:''

    })
    const[open,setOpen]=useState(false);

    const handleOpen =()=>{
        setOpen(true)
    }
    const handleClose =()=>{
        setOpen(false)
    }
    const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
        setCar({...car,[event.target.name]:event.target.value})
    }

  return (
    <>
    <Dialog open={open} onClose={handleClose}>
<DialogTitle> New Car</DialogTitle>
<CarDialogContent car={car} handleChange={handleChange}/>
    </Dialog>
    </>
  )
}

export default AddCar