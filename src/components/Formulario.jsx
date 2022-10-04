import {useState, useEffect} from 'react'
import Error from './Error'

const Formulario = ({pets, setPacientes, pet, setPet}) => {
  const [name, setPetName] = useState('')
  const [onwer, setPetOnwer] = useState('')
  const [email, setPetOnwerEmail] = useState('')
  const [dischargedate, setPetDischargeDate] = useState('')
  const [symptoms, setPetSymptoms] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {//se ha de ejecutar cuando el pet sea modificado
    if (Object.keys(pet).length > 0) {
      setPetName(pet.name)
      setPetOnwer(pet.onwer)
      setPetOnwerEmail(pet.email)
      setPetDischargeDate(pet.dischargedate)
      setPetSymptoms(pet.symptoms)
    }
  }, [pet])//se paso mis dependencias vacias indica que se ha de ejecutar una sola vez

  const createId = () => {
    const ramdon = Math.random().toString(36).substring(2)
    const date = Date.now().toString(36)

    return ramdon + date
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if ([name, onwer, email, dischargedate, symptoms].includes('')) {
      setError(true)
      return
    }
    setError(false)

    const objPets = {
      name,
      onwer,
      email,
      dischargedate,
      symptoms
    }

    if (pet.id) {
      objPets.id = pet.id
      const petsUpdate = pets.map(petState => petState.id === pet.id ? objPets : petState)
      setPacientes(petsUpdate)
      setPet({})//limpiar el pet seleccionado luego de actualizar los valores
    } else {
      objPets.id = createId()
      setPacientes([...pets, objPets]) 
    }

    setPetName('')
    setPetOnwer('')
    setPetOnwerEmail('')
    setPetDischargeDate('')
    setPetSymptoms('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center">Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        className="bg-white shadow-md rounder-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
        >
          {error && <Error><p>***Todos los campos son obligatorios***</p></Error>}
          <div className="mb-5">
              <label className="block text-gray-700 uppercase font-bold" htmlFor="name">
                Pet Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Pet Name"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={name}
                onChange={ (e) => setPetName(e.target.value) }
              />
          </div>
          <div className="mb-5">
              <label className="block text-gray-700 uppercase font-bold" htmlFor="onwer">
                Pet Onwer
              </label>
              <input
                id="onwer"
                type="text"
                placeholder="Pet Onwer"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={onwer}
                onChange={ (e) => setPetOnwer(e.target.value) }
              />
          </div>
          <div className="mb-5">
              <label className="block text-gray-700 uppercase font-bold" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email of Pet Onwer"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={email}
                onChange={ (e) => setPetOnwerEmail(e.target.value) }
              />
          </div>
          <div className="mb-5">
              <label className="block text-gray-700 uppercase font-bold" htmlFor="dischargedate">
                Pet Discharge Date
              </label>
              <input
                id="dischargedate"
                type="date"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                placeholder="Pet Discharge Date"
                value={dischargedate}
                onChange={ (e) => setPetDischargeDate(e.target.value) }
              />
          </div>
          <div className="mb-5">
              <label className="block text-gray-700 uppercase font-bold" htmlFor="symptoms">
                Describe the pet's symptoms
              </label>
              <textarea
                id="symptoms"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                placeholder="Describe the pet's symptoms"
                value={symptoms}
                onChange={ (e) => setPetSymptoms(e.target.value) }
              />
          </div>
          <input
            type="submit"       
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
            value={pet.id ? 'Edit your Pet' : 'Add new Pet'}
          />
      </form>
    </div>
  )
}

export default Formulario
