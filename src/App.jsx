import { useState } from 'react'
import Resident from './ResidentialProject/Resident'
import Commercial from './ResidentialProject/Commercial'
import Residential_Commercial from './ResidentialProject/Residential_Commercial'
import School_Colleges from './ResidentialProject/Schools_Colleges'
import Religious_Buildings from './ResidentialProject/ReligiousBuildings'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Resident />
      <Commercial />
      <Residential_Commercial />
      <School_Colleges />
      <Religious_Buildings />
    </>
  )
}

export default App
