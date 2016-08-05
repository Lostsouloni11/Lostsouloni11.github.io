//almacenar datos en javascrip
var diametro;

//solo de despues de DECLARAR vasriante se le da valor
//se le llama ASIGNAR
diametro = 100;


//hay dos sabores de variables, locales y globales
//GLOBALES: DECLARADAS FUERA DE FUNCION , se pueden usar en cualquier parte
//LOCALES: DECLARADAS DENTRO DE FUNCION , solo dentro de la funcion

//hablemos de funciones, las funciones tambien se declaran
//luego de declararse, pueden llamarse
// asi se declara una funcion en javascript
function miFuncionBacan() {
  //esto es lo que hace la funcion, se le llama cuerpo
}

//ejecutar o llamar la funcion
//miFuncionBacan();

function setup() {

  //framerate(tasa de cuadros por segundo)
  frameRate(60)

  //variable local x 
  var x;
  x = 10;

  //variable local y, modo rapido de DECLARAR y asignarle valor inmediatamente
  var y = 10;
  //asignar otro valor
  y = 100;

  var miColor = random(color(255));

  //camelCase, UPPERCASE, lowecase
  // Crear un lienzo para dibujar createCanvas(dimHor, dimVer) dimensiones en pixeles;
  createCanvas(windowWidth, windowHeight)



}

//Draw() corre despues del setup, 60 veces por segundo
function draw() {

  //pintar el fondo
  //background(color);
  //1: greyscake, 0 es negro, 255 blanco
  //2: greyscale + alpha
  //3: rgb, redgreenblue, 0 nada, 255 todo
  //4: rgb + alpha
  background(random(255), random(255), random(255));

  //DIBUJAMOS LA ELIPSE
  //miElipse();}

  //condicional
  //if(){}
  //si el mouse esta en el rimer tercio de la ventana a la izq

  if (mouseX < width/3) {
    muchasElipses(100, 70);
  }

  var miColor = random(color(255 / 2))

}

//declarar funcion nueva para dibujar elipses a mi gusto
function miElipse() {

  //definir ancho de figura
  //strokeWeight(px)}
  strokeWeight(10);

  //definir color del borde
  //stroke(color)
  //noStroke = sin borde
  Stroke();

  //definir color relleno
  //fill(color)
  fill(40, 150, 200);


  //ellipse(posX, posY, width, height) 
  //pixeles
  ellipse(mouseX, mouseY, 100, 100)

  //asignarle nuevo valor a diametro
  //diametro = diametro + 1
  diametro = diametro + 1;
  diametro = random(100, 0, 100);


}

//declarar funcion nueva
//funcion para hacer muchas ellipses aleatorias de color aleatorio
function muchasElipses(cantidad) {


  //for loop
  //for(inicio; condicion; refresco){}
  for (var i = 0; i < cantidad; i++) {


    //color aleatorio
    noStroke()
    fill(random(255), random(255), random(255))
      //elipse aleatoria
    ellipse(random(width), random(height), 100, 100);

  }
}