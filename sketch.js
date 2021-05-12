
const boardHeight = 600;
const boardWidth = 800;

let img;
var imgWidth = 750;

var isBtn1 = false, isBtn2 = false, isBtn3 = false, isBtn4 = false;

function preload() {
    img = loadImage("assets/images/gatito.jpg");
}

function setup(){
    let myCanvas = createCanvas(boardWidth, boardHeight);
    myCanvas.parent('myCanvas');
}

function draw() {
    background(250);
    image(img, (boardWidth-imgWidth)/2, 0,boardWidth-50, boardHeight-80);
    drawRectangle(30,boardHeight-50, 'Base');
    drawRectangle(230,boardHeight-50, 'Blanco y negro');
    drawRectangle(440,boardHeight-50 , 'Blur');
    drawRectangle(650,boardHeight-50 , 'Invertido');
    //setFilter();
    checkBtn();
}

function drawRectangle(posX, posY, texto){
    rect(posX, posY, 120, 30, 7);
    textSize(12);
    text(texto, posX+10, posY+20)
}

function mouseClicked() {
    if(mouseX >= 30 && mouseX <= 30+120 && mouseY >= boardHeight-50 && mouseY <= (boardHeight-50)+30){
        console.log("click en botón 1");
        isBtn1 = true;
        isBtn2 = false; isBtn3 = false; isBtn4 = false;
    }

    if(mouseX >= 230 && mouseX <= 230+120 && mouseY >= boardHeight-50 && mouseY <= (boardHeight-50)+30){
        console.log("click en botón 2");
        //image(img, (boardWidth-imgWidth)/2, 0,boardWidth-50, boardHeight-80);
        //filter(GRAY);
        isBtn2 = true;
        isBtn1 = false; isBtn3 = false; isBtn4 = false;
    }

    if(mouseX >= 440 && mouseX <= 440+120 && mouseY >= boardHeight-50 && mouseY <= (boardHeight-50)+30){
        console.log("click en botón 3");
        isBtn3 = true;
        isBtn1 = false; isBtn2 = false; isBtn4 = false;
    }

    if(mouseX >= 650 && mouseX <= 650+120 && mouseY >= boardHeight-50 && mouseY <= (boardHeight-50)+30){
        console.log("click en botón 4");
        isBtn4 = true;
        isBtn1 = false; isBtn2 = false; isBtn3 = false;
    }
}

function setFilter(valor){
    if(valor == 2){
        filter(GRAY);
    }
    if(valor == 3){
        filter(BLUR, 2);
    }
    if(valor == 4){
        filter(INVERT);
    }
}

function checkBtn(){
    if(isBtn2){
        setFilter(2);
    }

    if(isBtn3){
        setFilter(3);
    }

    if(isBtn4){
        setFilter(4);
    }
}
