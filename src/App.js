import { useState } from 'react';
import {v4 as uuid} from "uuid"
import './App.css';
import Header from "./componentes/Header/Header.js"
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/index.js';
import Equipo from './componentes/Equipo/index.js';
import Footer from './componentes/Footer/index.jsx';

function App() {

  const [mostarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id:uuid(),
    equipo: "Front End",
    foto: "https://github.com/IngJuanMa.png",
    nombre: "Juan Manuel",
    puesto: "Estudiante",
    fav: true
  },
  {
    id:uuid(),
    equipo: "Programación",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Desarrolladora de software e instructora",
    fav: true
  },
  {
    id:uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: true
  },
  {
    id:uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  },
  {
    id:uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: true
  }])

  const [equipos,actualizarEquipos] = useState([

    {
      id:uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id:uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id:uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id:uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id:uuid(),
      titulo: "Ux y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id:uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id:uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  
  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostarFormulario)
  }
 
  

//Registra Colaborador

const registrarColaborador = (colaborador) => {
  console.log ("Nuevo colaborador:", colaborador)
  // Spread Operator
  actualizarColaboradores([...colaboradores,colaborador])
}


//Actualizar colo de equipo

const actualizarColor = (color,id) => {
  console.log("Actualizar", color, id)
  const equiposActualizados = equipos.map((equipo)=>{
    if(equipo.id===id){
        equipo.colorPrimario=color
    }
    return equipo
  })

  actualizarEquipos(equiposActualizados)
}

//Crear Equipo

const crearEquipo = (nuevoEquipo) => {
  console.log(nuevoEquipo)
}

//Eliminar Colaborador
const eliminarColaborador = (id) =>{
  console.log("eliminar Colaborador",id)
  const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
  actualizarColaboradores(nuevosColaboradores)
}

const like = (id) => {
  const colaboradoresActualizados = colaboradores.map((colaborador)=>{
    if(colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })

  actualizarColaboradores(colaboradoresActualizados)
}

  //Operador ternario --> condición ? seMuestra: noSeMuestra .....  es similar a utilizar un condicional IF
  // corto circuito (sirve para hacer la misma funcion del operador ternario)--> condicion && seMuestra

  return (
    <div>
      <Header />
      {/* { mostarFormulario == true ? <Formulario /> : <></> } */}
      {mostarFormulario && <Formulario

      equipos={equipos.map((equipo)=> equipo.titulo)}
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
         />
         }

<MiOrg cambiarMostrar = {cambiarMostrar} />

      {
        equipos.map((equipos) => <Equipo 
        datos={equipos} 
        key={equipos.titulo} 
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipos.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />
      )
      }

    <Footer />

    </div>
  );
}



export default App;
