import Greeting from "./Greeting"
import Info from "./Info"

const App = () => {
  return (
    <div>App
      <Greeting name="John" age={24}/>
      <Info />
    </div>
  )
}

export default App