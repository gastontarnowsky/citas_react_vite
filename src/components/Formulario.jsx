import React from "react";
import {useState, useEffect} from "react";
import Error from "./Error";

function Formulario({pacientess, setPacientes, paciente, setPaciente}){
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(()=>{
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }
  },[paciente])

  const generarid = ()=>{
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return (random + fecha)
  }

  const handleSubmit = e =>{
    e.preventDefault();

    //validacion del Formulario
    if( [ nombre, propietario, email, alta, sintomas ].includes("") ){
      setError(true);
      return;
    } 
    setError(false);


    //Objeto de Paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas
    };
  
    if(paciente.id){
      //Editando el Registro
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientess.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);
      setPacientes(pacientesActualizados);
      setPaciente({});
    }else{
      //Nuevo Registro
      objetoPaciente.id = generarid();
      setPacientes([...pacientess, objetoPaciente]);
    }
  
    //reiniciar formulario
    setNombre("");
    setPropietario("");
    setEmail("");
    setAlta("");
    setSintomas("");
  };

  return(
    <div className="text-sm md:w-1/2 lg:w-2/5 md:ml-10 mb-2 md:mt-[-30px]">

      <h2 className="font-black text-2xl text-center">
        Seguimiento de Pacientes
      </h2>

      <p className="text-lg mt-2 text-center mb-4">
        Añade a tus {""}
        <span className="text-indigo-600 font-bold">Pacientes y Administralos</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className=" bg-white shadow-md rounded-md py-10 px-5 mt-10 md:mt-0 ">
        { error && <Error mensaje="Todos los campos son obligatorios" /> }

        <div className="mb-4">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}          
          />
        </div>

        <div className="mb-4">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"      
            value={propietario}
            onChange={(e)=> setPropietario(e.target.value)}              
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Contacto del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"  
            value={email}
            onChange={(e)=> setEmail(e.target.value)}                  
          />
        </div>

        <div className="mb-4">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"   
            value={alta}
            onChange={(e)=> setAlta(e.target.value)}                 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"  
            placeholder="Describe los Sintomas"  
            value={sintomas}
            onChange={(e)=> setSintomas(e.target.value)}                
          />
          <input 
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-sm"
            value={ paciente.id ? "Editar Paciente" : "Agregar Paciente"}
          />
        </div> 
   
      </form>
    </div>
  );
}

export default Formulario;