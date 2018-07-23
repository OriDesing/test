class Mapa {

    constructor() {
        this.img = loadImage("./img/mapa.png");
        this.posX = -1500;
        this.posY = -1500;
        this.posZ = 0;
        this.rotX = 0;
        this.rotY = 0;
        this.rotZ = 0;
        this.navX = -1500;
        this.navY = -1500;
        this.vel = 1;
        this.dist = 0;
    };

    // metodo encarfado de mostrar la imagen 
    mostrar() {
        push();
        image(this.img, this.posX, this.posY);
        pop();
    };

    //captura la pocicion del boton
    capturarPosicion(x, y) {
        this.navX = (x * -1) + (innerWidth / 2);
        this.navY = (y * -1) + (innerHeight / 2);
        this.vel = 10;

    };

    navegar() {

        if (this.posX < this.navX) {
            this.posX = this.posX + this.vel;
        };

        if (this.posX > this.navX) {
            this.posX = this.posX - this.vel;
        };

        if (this.posY < this.navY) {
            this.posY = this.posY + this.vel;
        };

        if (this.posY > this.navY) {
            this.posY = this.posY - this.vel;
        };

        posGobalX = this.posX;
        posGobalY = this.posY;

    };
};

class Boton {

    constructor(nom, x, y, carImg) {
        this.nombre = nom;
        this.posX = x;
        this.posY = y;
        this.img = loadImage(carImg);
        this.rueda = loadImage("img/rueda.png");
        this.rotar = 0;
    };

    mostrar() {
        push();
        translate(this.posX + posGobalX, this.posY + posGobalY);
        rotate(this.rotar);
        this.rotar = this.rotar + 0.05;
        image(this.rueda, -100, -100, 200, 200);
        pop();
        push();
        translate(this.posX + posGobalX, this.posY + posGobalY);
        image(this.img, -60, -60, 120, 120);
        pop();
        pulsar(this.nombre, this.posX + posGobalX, this.posY + posGobalY);
    };


};

class Nube {

    constructor(imgN) {
        this.posX = random(400, 5000);
        this.posY = random(400, 5000);
        this.acel = 0.05;
        this.img = loadImage(imgN);
    };

    mostrar() {
        push();
        translate(0, 0);
        image(this.img, this.posX + posGobalX, this.posY + posGobalY);
        pop();
        this.posX = this.posX + this.acel;
        if (this.posX > 5000) {
            this.posX = -400;
        }
    };
};

var estado = 0;
// evento capturar click del boton
window.onload = function () {
    var parque = document.getElementsByClassName("parques");
    var i;
    for (i = 0; i < parque.length; i++) {
        parque[i].addEventListener("click", buscar, true);
    };


    document.getElementById("defaultCanvas0").addEventListener("click", activar, true);
};

function activar() {
    act = 1;
};

function pulsar(boton, x, y) {

    var d = dist(mouseX, mouseY, x, y);
    if (act == 1 && d < 100) {

        console.log("boton pulsado " + boton);
        document.getElementById(boton).click();

    };
};

function buscar(e) {
    this.x = this.getAttributeNode("x").value;
    this.y = this.getAttributeNode("y").value;
    mapa.capturarPosicion(this.x, this.y);
    this.id;
    console.log(this.x);
};


