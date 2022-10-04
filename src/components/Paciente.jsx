const Paciente = ({pet, setPet, deletePet}) => {
  const {name, onwer, email, dischargedate, symptoms, id} = pet

  const handleDelete = () => {
    const respuesta = confirm("Desea Eliminar el paciente?")
    if (respuesta) {
        deletePet(id)
    }
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounder-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre: {""}
            <span className="font-normal normal-case">{name}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario: {""}
            <span className="font-normal normal-case">{onwer}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Email: {""}
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha de alta: {""}
            <span className="font-normal normal-case">{dischargedate}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Síntomas: {""}
            <span className="font-normal normal-case">{symptoms}</span>
        </p>
        <div className="flex justify-between mt-10">
            <button
                type="button"
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 uppercase font-bold text-white rounded-lg"
                onClick={() => setPet(pet)}
            >Editar</button>
            <button
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-700 uppercase font-bold text-white rounded-lg"
                onClick={handleDelete}
            >Eliminar</button>
        </div>
  </div>
  )
}

export default Paciente
