import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import ControlPresupuesto from './ControlPresupuesto';
import {validarPresupuesto} from '../helper';

class App extends Component {

  state={
    presupuesto:'',
    restante:'',
    gastos:{}
  }

  componentDidMount(){
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto=()=>{
    let presupuesto=prompt('Cual es tu presupuesto?');
    let resultado=validarPresupuesto(presupuesto);
    if(resultado){
      this.setState({
        presupuesto:presupuesto,
        restante:presupuesto
      })
    }
    else{
      
      this.obtenerPresupuesto();
    }
  }


  // Agregar un nuevo gasto al state
  agregarGasto=gasto=>{
    // tomar una copia del state actual
    const gastos={...this.state.gastos}
    
    // agregar el gasto al objeto del state
    gastos[`gasto${Date.now()}`]=gasto;
    console.log(gastos);

    // restar el presupuesto
    this.restarPresupuest(gasto.cantidadGasto);

    // ponerlo en state
    this.setState({
      gastos
    })  
  }

    // Restar del presupuesto cuando un gasto se crea

    restarPresupuesto=cantidad=>{
      // leer el gasto
     let restar=Number(cantidad);
    //  tomar un copia del state actual
      let restante=this.sate.restante;
    // lo restamos
      restante-=restar;
      // agregamos al nuevo state

      this.setState({
        restante
      })
    }

  render() {
    return (
     <div className="App container">
      <Header
        titulo='Gasto Semanal Aldo'
        />
      <div className="contenido-principal contenido">
        <div className="row">
          <div className="one-half column">
          <Formulario
            agregarGasto={this.agregarGasto}
          />
          </div>
          <div className="one-half column">
          <Listado 
          gastos={this.state.gastos}
          
          />
          <ControlPresupuesto/>
          </div>
        </div>
      </div>
     </div>
    );
  }
}

export default App;
