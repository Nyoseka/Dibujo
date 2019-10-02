class Figura
{
  constructor(v1,ancho, alto, fill)
  {
    this.v1=v1;
    this.ancho=ancho;
    this.alto=alto;
    this.fill=fill;
  }

    /*dibuja ()
    {
      fill(this.fill);
        ellipse(this.v1.x, this.v1.y, this.alto, this.ancho);
    }*/
}
class Circulo extends Figura
{
  constructor(v1,ancho, alto, fill)
  {
    super(v1,ancho,alto,fill);
  }
  dibuja ()
    {
      fill(this.fill);
        ellipse(this.v1.x, this.v1.y, this.alto, this.ancho);
    }
}
class Rectangulo extends Figura
{
  constructor(v1,ancho,alto,fill)
  {
    super(v1,ancho,alto,fill)
  }
  dibuja ()
    {
      fill(this.fill);
        rect(this.v1.x, this.v1.y, this.alto, this.ancho);
    }
}
var vect1;
var circulo1;
var figuras=[];
var actual="Circulo";

function setup()
{
    createCanvas(640,400);
}

function mouseClicked()
{
  //if (actual=="Circulo")
  //{
  vect1= createVector(mouseX,mouseY);
  circulo1= new Circulo(vect1, 55,55,color("pink"));
  circulo1.dibuja(fill);
  /*append(figuras, circulo1);
  actual="Rectangulo";*/
  }
  /*else (actual=="Rectangulo")
  {
    vect1=createVector(mouseX,mouseY);
    rectangulo1=new Rectangulo(vect1,80,100,color("blue"));
    rectangulo1.dibuja(fill);
    append(figuras,rectangulo1);
    actual="circulo";
  }
}*/
function draw()
{
    circulo1.dibuja(fill);
}