let totalinput = [];
let win = [];
let posistionCounter = 0;
let maTchedCombo = 0;

let randomIn = 0;
let maTched = false;
let Prompt = false;
let falseInput = true;
let prevIn = 0;

const combos = [[87, 83, 68, 65, 87], [87, 68, 83, 68], [87, 68, 83, 83, 68, 83], [87, 68, 83, 87], [87, 68, 83, 83, 83], [68, 68, 87], [68, 83, 87, 68, 83], [68, 68, 68], [87, 68, 68], [83, 83, 87, 68],
[87, 68, 87, 65], [68, 87, 83, 83, 68], [68, 83, 65, 87, 87], [68, 68, 83, 65, 68, 83], [68, 83, 87, 87, 65, 83, 83], [68, 83, 68, 83, 68, 83]];
const combo0 = [87, 83, 68, 65, 87];
const combo1 = [87, 68, 83, 68];
const combo2 = [87, 68, 83, 83, 68, 83];
const combo3 = [87, 68, 83, 87];
const combo4 = [87, 68, 83, 83, 83];
const combo5 = [68, 68, 87];
const combo6 = [68, 83, 87, 68, 83];
const combo7 = [68, 68, 68];
const combo8 = [87, 68, 68];
const combo9 = [83, 83, 87, 68];
const combo10 = [87, 68, 87, 65];
const combo11 = [68, 87, 83, 83, 68];
const combo12 = [68, 83, 65, 87, 87];
const combo13 = [68, 68, 83, 65, 68, 83];
const combo14 = [68, 83, 87, 87, 65, 83, 83];
const combo15 = [68, 83, 68, 83, 68, 83];

let counter = 0;
let call;
let up;
let down;
let starboard;
let port;
let font;

function preload() {
  font = loadFont('assets/inconsolata.otf');
}

function setup() {
  createCanvas(1023, 573);
  call = loadImage('assets/Callin.png');
  up = loadImage('assets/up.png');
  down = loadImage('assets/down.png');
  port = loadImage('assets/port.png');
  starboard = loadImage('assets/starboard.png');
  textFont(font);
  textSize(20);
}

function draw() {
  background(33,33,33,255);
  image(call, 0, 0, 350, 350);
  fill(0, 0, 255);
  text('Click The Mouse For Random Combos To Follow', 400, 50);
  text('If You Put In A Wrong Input That You Didnt Want Press Space', 10, 550);

  for(let i = 0; i < totalinput.length; i++){
    let w = 100;
    let h = 100;
    let x = i * w;
    let y = 400;
    if(totalinput[i] == 87){
      image(up, x, y, w, h);
    }
    if(totalinput[i] == 83){
      image(down, x, y, w, h);
    }
    if(totalinput[i] == 65){
      image(port, x, y, w, h);
    }
    if(totalinput[i] == 68){
      image(starboard, x, y, w, h);
    }
  }
  if(maTched){
    counter ++;
    for (let i = 0; i < win.length; i++) {
    let w = 100;
    let h = 100;
    let x = i * w;
    let y = 400;
    if(win[i] == 87){
      image(up, x, y, w, h);
    }
    if(win[i] == 83){
      image(down, x, y, w, h);
    }
    if(win[i] == 65){
      image(port, x, y, w, h);
    }
    if(win[i] == 68){
      image(starboard, x, y, w, h);
    }
  }
    fill(255);
    text('Correct Combo ' + maTchedCombo, 360, 300, 200, 200);

    if(counter > 60){
      totalinput = [];
      maTched = false;
      counter = 0;
      randomIn = int(random(16));
      if(prevIn == randomIn){
        randomIn = int(random(16));
        console.log(prevIn);
      }
    }
  }

  if(falseInput){
    fill(255);
    text('Incorect Combo', 360, 300, 200, 200);
  }

  if(Prompt){
    for (let i = 0; i < combos[randomIn].length; i++) {
      let w = 75;
      let h = 100;
      let x = i * w + 360;
      let y = 100;
      if(combos[randomIn][i] == 87){
        image(up, x, y, w, h);
      }
      if(combos[randomIn][i] == 83){
        image(down, x, y, w, h);
      }
      if(combos[randomIn][i] == 65){
        image(port, x, y, w, h);
      }
      if(combos[randomIn][i] == 68){
        image(starboard, x, y, w, h);
      }
    }
    fill(0, 0, 255);
    text('Combo Number ' + randomIn, 400, 250);
    if(maTchedCombo == randomIn){
     push();
      fill(0, 255, 0);
      textSize(45);
      text('YOU DID THE COMBO!', 300, 350);
      pop();
      prevIn = randomIn;
    }
  }
}

function keyReleased(){
  totalinput[posistionCounter] = keyCode;
  console.log(keyCode);
  maTched = false;
  falseInput = true;



  for(let i = 0; i < combos.length; i++) {
    
    if(keyCode == combos[i][posistionCounter]){
      falseInput = false;
    }

    if(JSON.stringify(totalinput) === JSON.stringify(combos[i])){
      maTched = true;
      maTchedCombo = i;
      console.log(maTched);
    } 
  }

  if(maTched){
    console.log("Did it " + maTchedCombo);
    posistionCounter = 0;
    win = totalinput;
    totalinput = [];

  }else{
    posistionCounter ++;
  }

  if(falseInput){
    posistionCounter = 0;
    totalinput = [];
    console.log("False Input");
  } 
}

function mouseReleased(){
  Prompt = !Prompt;
  randomIn = int(random(16));
  console.log(randomIn);
}