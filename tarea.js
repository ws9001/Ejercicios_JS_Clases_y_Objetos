// nombre de la clase
class Tarea {
// constructor
constructor(sitename, url){

//atributos de la clase
this.sitename = sitename;
this.url = url;
}
// método
mostrar(){
return `${this.sitename} ${this.url}`;
}
}