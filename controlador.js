// referencias a los componentes
let txtsitename = $("#nombre");
let txturl = $("#url");
let btnAgregar = $("#btn_agregar");
let target = $("#favoritos");

// evento del botón agregar
btnAgregar.click(preparaTarea);



// función para agregar tarea en la tabla
function preparaTarea(){

	// se recupera los valores ingresados
	let sitename = txtsitename.val();
	let url = txturl.val();

	// se instancia una tarea
	let tarea = new Tarea(sitename, url)
	// prueba del método
	console.log(tarea.mostrar());

	// se llama a la funcion y se le pasa una tarea
	insertaTarea(tarea);
}



// funcion que inserta una tarea en la tabla
function insertaTarea(t){
	
	// plantilla que contendran los datos ingresados
	let plantilla = `<div class="col-3 card border-secondary mr-1 ml-1 mb-1">
								
								<div class="card-body text-secondary">
									<h6  style="color:darkblue" class="card-title"><i class="fas fa-star"</i>${t.sitename}</h6>
									<a  style="color:yellow" href="http://${t.url}" class="btn btn-sm btn-secondary" target="_blank">Ir a www.${t.sitename.toLowerCase()}.com</a>
								</div>`;

	// se inseta la plantilla en la tabla
	target.prepend(plantilla);

	// se limpian los campos
	limpiar();
}



// funcion que limpia los campos
function limpiar(){

	// borra el contenido de los campos
	txtsitename.val("");
	txturl.val("");

	//debería poner el cursor en el campo de Nombre
	txtsitename.focus();
}



// funcion para borrar una tarea
function borraTarea(btn){

	// se selecciona la fila en que esta el botón
	// y se borra
	$(btn).parents("#favoritos").remove()
}