//desarrollar constructor, donde la clase es miembro de squad
function MiembroSquad(nombre,apellido,edad,hobbies){ 
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;
}

// hacer instancia de cada miembro con sus datos reales
var cami = new MiembroSquad("Camila"," Saez",24,"Origami, leer");
var cote = new MiembroSquad("María José"," Rodriguez",32,"Ver series, bailar");
var anto = new MiembroSquad("Antonia"," Cerda",24,"Diseñar, leer");
var caro = new MiembroSquad("Carolina"," Tapia",27,"Trekking, leer");
var jose = new MiembroSquad("María José"," Pozo",31,"Bailar, leer");
var val = new MiembroSquad("Valentina"," Saavedra",26,"Medicina autogestiva");
var marion = new MiembroSquad("Marion"," Castillo",29,"Caminar, fotografia");
var belen = new MiembroSquad("Belen"," Recabal",29,"Andar en Bici, Netflix");
var fran= new MiembroSquad("Francisca"," Ojeda",28,"Roller Derby, lettering");

//metodos
//this.mostrarSquad = function(){
//	return(<h2>this.nombre + this.apellido <br> + this.edad <br>+this.hobbies)
//}
//llamar al metodo
//console.log(cami.mostrarSquad);


var camiDiv = document.getElementById("camiHTML");
var coteDiv = document.getElementById("coteHTML");
var antoDiv = document.getElementById("antoHTML");
var caroDiv = document.getElementById("caroHTML");
var joseDiv = document.getElementById("joseHTML");
var valDiv = document.getElementById("valHTML");
var marionDiv = document.getElementById("marionHTML");
var belenDiv = document.getElementById("belenHTML");
var franDiv = document.getElementById("franHTML");

var listaSquad ="<b>"+"Nombre: "+"</b>"+ cami.nombre + cami.apellido + "<br>" + "<b>"+"Edad: " +"</b>"+ cami.edad + "<br> " + "<b>"+ "Hobbies: " +"</b>"+ cami.hobbies+"<br>";
camiDiv.innerHTML = listaSquad; 

var listaSquad ="<b>"+"Nombre: "+"</b>"+ cote.nombre + cote.apellido + "<br>" + "<b>"+"Edad: " +"</b>"+ cote.edad + "<br> " + "<b>"+ "Hobbies: " +"</b>"+ cote.hobbies+"<br>";
coteDiv.innerHTML = listaSquad; 

var listaSquad ="<b>"+"Nombre: "+"</b>"+ anto.nombre + anto.apellido + "<br>" + "<b>"+"Edad: " +"</b>"+ anto.edad + "<br> " + "<b>"+ "Hobbies: " +"</b>"+ anto.hobbies+"<br>";
antoDiv.innerHTML = listaSquad; 

var listaSquad ="<b>"+"Nombre: "+"</b>"+ caro.nombre + caro.apellido + "<br>" + "<b>"+"Edad: " +"</b>"+ caro.edad + "<br> " + "<b>"+ "Hobbies: " +"</b>"+ caro.hobbies+"<br>";
caroDiv.innerHTML = listaSquad;

var listaSquad ="<b>"+"Nombre: "+"</b>"+ jose.nombre + jose.apellido + "<br>" + "<b>"+"Edad: " +"</b>"+ jose.edad + "<br> " + "<b>"+ "Hobbies: " +"</b>"+ jose.hobbies+"<br>";
joseDiv.innerHTML = listaSquad;

var listaSquad ="<b>"+"Nombre: "+"</b>"+ val.nombre + val.apellido + "<br>" + "<b>"+"Edad: " +"</b>"+ val.edad + "<br> " + "<b>"+ "Hobbies: " +"</b>"+ val.hobbies+"<br>";
valDiv.innerHTML = listaSquad;

var listaSquad ="<b>"+"Nombre: "+"</b>"+ marion.nombre + marion.apellido + "<br>" + "<b>"+"Edad: " +"</b>"+ marion.edad + "<br> " + "<b>"+ "Hobbies: " +"</b>"+ marion.hobbies+"<br>";
marionDiv.innerHTML = listaSquad;

var listaSquad ="<b>"+"Nombre: "+"</b>"+ belen.nombre + belen.apellido + "<br>" + "<b>"+"Edad: " +"</b>"+ belen.edad + "<br> " + "<b>"+ "Hobbies: " +"</b>"+ belen.hobbies+"<br>";
belenDiv.innerHTML = listaSquad;

var listaSquad ="<b>"+"Nombre: "+"</b>"+ fran.nombre + fran.apellido + "<br>" + "<b>"+"Edad: " +"</b>"+ fran.edad + "<br> " + "<b>"+ "Hobbies: " +"</b>"+ fran.hobbies+"<br>";
franDiv.innerHTML = listaSquad;




