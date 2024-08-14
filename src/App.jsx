import Header from "./components/header"
import Home from "./components/home"
import Module from "./components/modules"
import Footer from "./components/footer"
import Data from './components/data'

function App() {

  const displayData = Data.map((module) =>{
    return(
      <Module
    
    key={module.id}
    {...module}
    
    />
    )
  })
  

  return (
    <div>
      <Header/>
      <Home/>
      {displayData}
      <Footer/>
    </div>
  )
}

export default App
