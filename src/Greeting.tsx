type GreetProps={
    name:string,
    age:number
}

const Greeting = ({name,age}:GreetProps) => {
    
  return (
    <>
    <h1>Hello you name is {name} you are {age} years old</h1>
    </>
  )
}

export default Greeting