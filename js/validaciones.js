function validaCampos(){

    var nombre = document.getElementById("textNombre").value;
    var categoria = document.getElementById("idCategoria").value;
    var sucursal = document.getElementById("idSucursal").value;
    var cantidad = document.getElementById("numCantidad").value;
    var precio = document.getElementById("textPrecio").value;
    

    if(nombre.length == 0 | /\s/.test(nombre)){
        alert("debe ingresar nombre");
        document.getElementById("textNombre").focus();
        return false;
    }else if(categoria == "") {
        alert("debe seleccionar una categoria");
        document.getElementById("idCategoria").focus();
        return false;
    }else if(sucursal == "") {
        alert("debe seleccionar una sucursal");
        document.getElementById("idSucursal").focus();
        return false;
    }else if (cantidad.length == 0 | /\s/.test(cantidad)){
        alert("debe ingresar cantidad");
        document.getElementById("numCantidad").focus();
        return false;
    }else if (precio.length == 0 | /\s/.test(precio)){
        alert("debe ingresar precio");
        document.getElementById("textPrecio").focus();
        return false;
    }

}