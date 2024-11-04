import viteLogo from '/vite.svg'

import './App.css'
import Header from './components/Header'
import CardContainer from './components/CardContainer'

import { GlobalProvider } from './context/GlobalState'

function App() {

  return (
    <GlobalProvider>
      <div className="h-full flex flex-col">
        <Header></Header>
        <CardContainer />
      </div>
    </GlobalProvider>
  )
}

export default App
