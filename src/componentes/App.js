import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
class App extends Component {

  state={
    presupuesto:'',
    restante:'',
    gastos:{}
  }

  // Agregar un nuevo gasto al state
  agregarGasto=gasto=>{
    // tomar una copia del state actual
    const gastos={...this.state.gastos}
    
    // agregar el gasto al objeto del state
    gastos[`gasto${Date.now()}`]=gasto;
    console.log(gastos);



    // ponerlo en state
    this.setState({
      gastos
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
          2
          </div>
        </div>
      </div>
     </div>
    );
  }
}

export default App;
