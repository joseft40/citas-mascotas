import { useState, useEffect } from 'react';

import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPaciente from './components/ListadoPaciente'

function App() {
  const [pets, setPacientes] = useState([])
  const [pet, setPet] = useState([])

  useEffect(() => {
    const getPets = () => {
      const values = JSON.parse(localStorage.getItem("pacientes")) ?? []
      setPacientes(values)
    }
    getPets()
  }, [])

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pets))
  }, [pets]) 

  const deletePet = id => {
    const petsUpdate = pets.filter(values => values.id !== id)
    setPacientes(petsUpdate)
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario
          pets={pets}
          setPacientes={setPacientes}
          pet={pet}
          setPet={setPet}
        />
        <ListadoPaciente
          pets={pets}
          setPet={setPet}
          deletePet={deletePet}
        />
      </div>
    </div>
  )
}

export default App
