
this.value = 0;


function listener(url, x, y) {

    this.d = dist(mouseX, mouseY, x, y);
    if (this.d < 100) {
        console.log(url);

        if (mouseIsPressed) {
            alert (url);
        } 
    };

};


// function mousePressed() {
//     if (value === 0) {
//       value = 255;
//     } else {
//       value = 0;
//     }

class SlashButton {

    constructor(x, y, img, tx, ty, url) {

        this.posX = x;
        this.posY = y;
        this.diag = loadImage(img);
        this.rotar = 0.523599;
        this.tamX = tx;
        this.tamY = ty;
        this.url = url;

    };

    mostrar() {

        push();
        translate(0, 0);
        rotate(this.rotar);
        image(this.diag, this.posX, this.posY);
        pop();

        listener(this.url, this.posX + (this.tamX / 2), innerHeight / 2);

    };



};

function setup() {

    createCanvas(innerWidth, innerHeight);

    diagonal = new SlashButton(-45, -500, "img/Diagonales-06.png", 596, 1607, "boton1");
    diagonal2 = new SlashButton(500, -550, "img/Diagonales-07.png", 355, 1607, "boton2");
    diagonal3 = new SlashButton(855, -750, "img/Diagonales-08.png", 355, 1607, "boton3");
    diagonal4 = new SlashButton(1210, -950, "img/Diagonales-09.png", 355, 1607, "boton4");
    diagonal5 = new SlashButton(1565, -1000, "img/Diagonales-11.png", 596, 1607, "boton5");

    frameRate(60);
};

function draw() {

    background(0);
    diagonal.mostrar();
    diagonal2.mostrar();
    diagonal3.mostrar();
    diagonal4.mostrar();
    diagonal5.mostrar();

};


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
};