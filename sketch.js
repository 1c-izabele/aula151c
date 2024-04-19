function setup() {
  createCanvas(200, 300);
  background("rgb(243,190,199)");//função para pintar o fundo
  } 

function draw() {
stroke("#E91E63");//altera a cor da borda do desenho
fill("#83D9FF");//altera a cor do preenchimento do desenho

    
if(mouseIsPressed) {
  rect(mouseX, mouseY, 40, 40);
 }
 }   