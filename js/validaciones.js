function validaCampos() {

    var nombre = document.getElementById("textNombre").value;

    if(nombre.length == 0 | /\s/.test(nombre) ) {

        alert("Debe ingresar su nombre");
        return false;
    }

}