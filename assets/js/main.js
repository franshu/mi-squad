//desarrollar constructor, donde la clase es miembro de squad
function MiembroSquad(nombre,apellido,edad,hobbies){ 
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;
}

// hacer instancia de cada miembro con sus datos reales
var cami = new MiembroSquad("Camila","Saez",24,"Origami, leer");
var anto = new MiembroSquad("Antonia","Cerda",24,"Diseñar, leer");
var caro = new MiembroSquad("Carolina","Tapia",27,"Trekking, leer");
var cote = new MiembroSquad("María José","Rodriguez",32,"Ver series, bailar");
var jose = new MiembroSquad("María José","Pozo",31,"Bailar, leer");
var val = new MiembroSquad("Valentina","Saavedra",26,"Medicina autogestiva");
var marion = new MiembroSquad("Marion","Castillo",29,"Caminar, fotografia");
var belen = new MiembroSquad("Belen","Recabal",29,"Andar en Bici, Netflix");
var fran= new MiembroSquad("Francisca","Ojeda",28,"Roller Derby, lettering");

//metodos
this.mostrarSquad = function(){
	return(<h2>this.nombre + this.apellido <br> + this.edad <br>+this.hobbies)
}
//llamar al metodo
console.log(cami.mostrarSquad);
