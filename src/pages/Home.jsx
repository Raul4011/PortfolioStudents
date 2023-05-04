import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import  Footer  from '../components/Footer'

const Home = () => {

  const array = [1,5,9,25,84]

  const gatos = [{id:1,nombre:"carlitos",raza:"siames",edad:5},
                 {id:1,nombre:"garfield",raza:"callejero",edad:3},
                 {id:1,nombre:"minino",raza:"normal",edad:4},
                 {id:1,nombre:"Faraon",raza:"persa",edad:2}
    ]

  const gato = {id:1,nombre:"carlitos",raza:"siames",edad:5}

  return (
    <div>
        <Header/>
        <Main valor={array}/>
        <Footer/>
    </div>
  )
}

export default Home