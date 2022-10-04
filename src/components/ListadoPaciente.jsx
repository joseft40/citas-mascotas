import Paciente from "./Paciente"

const ListadoPaciente = ({pets, setPet, deletePet}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pets && pets.length ? (
        <>
          <h2 className="font-black text-center text-3xl">Listado de Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
              Administrar tus {""}
              <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {
            pets.map((pet) => {
              return (
                <Paciente
                  key={pet.id}
                  pet={pet}
                  setPet={setPet}
                  deletePet={deletePet}
                />
              )
            })
          }
        </>
      ): (
        <>
          <h2 className="font-black text-center text-3xl">No hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
          </p>
        </>
      )}
    </div>
  )
}

export default ListadoPaciente
