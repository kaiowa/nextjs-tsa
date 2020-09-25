import { AGREGAR,ELIMINAR } from "../actions/comparadorActions";

//initializing state with value 0
const comparadorReducer = (state = {productos:[]}, action) => {
    
    switch (action.type){
        case AGREGAR: //If demand of action is Increment
          debugger;
            state.productos.push(action.payload)
            return {...state,productos: state.productos};
        case ELIMINAR: //If demand of action is Decrement
            return {...state,productos: state.value - action.payload};
        default: //By default action
            return {...state};
    }
};

export default comparadorReducer;