import { ChangeEvent } from "react"

 export type CarResponse ={
    make :string,
    model:string,
    color:string,
  registerNumber:string,
    year:number,
    price:number,
}
export type DialogFromProps={
  car :CarResponse
  handleChange:(event:ChangeEvent<HTMLInputElement>)=>void
}
export type Car={
  id:number
  make :string,
  model:string,
  color:string,
registerNumber:string,
  year:number,
  price:number,

}
export type carEntry={
  car:CarResponse;
  url:string;
}
export type User={
  username:string,
  password:string,
}