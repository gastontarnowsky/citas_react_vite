import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const INITIAL = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const[pacientes, setPacientes]=useState(INITIAL);
  const[paciente, setPaciente] = useState({});
 
 
  useEffect(()=>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes))
  },[pacientes])

  const eliminarPaciente = id =>{
    const ppacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(ppacientesActualizados);
  }

  return (
    <div>     
      <Header />
      <div className="mt-8 md:flex mx-3">
        <Formulario 
          setPacientes={setPacientes}
          pacientess={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
      <div className="md:w-1/2 lg:w-3/5 md:h-screen md:mx-3 md:mr-7">
        <ListadoPacientes
          pacientess={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
      </div>
    </div>
  )
}

export default App
