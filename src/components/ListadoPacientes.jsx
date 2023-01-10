import Paciente from "./Paciente";

const ListadoPacientes = ({pacientess, setPaciente, eliminarPaciente})=>{
  

    
  return(
    <div>
      {(pacientess && pacientess.length) ? (
      <>
        <h2 className="font-black text-2xl text-center mt-10 md:mt-[-34px] ">
          Listado de Pacientes
        </h2>
        <p className="text-lg mt-2 mb-5 text-center">
          Administra a tus {""}
          <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        </p>
        <div className="md:h-screen lg:overflow-y-scroll scrollbar scrollbar-thumb-indigo-600 scrollbar-thumb-rounded-md scrollbar-w-1 hover:scrollbar-w-2">
          {/* lg:scrollbar lg:scrollbar-thumb-indigo-600 lg:scrollbar-thumb-rounded-md lg:scrollbar-w-1 lg:hover:scrollbar-w-2 */}
          {pacientess.map(paciente => {
            return (<Paciente
              key={paciente.id}
              paciente={paciente} 
              setPaciente={setPaciente} 
              eliminarPaciente={eliminarPaciente} 
            />);
          })}
        </div>
      </>
      ) : (
      <>
        <h2 className="font-black text-2xl text-center mt-10 md:mt-[-34px] ">
          Aun no hay Pacientes
        </h2>
        <p className="text-lg mt-2 mb-4 text-center">
          Intenta completando el {""}
          <span className="text-indigo-600 font-bold">Seguimiento de Pacientes</span>
        </p>
      </>
      )}
    </div>
  );
}

export default ListadoPacientes;