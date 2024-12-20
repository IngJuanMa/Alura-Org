import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

 const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")


const {registrarColaborador, crearEquipo} = props

const manejarEnvio =(e) => {
    e.preventDefault()
    console.log("manejar envio")

    let datosAEnviar = {
        nombre,
        puesto,
        foto,
        equipo
    }
// console.log(datosAEnviar)
    registrarColaborador(datosAEnviar);
}


const manejarNuevoEquipo = (e) => {
    e.preventDefault()
    crearEquipo({titulo,color})
}


    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo ="Nombre" 
                placeholder="Ingrese el nombre..." 
                required
                valor={nombre} 
                actualizarValor={actualizarNombre}  
            />
            <Campo 
                titulo ="Puesto" 
                placeholder="Ingrese el puesto..." 
                required 
                valor={puesto} 
                actualizarValor={actualizarPuesto}
            />
            <Campo 
                titulo ="Foto" 
                placeholder="Ingrese enlace de la foto..." 
                required
                valor={foto} 
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor ={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton> 
                Crear 
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear un nuevo equipo.</h2>
            <Campo 
                titulo ="Titulo" 
                placeholder="Ingrese el titulo..." 
                required
                valor={titulo} 
                actualizarValor={actualizarTitulo }  
            />
            <Campo 
                titulo ="Color" 
                placeholder="Ingrese el color en Hex..." 
                required 
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton> 
                Registrar equipo 
            </Boton>
        </form>
    </section>
}

export default Formulario