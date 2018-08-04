import React,{Component} from 'react';
import Presupuesto from './Presupuesto';
import Restante from './Restante';

class ControlPresupuesto extends Component{
    render(){
        return(
            <React.Fragment>
                <Presupuesto/>
                <Restante/>
            </React.Fragment>
    )
}
}

export default ControlPresupuesto