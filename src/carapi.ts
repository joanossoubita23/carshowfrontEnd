import axios, { AxiosRequestConfig } from "axios";
import { CarResponse, car, carEntry } from "./types";


const getAxiosConfig = ():AxiosRequestConfig => {
    const token = sessionStorage.getItem('jwts')?.substring(6);
    return {
        headers:{
            'Content-Type' : 'application/json',
            'Authorization' : token
        }
    }
}




export const getCars = async(): Promise<CarResponse[]> =>{
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/cars`, getAxiosConfig())
  return response.data;
}

export const deleteCar =async (id:number):Promise<CarResponse> => {
  
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/delete/${id}`,)
        return response.data;
  
}
export const addCar=async (car:car):Promise<CarResponse>=>{
    const response=await axios.post(`${import.meta.env.VITE_API_URL}/add`,car,{
        headers:{
            'Content-Type':'application/json'
        }
    })
    return response.data;

}

export const updateCar=async(carEntry:carEntry)=>{
    const response= await axios.put(`${import.meta.env.VITE_API_URL}/${carEntry.url}`,carEntry.car,{
        headers:{
            'Content-Type':'application/json'
        }})
        return response.data;
}