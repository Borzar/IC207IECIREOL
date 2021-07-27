function validaCampos(){

    var nombre = document.getElementById("textNombre").value;

    if(nombre.length == 0 | /\s/.test(nombre)){
        alert("debe ingresar nombre");
        document.getElementById("textNombre").focus();
        return false;
    }

}