import React from 'react'
import gato from "../assets/siames.jpeg"
import "../css/Main.css"
import { Button, Container } from 'react-bootstrap'

const Main = (props) => {

  console.log(props);

  const [a,b,c,d,e]= props.valor;

  let valor = false;
  return (
    <div className='row'>
      <div className="col-6">
        <img src={gato} alt="" className='img' />
      </div>
      <div className="col-6">
        <h4 className={valor ? "text1" : "text2"}>hola mi nombre es alumno/a soy estudiante de la carrera de programacion en la utn frt tucuman me gusta mucho la programacion y soy Fullstack Ninja</h4>
      </div>
      <button>sumar</button>
      <Button>restar</Button>
      <br />
     <div>
      <h3>aqui muestro A: {a} {b} {c} {d} {e}</h3>
     </div>
      <Container>
        <p className='text-danger'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eaque sint, deleniti quaerat accusamus placeat numquam ullam vel cumque minima repudiandae reiciendis, commodi rem quam, provident consequuntur voluptate. Tempora, officiis!</p>
      </Container>
      <br />
      <h3>{gato.edad}</h3>
    </div>
  )
}

export default Main