const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, propietario, email, alta, sintomas, id} = paciente
  
  const handleEliminar = ()=>{
    const respuesta = confirm("Deseas eliminar este paciente?");
    if (respuesta) eliminarPaciente(id);
  }

  return (
    <div className="text-sm m-0 md:m-3 md:mt-0 mt-3 bg-gray-100 shadow-md px-5 py-5 pt-6 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal text-base normal-case">
          {nombre}
        </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal text-base normal-case">
          {propietario}
        </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal text-base normal-case">
          {email}
        </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Alta: {""}
        <span className="font-normal text-base normal-case">
          {alta}
        </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal text-base normal-case">
          {sintomas}
        </span>
      </p>

      <div className="flex justify-between mt-5">
        <button
          type="button"
          className="py-2 px-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={()=>setPaciente(paciente)}>
        Editar</button>
        
        <button
          type="button"
            className="py-2 px-5 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            onClick={handleEliminar}>
        Eliminar</button>
      </div>
  </div>
  )
}

export default Paciente;