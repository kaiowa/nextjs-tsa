export const AGREGAR = "AGREGAR_COMPARADOR";
export const ELIMINAR = "ELIMINAR_COMPARADOR";

//AGREGAR action created
export const agregarProducto = (productoId) => ({
   type: AGREGAR,
   payload: productoId
});

//ELIMINAR action created
export const eliminarProducto = (productoId) => ({
    type: ELIMINAR,
    payload: productoId
});