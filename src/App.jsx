import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import CardContainer from './components/CardContainer'

function App() {

  return (
    <div className="h-full flex flex-col">
      <Header></Header>
      <CardContainer />
    </div>
  )
}

export default App
