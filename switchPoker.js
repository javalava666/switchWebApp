// global variables a-z
var canvas = document.getElementById('canvas'),
    cards = [],
    ctx = canvas.getContext('2d'),
    deal = document.getElementById('deal'),
    end1 = new Date().getTime(),
    end2 = new Date().getTime(),
    gameTo = document.getElementById('gameTo').value*1,
    grandTotal1 = 0,
    grandTotal2 = 0,
    h1PairVal=0,
    h2PairVal=0,
    hiPairVal2=0,
    hiPairVal1=0,
    kicker1=0,
    kicker2=0,
    loPairVal1=0,
    loPairVal2=0,
    h1Vals = [],
    h1Suits = false,
    h2Vals = [],
    h2Suits = false,
    handle1 = -1,
    handle2 = -2,
    mouseX,
    mouseY,
    movie,
    msg1,
    msg2,
    newGame = document.getElementById('newGame'),
    p1Score = 0,
    p1gt  = document.getElementById('p1gt' ),
    p1h1 = [], p1h2 = [], p1h3 = [], p1h4 = [], p1h5 = [], p1h6 = [],
    p1h7 = [], p1h8 = [], p1h9 = [], p1h10 = [], p1h11 = [], p1h12 = [],
    p1r01 = document.getElementById('p1r01'),
    p1r02 = document.getElementById('p1r02'),
    p1r03 = document.getElementById('p1r03'),
    p1r04 = document.getElementById('p1r04'),
    p1r05 = document.getElementById('p1r05'),
    p1r06 = document.getElementById('p1r06'),
    p1r07 = document.getElementById('p1r07'),
    p1r08 = document.getElementById('p1r08'),
    p1r09 = document.getElementById('p1r09'),
    p1r10 = document.getElementById('p1r10'),
    p1r11 = document.getElementById('p1r11'),
    p1r12 = document.getElementById('p1r12'),
    p1r13 = document.getElementById('p1r13'),
    p1r14 = document.getElementById('p1r14'),
    p1r15 = document.getElementById('p1r15'),
    p1r16 = document.getElementById('p1r16'),
    p1r17 = document.getElementById('p1r17'),
    p1r18 = document.getElementById('p1r18'),
    p1r19 = document.getElementById('p1r19'),
    p1r20 = document.getElementById('p1r20'),
    p1r21 = document.getElementById('p1r21'),
    p1r22 = document.getElementById('p1r22'),
    p2Score = 0,
    p2gt  = document.getElementById('p2gt' ),
    p2h1 = [], p2h2 = [], p2h3 = [], p2h4 = [], p2h5 = [], p2h6 = [],
    p2h7 = [], p2h8 = [], p2h9 = [], p2h10 = [], p2h11 = [], p2h12 = [],
    p2r01 = document.getElementById('p2r01'),
    p2r02 = document.getElementById('p2r02'),
    p2r03 = document.getElementById('p2r03'),
    p2r04 = document.getElementById('p2r04'),
    p2r05 = document.getElementById('p2r05'),
    p2r06 = document.getElementById('p2r06'),
    p2r07 = document.getElementById('p2r07'),
    p2r08 = document.getElementById('p2r08'),
    p2r09 = document.getElementById('p2r09'),
    p2r10 = document.getElementById('p2r10'),
    p2r11 = document.getElementById('p2r11'),
    p2r12 = document.getElementById('p2r12'),
    p2r13 = document.getElementById('p2r13'),
    p2r14 = document.getElementById('p2r14'),
    p2r15 = document.getElementById('p2r15'),
    p2r16 = document.getElementById('p2r16'),
    p2r17 = document.getElementById('p2r17'),
    p2r18 = document.getElementById('p2r18'),
    p2r19 = document.getElementById('p2r19'),
    p2r20 = document.getElementById('p2r20'),
    p2r21 = document.getElementById('p2r21'),
    p2r22 = document.getElementById('p2r22'),
    paused1 = true,
    paused2 = true,
    round = 0,
    roundTime = 60000*1,
    scoreRound = [],
    selectedList = [],
    start1 = new Date().getTime(),
    start2 = new Date().getTime(),
    startTime1,
    startTime2,
    switch1,
    switch2,
    timer1 = document.getElementById('timer1'),
    timer2 = document.getElementById('timer2'),
    nxtRnd = document.getElementById('nxtRnd'),
    //vid = document.getElementById('vid'),

// load images
club02  = new Image(),
club03  = new Image(),
club04  = new Image(),
club05  = new Image(),
club06  = new Image(),
club07  = new Image(),
club08  = new Image(),
club09  = new Image(),
club10  = new Image(),
club11  = new Image(),
club12  = new Image(),
club13  = new Image(),
club14  = new Image(),
diam02  = new Image(),
diam03  = new Image(),
diam04  = new Image(),
diam05  = new Image(),
diam06  = new Image(),
diam07  = new Image(),
diam08  = new Image(),
diam09  = new Image(),
diam10  = new Image(),
diam11  = new Image(),
diam12  = new Image(),
diam13  = new Image(),
diam14  = new Image(),
heart02 = new Image(),
heart03 = new Image(),
heart04 = new Image(),
heart05 = new Image(),
heart06 = new Image(),
heart07 = new Image(),
heart08 = new Image(),
heart09 = new Image(),
heart10 = new Image(),
heart11 = new Image(),
heart12 = new Image(),
heart13 = new Image(),
heart14 = new Image(),
spade02 = new Image(),
spade03 = new Image(),
spade04 = new Image(),
spade05 = new Image(),
spade06 = new Image(),
spade07 = new Image(),
spade08 = new Image(),
spade09 = new Image(),
spade10 = new Image(),
spade11 = new Image(),
spade12 = new Image(),
spade13 = new Image(),
spade14 = new Image();
timer1.style.visibility='hidden';
timer2.style.visibility='hidden';
nxtRnd.style.visibility='hidden';
// cont...
club02.src  = 'club02.png';
club03.src  = 'club03.png';
club04.src  = 'club04.png';
club05.src  = 'club05.png';
club06.src  = 'club06.png';
club07.src  = 'club07.png';
club08.src  = 'club08.png';
club09.src  = 'club09.png';
club10.src  = 'club10.png';
club11.src  = 'club11.png';
club12.src  = 'club12.png';
club13.src  = 'club13.png';
club14.src  = 'club14.png';
diam02.src  = 'diam02.png';
diam03.src  = 'diam03.png';
diam04.src  = 'diam04.png';
diam05.src  = 'diam05.png';
diam06.src  = 'diam06.png';
diam07.src  = 'diam07.png';
diam08.src  = 'diam08.png';
diam09.src  = 'diam09.png';
diam10.src  = 'diam10.png';
diam11.src  = 'diam11.png';
diam12.src  = 'diam12.png';
diam13.src  = 'diam13.png';
diam14.src  = 'diam14.png';
heart02.src = 'heart02.png';
heart03.src = 'heart03.png';
heart04.src = 'heart04.png';
heart05.src = 'heart05.png';
heart06.src = 'heart06.png';
heart07.src = 'heart07.png';
heart08.src = 'heart08.png';
heart09.src = 'heart09.png';
heart10.src = 'heart10.png';
heart11.src = 'heart11.png';
heart12.src = 'heart12.png';
heart13.src = 'heart13.png';
heart14.src = 'heart14.png';
spade02.src = 'spade02.png';
spade03.src = 'spade03.png';
spade04.src = 'spade04.png';
spade05.src = 'spade05.png';
spade06.src = 'spade06.png';
spade07.src = 'spade07.png';
spade08.src = 'spade08.png';
spade09.src = 'spade09.png';
spade10.src = 'spade10.png';
spade11.src = 'spade11.png';
spade12.src = 'spade12.png';
spade13.src = 'spade13.png';
spade14.src = 'spade14.png';
ctx.globalAlpha=1;

// define cards array
cards = [ {src:club14,  suit:'c', posX:0, posY:0, player: null, val:'14'},
          {src:club02,  suit:'c', posX:0, posY:0, player: null, val:'02'},
          {src:club03,  suit:'c', posX:0, posY:0, player: null, val:'03'},
          {src:club04,  suit:'c', posX:0, posY:0, player: null, val:'04'},
          {src:club05,  suit:'c', posX:0, posY:0, player: null, val:'05'},
          {src:club06,  suit:'c', posX:0, posY:0, player: null, val:'06'},
          {src:club07,  suit:'c', posX:0, posY:0, player: null, val:'07'},
          {src:club08,  suit:'c', posX:0, posY:0, player: null, val:'08'},
          {src:club09,  suit:'c', posX:0, posY:0, player: null, val:'09'},
          {src:club10,  suit:'c', posX:0, posY:0, player: null, val:'10'},
          {src:club11,  suit:'c', posX:0, posY:0, player: null, val:'11'},
          {src:club12,  suit:'c', posX:0, posY:0, player: null, val:'12'},
          {src:club13,  suit:'c', posX:0, posY:0, player: null, val:'13'},
          {src:diam02,  suit:'d', posX:0, posY:0, player: null, val:'02'},
          {src:diam03,  suit:'d', posX:0, posY:0, player: null, val:'03'},
          {src:diam04,  suit:'d', posX:0, posY:0, player: null, val:'04'},
          {src:diam05,  suit:'d', posX:0, posY:0, player: null, val:'05'},
          {src:diam06,  suit:'d', posX:0, posY:0, player: null, val:'06'},
          {src:diam07,  suit:'d', posX:0, posY:0, player: null, val:'07'},
          {src:diam08,  suit:'d', posX:0, posY:0, player: null, val:'08'},
          {src:diam09,  suit:'d', posX:0, posY:0, player: null, val:'09'},
          {src:diam10,  suit:'d', posX:0, posY:0, player: null, val:'10'},
          {src:diam11,  suit:'d', posX:0, posY:0, player: null, val:'11'},
          {src:diam12,  suit:'d', posX:0, posY:0, player: null, val:'12'},
          {src:diam13,  suit:'d', posX:0, posY:0, player: null, val:'13'},
          {src:diam14,  suit:'d', posX:0, posY:0, player: null, val:'14'},
          {src:heart02, suit:'a', posX:0, posY:0, player: null, val:'02'},
          {src:heart03, suit:'a', posX:0, posY:0, player: null, val:'03'},
          {src:heart04, suit:'a', posX:0, posY:0, player: null, val:'04'},
          {src:heart05, suit:'a', posX:0, posY:0, player: null, val:'05'},
          {src:heart06, suit:'a', posX:0, posY:0, player: null, val:'06'},
          {src:heart07, suit:'a', posX:0, posY:0, player: null, val:'07'},
          {src:heart08, suit:'a', posX:0, posY:0, player: null, val:'08'},
          {src:heart09, suit:'a', posX:0, posY:0, player: null, val:'09'},
          {src:heart10, suit:'a', posX:0, posY:0, player: null, val:'10'},
          {src:heart11, suit:'a', posX:0, posY:0, player: null, val:'11'},
          {src:heart12, suit:'a', posX:0, posY:0, player: null, val:'12'},
          {src:heart13, suit:'a', posX:0, posY:0, player: null, val:'13'},
          {src:heart14, suit:'a', posX:0, posY:0, player: null, val:'14'},
          {src:spade02, suit:'s', posX:0, posY:0, player: null, val:'02'},
          {src:spade03, suit:'s', posX:0, posY:0, player: null, val:'03'},
          {src:spade04, suit:'s', posX:0, posY:0, player: null, val:'04'},
          {src:spade05, suit:'s', posX:0, posY:0, player: null, val:'05'},
          {src:spade06, suit:'s', posX:0, posY:0, player: null, val:'06'},
          {src:spade07, suit:'s', posX:0, posY:0, player: null, val:'07'},
          {src:spade08, suit:'s', posX:0, posY:0, player: null, val:'08'},
          {src:spade09, suit:'s', posX:0, posY:0, player: null, val:'09'},
          {src:spade10, suit:'s', posX:0, posY:0, player: null, val:'10'},
          {src:spade11, suit:'s', posX:0, posY:0, player: null, val:'11'},
          {src:spade12, suit:'s', posX:0, posY:0, player: null, val:'12'},
          {src:spade13, suit:'s', posX:0, posY:0, player: null, val:'13'},
          {src:spade14, suit:'s', posX:0, posY:0, player: null, val:'14'}];

// proprietary array randomization algorithm
function cutAndShuffle() {
var num = getRandomIntInclusive(15, 35);
    deck = cards;
    botHalf = [];
    topHalf = [];
  for(var k = 0; k < num; k++){
    topHalf[k] = deck[k];
  }
botHalf = deck.slice(num);
var cutDeck = [];
  for(var z = 0; z < botHalf.length; z++){
    cutDeck[z] = botHalf[z];
  }
  for(var p = 0; p < topHalf.length; p++){
    cutDeck[p + botHalf.length] = topHalf[p];
  }
var start = [];
  for(var w = 0; w <= (cutDeck.length - 2) / 2; w++){
    start[w] = cutDeck[w];
  }
var rest = [];
  for(var x = 0; x <= start.length; x++){
    rest[x] = cutDeck[start.length + x];
  }
var permute = [];
  for(var y = 0; y < (cutDeck.length) / 2; y++){
    permute[2 * y] = rest[y];
  }
  for(var v = 0; v < (cutDeck.length) / 2; v++){
    permute[2 * v + 1] = start[v];
  }
cards = permute;
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cutAndShuffleAlot() {
var rndNum = getRandomIntInclusive(200, 300),
    count = 0;
  do{
    cutAndShuffle();
    count++;
  }
  while(count < rndNum);
}

function nextHandLayout() {
  //vid.src="movie.mp4";
  //vid.style.display='none';
  gameTo = document.getElementById('gameTo').value*1;
  if(grandTotal1>=gameTo) {
    ctx.save();
    ctx.clearRect(0, 0, 1100, 850);
    ctx.fillStyle = 'cornflowerblue';
    ctx.strokeStyle = 'black';
    ctx.font = 'bolder 80pt Verdana';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'left';
    ctx.globalAlpha = .8;
    ctx.shadowColor = 'black';
    ctx.shadowOffsetX = 4;
    ctx.shadowOffsetY = 4;
    ctx.shadowBlur = 4;
    ctx.fillText("Player 1 WINS!!", 70, 320);
    ctx.strokeText("Player 1 WINS!!", 70, 320);
    ctx.restore();
    timer1.style.visibility = 'hidden';
    timer2.style.visibility = 'hidden';
    animateRobot();
    return;
  }
  if(grandTotal2>=gameTo) {
    ctx.save();
    ctx.clearRect(0, 0, 1100, 850);
    ctx.fillStyle = 'cornflowerblue';
    ctx.strokeStyle = 'black';
    ctx.font = 'bolder 80pt Verdana';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'left';
    ctx.globalAlpha = .8;
    ctx.shadowColor = 'black';
    ctx.shadowOffsetX = 4;
    ctx.shadowOffsetY = 4;
    ctx.shadowBlur = 4;
    ctx.fillText("Player 2 WINS!!", 70, 320);
    ctx.strokeText("Player 2 WINS!!", 70, 320);
    ctx.restore();
    timer1.style.visibility = 'hidden';
    timer2.style.visibility = 'hidden';
    animateRobot();
    return;
  }
  timer1.style.visibility='visible';
  timer2.style.visibility='hidden';
  nxtRnd.style.visibility='hidden';
  deal.style.display='none';
  cutAndShuffleAlot();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  startTime1 = roundTime;
  startTime2 = roundTime;
  gameLayout();
}

// proprietary board layout--CLS, 2016--
function gameLayout() {
  ctx.clearRect(0, 0, canvas.width, 700);
  ctx.clearRect(445, 700, 220, 150);
  for(var x = 0; x < 5; x++) {
    ctx.drawImage(cards[x].src, x * 105 + 5, 5);
    cards[x].posX = x * 105 + 5;
    cards[x].posY = 5;
    cards[x].player = 1;
  }
  for(var x1 = 5; x1 < 10; x1++) {
    ctx.drawImage(cards[x1].src, (x1 - 5) * 105 + 5, 135);
    cards[x1].posX = (x1 - 5) * 105 + 5;
    cards[x1].posY = 135;
    cards[x1].player = 1;
  }
  for(var x2 = 10; x2 < 15; x2++) {
    ctx.drawImage(cards[x2].src, (x2 - 10) * 105 + 5, 265);
    cards[x2].posX = (x2 - 10) * 105 + 5;
    cards[x2].posY = 265;
    cards[x2].player = 1;
  }
  for(var x3 = 15; x3 < 20; x3++) {
    ctx.drawImage(cards[x3].src, (x3 - 15) * 105 + 5, 395);
    cards[x3].posX = (x3 - 15) * 105 + 5;
    cards[x3].posY = 395;
    cards[x3].player = 1;
  }
  for(var x4 = 20; x4 < 25; x4++) {
    ctx.drawImage(cards[x4].src, (x4 - 20) * 105 + 5, 525);
    cards[x4].posX = (x4 - 20) * 105 + 5;
    cards[x4].posY = 525;
    cards[x4].player = 1;
  }
  for(var x5 = 25; x5 < 27; x5++) {
    ctx.drawImage(cards[x5].src, (x5 - 25) * 105 + 450, 710);
    cards[x5].posX = (x5 - 25) * 105 + 450;
    cards[x5].posY = 710;
    cards[x5].player = null;
  }
  for(var x6 = 27; x6 < 32; x6++) {
    ctx.drawImage(cards[x6].src, (x6 - 27) * 105 + 575, 5);
    cards[x6].posX = (x6 - 27) * 105 + 575;
    cards[x6].posY = 5;
    cards[x6].player = 2;
  }
  for(var x7 = 32; x7 < 37; x7++) {
    ctx.drawImage(cards[x7].src, (x7 - 32) * 105 + 575, 135);
    cards[x7].posX = (x7 - 32) * 105 + 575;
    cards[x7].posY = 135;
    cards[x7].player = 2;
  }
  for(var x8 = 37; x8 < 42; x8++) {
    ctx.drawImage(cards[x8].src, (x8 - 37) * 105 + 575, 265);
    cards[x8].posX = (x8 - 37) * 105 + 575;
    cards[x8].posY = 265;
    cards[x8].player = 2;
  }
  for(var x9 = 42; x9 < 47; x9++) {
    ctx.drawImage(cards[x9].src, (x9 - 42) * 105 + 575, 395);
    cards[x9].posX = (x9 - 42) * 105 + 575;
    cards[x9].posY = 395;
    cards[x9].player = 2;
  }
  for(var x10 = 47; x10 < 52; x10++) {
    ctx.drawImage(cards[x10].src, (x10 - 47) * 105 + 575, 525);
    cards[x10].posX = (x10 - 47) * 105 + 575;
    cards[x10].posY = 525;
    cards[x10].player = 2; 
  }
}

// card-switching mouse event--102 LOC--
function eventMouseUp(event) {
  mouseX = event.pageX-15;
  mouseY = event.pageY-15;
  if(!paused1) {
    if(selectedList.length === 0) {
      for(var i = 0; i < 27; i++) {
        if((mouseX >= cards[i].posX - 2.5) &&
          (mouseX < cards[i].posX + 102.5) &&
          (mouseY >= cards[i].posY - 2.5) &&
          (mouseY < cards[i].posY + 127.5)) {
          selectedList.push(cards[i]);
          switch1 = i;
        }
      }
    } else if(selectedList.length === 1) {
      for(var j = 0; j < 27; j++) {
        if(((mouseX >= cards[j].posX - 2.5) &&
          (mouseX < cards[j].posX + 102.5) &&
          (mouseY >= cards[j].posY - 2.5) &&
          (mouseY < cards[j].posY + 127.5)) &&
          ((selectedList[0].player === cards[j].player) ||
            (cards[j].player === null) ||
            (selectedList[0].player === null))) {
          selectedList.push(cards[j]);
          switch2 = j;
        }
      }
    } else {
      ctx.lineWidth = 4;
      selectedList.pop(0);
      selectedList.pop(1);
    }
    if(selectedList.length === 1) {
      ctx.strokeStyle = "yellow";
      ctx.lineWidth = 4;
      ctx.strokeRect(selectedList[0].posX, selectedList[0].posY, 100, 125);
    } else if(selectedList.length === 2) {
      ctx.strokeStyle = "darkgray";
      ctx.lineWidth = 4;
      ctx.strokeRect(selectedList[0].posX, selectedList[0].posY, 100, 125);
      ctx.drawImage(cards[switch1].src, cards[switch2].posX, cards[switch2].posY);
      ctx.drawImage(cards[switch2].src, cards[switch1].posX, cards[switch1].posY);
      cards[switch1] = selectedList[1];
      cards[switch2] = selectedList[0];
      selectedList.pop(0);
      selectedList.pop(1);
      gameLayout();
    } else {
      ctx.lineWidth = 4;
      selectedList.pop(0);
      selectedList.pop(1);
    }
  }else if(!paused2){
    if(selectedList.length === 0) {
      for(var it = 25; it < cards.length; it++) {
        if((mouseX >= cards[it].posX - 2.5) &&
          (mouseX < cards[it].posX + 102.5) &&
          (mouseY >= cards[it].posY - 2.5) &&
          (mouseY < cards[it].posY + 127.5)) {
          selectedList.push(cards[it]);
          switch1 = it;
        }
      }
    } else if(selectedList.length === 1) {
      for(var jo = 25; jo < cards.length; jo++) {
        if(((mouseX >= cards[jo].posX - 2.5) &&
          (mouseX < cards[jo].posX + 102.5) &&
          (mouseY >= cards[jo].posY - 2.5) &&
          (mouseY < cards[jo].posY + 127.5)) &&
          ((selectedList[0].player === cards[jo].player) ||
            (cards[jo].player === null) ||
            (selectedList[0].player === null))) {
          selectedList.push(cards[jo]);
          switch2 = jo;
        }
      }
    } else {
      ctx.lineWidth = 4;
      selectedList.pop(0);
      selectedList.pop(1);
    }
    if(selectedList.length === 1) {
      ctx.strokeStyle = "yellow";
      ctx.lineWidth = 4;
      ctx.strokeRect(selectedList[0].posX, selectedList[0].posY, 100, 125);
    } else if(selectedList.length === 2) {
      ctx.strokeStyle = "darkgray";
      ctx.lineWidth = 4;
      ctx.strokeRect(selectedList[0].posX, selectedList[0].posY, 100, 125);
      ctx.drawImage(cards[switch1].src, cards[switch2].posX, cards[switch2].posY);
      ctx.drawImage(cards[switch2].src, cards[switch1].posX, cards[switch1].posY);
      cards[switch1] = selectedList[1];
      cards[switch2] = selectedList[0];
      selectedList.pop(0);
      selectedList.pop(1);
      gameLayout();
    } else {
      ctx.lineWidth = 4;
      selectedList.pop(0);
      selectedList.pop(1);
    }
  }
}

// animated countdown timers in canvas... 
function animate1(handle1) {
  if(!paused1) {
    update1();
    countdown1();
    requestAnimationFrame(animate1);
  }
}

function update1() {end1 = new Date().getTime();}

function countdown1() {
msg1 = startTime1 - end1 + start1;
ctx.fillStyle = 'red';
ctx.font = 'bold 24pt Verdana';
ctx.textBaseline = 'bottom';
ctx.textAlign = 'left';
ctx.clearRect(200, 700, 225, 50);
ctx.fillText(msg1, 230, 755);
  if(msg1 <= 0) {
    msg1 = 0;
    timer1.value = 'P1 Start';
    paused1 = true;
    startTime1 = msg1;
    cancelAnimationFrame(handle1);
    ctx.clearRect(200, 700, 200, 50);
    ctx.fillText("TIME'S UP", 230, 755);
    ctx.strokeStyle = "darkgray";
    timer1.style.visibility='hidden';
    timer2.style.visibility='visible';
    gameTo = document.getElementById('gameTo').value*1;
    ctx.lineWidth = 4;
    if(selectedList[0]){
      ctx.strokeRect(selectedList[0].posX, selectedList[0].posY, 100, 125);
      selectedList.pop(0);
    }
  }
}

function animate2(handle2) {
  if(!paused2) {
    update2();
    countdown2();
    requestAnimationFrame(animate2);
  }
}

function update2() {end2 = new Date().getTime();}

function countdown2() {
msg2 = startTime2 - end2 + start2;
ctx.fillStyle = 'red';
ctx.font = 'bold 24pt Verdana';
ctx.textBaseline = 'bottom';
ctx.textAlign = 'left';
ctx.clearRect(800, 700, 225, 50);
ctx.fillText(msg2, 830, 755);
  if(msg2 <= 0) {
    msg2 = 0;
    timer2.value = 'P2 Start';
    paused2 = true;
    startTime2 = msg2;
    cancelAnimationFrame(handle2);
    ctx.clearRect(800, 700, 200, 50);
    ctx.fillText("TIME'S UP", 830, 755);
    ctx.strokeStyle = "darkgray";
    ctx.lineWidth = 4;
    timer2.style.visibility='hidden';
    if(selectedList[0]){
      ctx.strokeRect(selectedList[0].posX, selectedList[0].posY, 100, 125);
      selectedList.pop(0);
    }
    round++;
    getHands();
  }
}

function reset() {
  if(window.confirm("New Game?")) {
    document.location.reload();
  }
}

newGame.onclick = reset;
deal.onclick = nextHandLayout;
nxtRnd.onclick = nextHandLayout;
canvas.addEventListener("mouseup", eventMouseUp, false);

timer1.onclick = function (e) {
  if(paused1) {
    timer1.value = 'Pause';
    paused1 = false;
    start1 = new Date().getTime();
    requestAnimationFrame(animate1);
  } else {
    timer1.value = 'P1 Start';
    paused1 = true;
    startTime1 = msg1;
    cancelAnimationFrame(handle1);
  }
};

timer2.onclick = function (e) {
  if(paused1) {
    if(paused2) {
      timer2.value = 'Pause';
      paused2 = false;
      start2 = new Date().getTime();
      requestAnimationFrame(animate2);
    } else {
      timer2.value = 'P2 Start';
      paused2 = true;
      startTime2 = msg2;
      cancelAnimationFrame(handle2);
    }
  }
};

// getting the hands & scoring the current round
function getHands() {
// entering fields of scoring table
var p1r01 = document.getElementById('p1r01');
var p1r02 = document.getElementById('p1r02');
var p1r03 = document.getElementById('p1r03');
var p1r04 = document.getElementById('p1r04');
var p1r05 = document.getElementById('p1r05');
var p1r06 = document.getElementById('p1r06');
var p1r07 = document.getElementById('p1r07');
var p1r08 = document.getElementById('p1r08');
var p1r09 = document.getElementById('p1r09');
var p1r10 = document.getElementById('p1r10');
var p1r11 = document.getElementById('p1r11');
var p1r12 = document.getElementById('p1r12');
var p1r13 = document.getElementById('p1r13');
var p1r14 = document.getElementById('p1r14');
var p1r15 = document.getElementById('p1r15');
var p1r16 = document.getElementById('p1r16');
var p1r17 = document.getElementById('p1r17');
var p1r18 = document.getElementById('p1r18');
var p1r19 = document.getElementById('p1r19');
var p1r20 = document.getElementById('p1r20');
var p1r21 = document.getElementById('p1r21');
var p1r22 = document.getElementById('p1r22');
var p2r01 = document.getElementById('p2r01');
var p2r02 = document.getElementById('p2r02');
var p2r03 = document.getElementById('p2r03');
var p2r04 = document.getElementById('p2r04');
var p2r05 = document.getElementById('p2r05');
var p2r06 = document.getElementById('p2r06');
var p2r07 = document.getElementById('p2r07');
var p2r08 = document.getElementById('p2r08');
var p2r09 = document.getElementById('p2r09');
var p2r10 = document.getElementById('p2r10');
var p2r11 = document.getElementById('p2r11');
var p2r12 = document.getElementById('p2r12');
var p2r13 = document.getElementById('p2r13');
var p2r14 = document.getElementById('p2r14');
var p2r15 = document.getElementById('p2r15');
var p2r16 = document.getElementById('p2r16');
var p2r17 = document.getElementById('p2r17');
var p2r18 = document.getElementById('p2r18');
var p2r19 = document.getElementById('p2r19');
var p2r20 = document.getElementById('p2r20');
var p2r21 = document.getElementById('p2r21');
var p2r22 = document.getElementById('p2r22');
var p1gt  = document.getElementById('p1gt' );
var p2gt  = document.getElementById('p2gt' );
// setting each hand for logical comparison 
p1h1 =  [ cards[0 ].suit + cards[0 ].val,cards[1 ].suit + cards[1 ].val,cards[2 ].suit + cards[2 ].val,
          cards[3 ].suit + cards[3 ].val,cards[4 ].suit + cards[4 ].val].sort().join().toString();
p2h1 =  [ cards[27].suit + cards[27].val,cards[28].suit + cards[28].val,cards[29].suit + cards[29].val,
          cards[30].suit + cards[30].val,cards[31].suit + cards[31].val].sort().join().toString();
p1h2 =  [ cards[5 ].suit + cards[5 ].val,cards[6 ].suit + cards[6 ].val,cards[7 ].suit + cards[7 ].val,
          cards[8 ].suit + cards[8 ].val,cards[9 ].suit + cards[9 ].val].sort().join().toString();
p2h2 =  [ cards[32].suit + cards[32].val,cards[33].suit + cards[33].val,cards[34].suit + cards[34].val,
          cards[35].suit + cards[35].val,cards[36].suit + cards[36].val].sort().join().toString();
p1h3 =  [ cards[10].suit + cards[10].val,cards[11].suit + cards[11].val,cards[12].suit + cards[12].val,
          cards[13].suit + cards[13].val,cards[14].suit + cards[14].val].sort().join().toString();
p2h3 =  [ cards[37].suit + cards[37].val,cards[38].suit + cards[38].val,cards[39].suit + cards[39].val,
          cards[40].suit + cards[40].val,cards[41].suit + cards[41].val].sort().join().toString();
p1h4 =  [ cards[15].suit + cards[15].val,cards[16].suit + cards[16].val,cards[17].suit + cards[17].val,
          cards[18].suit + cards[18].val,cards[19].suit + cards[19].val].sort().join().toString();
p2h4 =  [ cards[42].suit + cards[42].val,cards[43].suit + cards[43].val,cards[44].suit + cards[44].val,
          cards[45].suit + cards[45].val,cards[46].suit + cards[46].val].sort().join().toString();
p1h5 =  [ cards[20].suit + cards[20].val,cards[21].suit + cards[21].val,cards[22].suit + cards[22].val,
          cards[23].suit + cards[23].val,cards[24].suit + cards[24].val].sort().join().toString();
p2h5 =  [ cards[47].suit + cards[47].val,cards[48].suit + cards[48].val,cards[49].suit + cards[49].val,
          cards[50].suit + cards[50].val,cards[51].suit + cards[51].val].sort().join().toString();
p1h6 =  [ cards[0 ].suit + cards[0 ].val,cards[5 ].suit + cards[5 ].val,cards[10].suit + cards[10].val,
          cards[15].suit + cards[15].val,cards[20].suit + cards[20].val].sort().join().toString();
p2h6 =  [ cards[27].suit + cards[27].val,cards[32].suit + cards[32].val,cards[37].suit + cards[37].val,
          cards[42].suit + cards[42].val,cards[47].suit + cards[47].val].sort().join().toString();
p1h7 =  [ cards[1 ].suit + cards[1 ].val,cards[6 ].suit + cards[6 ].val,cards[11].suit + cards[11].val,
          cards[16].suit + cards[16].val,cards[21].suit + cards[21].val].sort().join().toString();
p2h7 =  [ cards[28].suit + cards[28].val,cards[33].suit + cards[33].val,cards[38].suit + cards[38].val,
          cards[43].suit + cards[43].val,cards[48].suit + cards[48].val].sort().join().toString();
p1h8 =  [ cards[2 ].suit + cards[2 ].val,cards[7 ].suit + cards[7 ].val,cards[12].suit + cards[12].val,
          cards[17].suit + cards[17].val,cards[22].suit + cards[22].val].sort().join().toString();
p2h8 =  [ cards[29].suit + cards[29].val,cards[34].suit + cards[34].val,cards[39].suit + cards[39].val,
          cards[44].suit + cards[44].val,cards[49].suit + cards[49].val].sort().join().toString();
p1h9 =  [ cards[3 ].suit + cards[3 ].val,cards[8 ].suit + cards[8 ].val,cards[13].suit + cards[13].val,
          cards[18].suit + cards[18].val,cards[23].suit + cards[23].val].sort().join().toString();
p2h9 =  [ cards[30].suit + cards[30].val,cards[35].suit + cards[35].val,cards[40].suit + cards[40].val,
          cards[45].suit + cards[45].val,cards[50].suit + cards[50].val].sort().join().toString();
p1h10 = [ cards[4 ].suit + cards[4 ].val,cards[9 ].suit + cards[9 ].val,cards[14].suit + cards[14].val,
          cards[19].suit + cards[19].val,cards[24].suit + cards[24].val].sort().join().toString();
p2h10 = [ cards[31].suit + cards[31].val,cards[36].suit + cards[36].val,cards[41].suit + cards[41].val,
          cards[46].suit + cards[46].val,cards[51].suit + cards[51].val].sort().join().toString();
p1h11 = [ cards[0 ].suit + cards[0 ].val,cards[6 ].suit + cards[6 ].val,cards[12].suit + cards[12].val,
          cards[18].suit + cards[18].val,cards[24].suit + cards[24].val].sort().join().toString();
p2h11 = [ cards[27].suit + cards[27].val,cards[33].suit + cards[33].val,cards[39].suit + cards[39].val,
          cards[45].suit + cards[45].val,cards[51].suit + cards[51].val].sort().join().toString();
p1h12 = [ cards[4 ].suit + cards[4 ].val,cards[8 ].suit + cards[8 ].val,cards[12].suit + cards[12].val,
          cards[16].suit + cards[16].val,cards[20].suit + cards[20].val].sort().join().toString();
p2h12 = [ cards[31].suit + cards[31].val,cards[35].suit + cards[35].val,cards[39].suit + cards[39].val,
          cards[43].suit + cards[43].val,cards[47].suit + cards[47].val].sort().join().toString();
// checking booleans for winner of each hand
scoreRound[0 ] = compHands(p1h1,  p2h1  );
scoreRound[1 ] = compHands(p1h2,  p2h2  );
scoreRound[2 ] = compHands(p1h3,  p2h3  );
scoreRound[3 ] = compHands(p1h4,  p2h4  );
scoreRound[4 ] = compHands(p1h5,  p2h5  );
scoreRound[5 ] = compHands(p1h6,  p2h6  );
scoreRound[6 ] = compHands(p1h7,  p2h7  );
scoreRound[7 ] = compHands(p1h8,  p2h8  );
scoreRound[8 ] = compHands(p1h9,  p2h9  );
scoreRound[9 ] = compHands(p1h10, p2h10 );
scoreRound[10] = compHands(p1h11, p2h11 );
scoreRound[11] = compHands(p1h12, p2h12 );
ctx.save();
ctx.fillStyle = 'black';
ctx.font = 'bold 14pt Verdana';
// the actual doling out of points...
ctx.clearRect(10,680,1100,200);
if(scoreRound[0 ]==="cats"){p1Score++;p2Score++;
ctx.fillText("Hand one was a tie.",10,690);}
if(scoreRound[1 ]==="cats"){p1Score++;p2Score++;
ctx.fillText("Hand two was a tie.",10,715);}
if(scoreRound[2 ]==="cats"){p1Score++;p2Score++;
ctx.fillText("Hand three was a tie.",10,740);}
if(scoreRound[3 ]==="cats"){p1Score++;p2Score++;
ctx.fillText("Hand four was a tie.",10,765);}
if(scoreRound[4 ]==="cats"){p1Score++;p2Score++;
ctx.fillText("Hand five was a tie.",10,790);}
if(scoreRound[5 ]==="cats"){p1Score++;p2Score++;
ctx.fillText("Hand six was a tie.",10,815);}
if(scoreRound[6 ]==="cats"){p1Score++;p2Score++;
ctx.fillText("Hand seven was a tie.",575,690);}
if(scoreRound[7 ]==="cats"){p1Score++;p2Score++;
ctx.fillText("Hand eight was a tie.",575,715);}
if(scoreRound[8 ]==="cats"){p1Score++;p2Score++;
ctx.fillText("Hand nine was a tie.",575,740);}
if(scoreRound[9 ]==="cats"){p1Score++;p2Score++;
ctx.fillText("Hand ten was a tie.",575,765);}
if(scoreRound[10]==="cats"){p1Score++;p2Score++;
ctx.fillText("Hand eleven was a tie.",575,790);}
if(scoreRound[11]==="cats"){p1Score++;p2Score++;
ctx.fillText("Hand twelve was a tie.",575,815);}
if(scoreRound[0 ]===true  ){p1Score++;
ctx.fillText("Hand one went to Player One.",10,690);}
if(scoreRound[1 ]===true  ){p1Score++;
ctx.fillText("Hand two went to Player One.",10,715);}
if(scoreRound[2 ]===true  ){p1Score++;
ctx.fillText("Hand three went to Player One.",10,740);}
if(scoreRound[3 ]===true  ){p1Score++;
ctx.fillText("Hand four went to Player One.",10,765);}
if(scoreRound[4 ]===true  ){p1Score++;
ctx.fillText("Hand five went to Player One.",10,790);}
if(scoreRound[5 ]===true  ){p1Score++;
ctx.fillText("Hand six went to Player One.",10,815);}
if(scoreRound[6 ]===true  ){p1Score++;
ctx.fillText("Hand seven went to Player One.",575,690);}
if(scoreRound[7 ]===true  ){p1Score++;
ctx.fillText("Hand eight went to Player One.",575,715);}
if(scoreRound[8 ]===true  ){p1Score++;
ctx.fillText("Hand nine went to Player One.",575,740);}
if(scoreRound[9 ]===true  ){p1Score++;
ctx.fillText("Hand ten went to Player One.",575,765);}
if(scoreRound[10]===true  ){p1Score++;
ctx.fillText("Hand eleven went to Player One.",575,790);}
if(scoreRound[11]===true  ){p1Score++;
ctx.fillText("Hand twelve went to Player One.",575,815);}
if(scoreRound[0 ]===false ){p2Score++;
ctx.fillText("Hand one went to Player Two.",10,690);}
if(scoreRound[1 ]===false ){p2Score++;
ctx.fillText("Hand two went to Player Two.",10,715);}
if(scoreRound[2 ]===false ){p2Score++;
ctx.fillText("Hand three went to Player Two.",10,740);}
if(scoreRound[3 ]===false ){p2Score++;
ctx.fillText("Hand four went to Player Two.",10,765);}
if(scoreRound[4 ]===false ){p2Score++;
ctx.fillText("Hand five went to Player Two.",10,790);}
if(scoreRound[5 ]===false ){p2Score++;
ctx.fillText("Hand six went to Player Two.",10,815);}
if(scoreRound[6 ]===false ){p2Score++;
ctx.fillText("Hand seven went to Player Two.",575,690);}
if(scoreRound[7 ]===false ){p2Score++;
ctx.fillText("Hand eight went to Player Two.",575,715);}
if(scoreRound[8 ]===false ){p2Score++;
ctx.fillText("Hand nine went to Player Two.",575,740);}
if(scoreRound[9 ]===false ){p2Score++;
ctx.fillText("Hand ten went to Player Two.",575,765);}
if(scoreRound[10]===false ){p2Score++;
ctx.fillText("Hand eleven went to Player Two.",575,790);}
if(scoreRound[11]===false ){p2Score++;
ctx.fillText("Hand twelve went to Player Two.",575,815);
ctx.restore();
//setTimeout(nextHandLayout(),10000);
}
nxtRnd.style.visibility='visible';
// awarding the difference: player1 positive--player2 negative--ties zero...
if((p1Score-p2Score)>0){p1Score=(p1Score-p2Score);p2Score=0;}
if((p1Score-p2Score)<0){p2Score=(p1Score-p2Score)*-1;p1Score=0;}
if(p1Score===p2Score){p1Score=0;p2Score=0;}
// writing scores to table
if(round===1 ){p1r01.innerHTML=p1Score;p2r01.innerHTML=p2Score;}
if(round===2 ){p1r02.innerHTML=p1Score;p2r02.innerHTML=p2Score;}
if(round===3 ){p1r03.innerHTML=p1Score;p2r03.innerHTML=p2Score;}
if(round===4 ){p1r04.innerHTML=p1Score;p2r04.innerHTML=p2Score;}
if(round===5 ){p1r05.innerHTML=p1Score;p2r05.innerHTML=p2Score;}
if(round===6 ){p1r06.innerHTML=p1Score;p2r06.innerHTML=p2Score;}
if(round===7 ){p1r07.innerHTML=p1Score;p2r07.innerHTML=p2Score;}
if(round===8 ){p1r08.innerHTML=p1Score;p2r08.innerHTML=p2Score;}
if(round===9 ){p1r09.innerHTML=p1Score;p2r09.innerHTML=p2Score;}
if(round===10){p1r10.innerHTML=p1Score;p2r10.innerHTML=p2Score;}
if(round===11){p1r11.innerHTML=p1Score;p2r11.innerHTML=p2Score;}
if(round===12){p1r12.innerHTML=p1Score;p2r12.innerHTML=p2Score;}
if(round===13){p1r13.innerHTML=p1Score;p2r13.innerHTML=p2Score;}
if(round===14){p1r14.innerHTML=p1Score;p2r14.innerHTML=p2Score;}
if(round===15){p1r15.innerHTML=p1Score;p2r15.innerHTML=p2Score;}
if(round===16){p1r16.innerHTML=p1Score;p2r16.innerHTML=p2Score;}
if(round===17){p1r17.innerHTML=p1Score;p2r17.innerHTML=p2Score;}
if(round===18){p1r18.innerHTML=p1Score;p2r18.innerHTML=p2Score;}
if(round===19){p1r19.innerHTML=p1Score;p2r19.innerHTML=p2Score;}
if(round===20){p1r20.innerHTML=p1Score;p2r20.innerHTML=p2Score;}
if(round===21){p1r21.innerHTML=p1Score;p2r21.innerHTML=p2Score;}
if(round===22){p1r22.innerHTML=p1Score;p2r22.innerHTML=p2Score;}
grandTotal1+=p1Score;
grandTotal2+=p2Score;
p1gt.innerHTML=grandTotal1;
p2gt.innerHTML=grandTotal2;
// resetting player scores for next round
p1Score=0;
p2Score=0;
}

// proprietary poker logic--requires pokerHands.js
function compHands(hand1, hand2) {
h1PairVal=0;
h2PairVal=0;
hiPairVal2=0;
hiPairVal1=0;
loPairVal1=0;
loPairVal2=0;
kicker1=0;
kicker2=0;
h1Vals = [];
h1Suits = false;
h2Vals = [];
h2Suits = false;
//creating simple value arrays for each hand
h1Vals[0] = hand1.slice(1,3);
h1Vals[1] = hand1.slice(5,7);
h1Vals[2] = hand1.slice(9,11);
h1Vals[3] = hand1.slice(13,15);
h1Vals[4] = hand1.slice(17,19);
h1Suits   = hand1.charAt(0)==hand1.charAt(4)&&hand1.charAt(4)==hand1.charAt(8)&&hand1.charAt(8)==hand1.charAt(12)&&hand1.charAt(12)==hand1.charAt(16); //boolean
h2Vals[0] = hand2.slice(1,3);
h2Vals[1] = hand2.slice(5,7);
h2Vals[2] = hand2.slice(9,11);
h2Vals[3] = hand2.slice(13,15);
h2Vals[4] = hand2.slice(17,19);
h2Suits   = hand2.charAt(0)==hand2.charAt(4)&&hand2.charAt(4)==hand2.charAt(8)&&hand2.charAt(8)==hand2.charAt(12)&&hand2.charAt(12)==hand2.charAt(16); //boolean
h1Vals=h1Vals.sort();
h2Vals=h2Vals.sort();
// who wins?
  // royal flush look-up table
       if((        rf.indexOf(hand1)>-1)&&(        rf.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...      
  // straight flush look-up table
  else if((        rf.indexOf(hand2)>-1)&&(        rf.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((       sFK.indexOf(hand1)>-1)&&(       sFK.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((       sFK.indexOf(hand2)>-1)&&(       sFK.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((       sFQ.indexOf(hand1)>-1)&&(       sFQ.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((       sFQ.indexOf(hand2)>-1)&&(       sFQ.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((       sFJ.indexOf(hand1)>-1)&&(       sFJ.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((       sFJ.indexOf(hand2)>-1)&&(       sFJ.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((      sF10.indexOf(hand1)>-1)&&(      sF10.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((      sF10.indexOf(hand2)>-1)&&(      sF10.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((       sF9.indexOf(hand1)>-1)&&(       sF9.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((       sF9.indexOf(hand2)>-1)&&(       sF9.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((       sF8.indexOf(hand1)>-1)&&(       sF8.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((       sF8.indexOf(hand2)>-1)&&(       sF8.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((       sF7.indexOf(hand1)>-1)&&(       sF7.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((       sF7.indexOf(hand2)>-1)&&(       sF7.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((       sF6.indexOf(hand1)>-1)&&(       sF6.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((       sF6.indexOf(hand2)>-1)&&(       sF6.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((       sF5.indexOf(hand1)>-1)&&(       sF5.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((       sF5.indexOf(hand2)>-1)&&(       sF5.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  // 4 of a kind look-up table
  else if((     fourA.indexOf(hand1)>-1)&&(     fourA.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((     fourA.indexOf(hand2)>-1)&&(     fourA.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((     fourK.indexOf(hand1)>-1)&&(     fourK.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((     fourK.indexOf(hand2)>-1)&&(     fourK.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((     fourQ.indexOf(hand1)>-1)&&(     fourQ.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((     fourQ.indexOf(hand2)>-1)&&(     fourQ.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((     fourJ.indexOf(hand1)>-1)&&(     fourJ.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((     fourJ.indexOf(hand2)>-1)&&(     fourJ.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((     fourT.indexOf(hand1)>-1)&&(     fourT.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((     fourT.indexOf(hand2)>-1)&&(     fourT.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((     four9.indexOf(hand1)>-1)&&(     four9.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((     four9.indexOf(hand2)>-1)&&(     four9.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((     four8.indexOf(hand1)>-1)&&(     four8.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((     four8.indexOf(hand2)>-1)&&(     four8.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((     four7.indexOf(hand1)>-1)&&(     four7.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((     four7.indexOf(hand2)>-1)&&(     four7.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((     four6.indexOf(hand1)>-1)&&(     four6.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((     four6.indexOf(hand2)>-1)&&(     four6.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((     four5.indexOf(hand1)>-1)&&(     four5.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((     four5.indexOf(hand2)>-1)&&(     four5.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((     four4.indexOf(hand1)>-1)&&(     four4.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((     four4.indexOf(hand2)>-1)&&(     four4.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((     four3.indexOf(hand1)>-1)&&(     four3.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((     four3.indexOf(hand2)>-1)&&(     four3.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((     four2.indexOf(hand1)>-1)&&(     four2.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((     four2.indexOf(hand2)>-1)&&(     four2.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  // full-house look-up table
  else if((  acesOver.indexOf(hand1)>-1)&&(  acesOver.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((  acesOver.indexOf(hand2)>-1)&&(  acesOver.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if(( kingsOver.indexOf(hand1)>-1)&&( kingsOver.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if(( kingsOver.indexOf(hand2)>-1)&&( kingsOver.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((queensOver.indexOf(hand1)>-1)&&(queensOver.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((queensOver.indexOf(hand2)>-1)&&(queensOver.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if(( jacksOver.indexOf(hand1)>-1)&&( jacksOver.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if(( jacksOver.indexOf(hand2)>-1)&&( jacksOver.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((  tensOver.indexOf(hand1)>-1)&&(  tensOver.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((  tensOver.indexOf(hand2)>-1)&&(  tensOver.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if(( ninesOver.indexOf(hand1)>-1)&&( ninesOver.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if(( ninesOver.indexOf(hand2)>-1)&&( ninesOver.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((eightsOver.indexOf(hand1)>-1)&&(eightsOver.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((eightsOver.indexOf(hand2)>-1)&&(eightsOver.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((sevensOver.indexOf(hand1)>-1)&&(sevensOver.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((sevensOver.indexOf(hand2)>-1)&&(sevensOver.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if(( sixesOver.indexOf(hand1)>-1)&&( sixesOver.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if(( sixesOver.indexOf(hand2)>-1)&&( sixesOver.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if(( fivesOver.indexOf(hand1)>-1)&&( fivesOver.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if(( fivesOver.indexOf(hand2)>-1)&&( fivesOver.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if(( foursOver.indexOf(hand1)>-1)&&( foursOver.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if(( foursOver.indexOf(hand2)>-1)&&( foursOver.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((threesOver.indexOf(hand1)>-1)&&(threesOver.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((threesOver.indexOf(hand2)>-1)&&(threesOver.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  else if((  twosOver.indexOf(hand1)>-1)&&(  twosOver.indexOf(hand2)<0))return true;  // direct comparison of hands by array presence...
  else if((  twosOver.indexOf(hand2)>-1)&&(  twosOver.indexOf(hand1)<0))return false; // direct comparison of hands by array presence...
  // flush logic
  else if(h1Suits && h2Suits) {                                                        
    if(h1Vals[4]>h2Vals[4])return true;                                            
    if(h1Vals[4]<h2Vals[4])return false;                                           
    if(h1Vals[3]>h2Vals[3])return true;                                            
    if(h1Vals[3]<h2Vals[3])return false;                                           
    if(h1Vals[2]>h2Vals[2])return true;                                               // flush comparison (replaces 3200 LOC!!)                                         
    if(h1Vals[2]<h2Vals[2])return false;                                           
    if(h1Vals[1]>h2Vals[1])return true;                                            
    if(h1Vals[1]<h2Vals[1])return false;                                           
    if(h1Vals[0]>h2Vals[0])return true;                                            
    if(h1Vals[0]<h2Vals[0])return false;                                           
  }                                                                                  
  else if(h1Suits)return true;                                                       
  else if(h2Suits)return false;                                                      
  // straight logic
  else if((((h1Vals[0]*1+1===h1Vals[1]*1)&&(h1Vals[1]*1+1===h1Vals[2]*1)&&(h1Vals[2]*1+1===h1Vals[3]*1)&&(h1Vals[3]*1+1===h1Vals[4]*1))&&((h2Vals[0]*1+1===h2Vals[1]*1)&&(h2Vals[1]*1+1===h2Vals[2]*1)&&(h2Vals[2]*1+1===h2Vals[3]*1)&&(h2Vals[3]*1+1===h2Vals[4]*1)))&&(h1Vals[4]>h2Vals[4]))return true; 
  else if((((h1Vals[0]*1+1===h1Vals[1]*1)&&(h1Vals[1]*1+1===h1Vals[2]*1)&&(h1Vals[2]*1+1===h1Vals[3]*1)&&(h1Vals[3]*1+1===h1Vals[4]*1))&&((h2Vals[0]*1+1===h2Vals[1]*1)&&(h2Vals[1]*1+1===h2Vals[2]*1)&&(h2Vals[2]*1+1===h2Vals[3]*1)&&(h2Vals[3]*1+1===h2Vals[4]*1)))&&(h1Vals[4]<h2Vals[4]))return false; 
  else if((((h1Vals[0]*1+1===h1Vals[1]*1)&&(h1Vals[1]*1+1===h1Vals[2]*1)&&(h1Vals[2]*1+1===h1Vals[3]*1)&&(h1Vals[3]*1+1===h1Vals[4]*1))&&((h2Vals[0]*1+1===h2Vals[1]*1)&&(h2Vals[1]*1+1===h2Vals[2]*1)&&(h2Vals[2]*1+1===h2Vals[3]*1)&&(h2Vals[3]*1+1===h2Vals[4]*1)))&&(h1Vals[4]==h2Vals[4]))return "cats"; 
  else if((h1Vals[0]*1+1===h1Vals[1]*1)&&(h1Vals[1]*1+1===h1Vals[2]*1)&&(h1Vals[2]*1+1===h1Vals[3]*1)&&(h1Vals[3]*1+1===h1Vals[4]*1))return true; 
  else if((h2Vals[0]*1+1===h2Vals[1]*1)&&(h2Vals[1]*1+1===h2Vals[2]*1)&&(h2Vals[2]*1+1===h2Vals[3]*1)&&(h2Vals[3]*1+1===h2Vals[4]*1))return false; 
  // straight to five logic--ace low
  else if(((h1Vals[0]*1+1===h1Vals[1]*1)&&(h1Vals[1]*1+1===h1Vals[2]*1)&&(h1Vals[2]*1+1===h1Vals[3]*1)&&(h1Vals[3]*1+9===h1Vals[4]*1))&&((h2Vals[0]*1+1===h2Vals[1]*1)&&(h2Vals[1]*1+1===h2Vals[2]*1)&&(h2Vals[2]*1+1===h2Vals[3]*1)&&(h2Vals[3]*1+9===h2Vals[4]*1)))return "cats"; 
  else if((h1Vals[0]*1+1===h1Vals[1]*1)&&(h1Vals[1]*1+1===h1Vals[2]*1)&&(h1Vals[2]*1+1===h1Vals[3]*1)&&(h1Vals[3]*1+9===h1Vals[4]*1))return true; 
  else if((h2Vals[0]*1+1===h2Vals[1]*1)&&(h2Vals[1]*1+1===h2Vals[2]*1)&&(h2Vals[2]*1+1===h2Vals[3]*1)&&(h2Vals[3]*1+9===h2Vals[4]*1))return false; 
  // three of a kind logic
  else if(((((h1Vals[0]===h1Vals[1])&&(h1Vals[1]===h1Vals[2]))||((h1Vals[1]===h1Vals[2])&&(h1Vals[2]===h1Vals[3]))||((h1Vals[2]===h1Vals[3])&&(h1Vals[3]===h1Vals[4])))&&(((h2Vals[0]===h2Vals[1])&&(h2Vals[1]===h2Vals[2]))||((h2Vals[1]===h2Vals[2])&&(h2Vals[2]===h2Vals[3]))||((h2Vals[2]===h2Vals[3])&&(h2Vals[3]===h2Vals[4]))))&&(h1Vals[2]>h2Vals[2]))return true;
  else if(((((h1Vals[0]===h1Vals[1])&&(h1Vals[1]===h1Vals[2]))||((h1Vals[1]===h1Vals[2])&&(h1Vals[2]===h1Vals[3]))||((h1Vals[2]===h1Vals[3])&&(h1Vals[3]===h1Vals[4])))&&(((h2Vals[0]===h2Vals[1])&&(h2Vals[1]===h2Vals[2]))||((h2Vals[1]===h2Vals[2])&&(h2Vals[2]===h2Vals[3]))||((h2Vals[2]===h2Vals[3])&&(h2Vals[3]===h2Vals[4]))))&&(h1Vals[2]<h2Vals[2]))return false;
  else if(((h1Vals[0]===h1Vals[1])&&(h1Vals[1]===h1Vals[2]))||((h1Vals[1]===h1Vals[2])&&(h1Vals[2]===h1Vals[3]))||((h1Vals[2]===h1Vals[3])&&(h1Vals[3]===h1Vals[4])))return true;
  else if(((h2Vals[0]===h2Vals[1])&&(h2Vals[1]===h2Vals[2]))||((h2Vals[1]===h2Vals[2])&&(h2Vals[2]===h2Vals[3]))||((h2Vals[2]===h2Vals[3])&&(h2Vals[3]===h2Vals[4])))return false;
  // two-pair logic
  if(((h1Vals[0]===h1Vals[1])&&(h1Vals[2]===h1Vals[3]))&&(h1Vals[2]>h1Vals[1])){hiPairVal1=h1Vals[2],loPairVal1=h1Vals[1];}
  else if(((h1Vals[0]===h1Vals[1])&&(h1Vals[2]===h1Vals[3]))&&(h1Vals[2]<h1Vals[1])){hiPairVal1=h1Vals[1],loPairVal1=h1Vals[2];}
  if(((h1Vals[1]===h1Vals[2])&&(h1Vals[3]===h1Vals[4]))&&(h1Vals[3]>h1Vals[1])){hiPairVal1=h1Vals[3],loPairVal1=h1Vals[1];}
  else if(((h1Vals[1]===h1Vals[2])&&(h1Vals[3]===h1Vals[4]))&&(h1Vals[3]<h1Vals[1])){hiPairVal1=h1Vals[1],loPairVal1=h1Vals[3];}
  if(((h1Vals[0]===h1Vals[1])&&(h1Vals[3]===h1Vals[4]))&&(h1Vals[3]>h1Vals[1])){hiPairVal1=h1Vals[3],loPairVal1=h1Vals[1];}
  else if(((h1Vals[0]===h1Vals[1])&&(h1Vals[3]===h1Vals[4]))&&(h1Vals[3]<h1Vals[1])){hiPairVal1=h1Vals[1],loPairVal1=h1Vals[3];}
  if(loPairVal1 !== 0 && hiPairVal1 !== 0)
  for(i=0;i<5;i++){
    if((h1Vals[i]!==hiPairVal1)&&(h1Vals[i]!==loPairVal1))kicker1=h1Vals[i];
  }
  
  if(((h2Vals[0]===h2Vals[1])&&(h2Vals[2]===h2Vals[3]))&&(h2Vals[2]>h2Vals[1])){hiPairVal2=h2Vals[2],loPairVal2=h2Vals[1];}
  else if(((h2Vals[0]===h2Vals[1])&&(h2Vals[2]===h2Vals[3]))&&(h2Vals[2]<h2Vals[1])){hiPairVal2=h2Vals[1],loPairVal2=h2Vals[2];}
  if(((h2Vals[1]===h2Vals[2])&&(h2Vals[3]===h2Vals[4]))&&(h2Vals[3]>h2Vals[1])){hiPairVal2=h2Vals[3],loPairVal2=h2Vals[1];}
  else if(((h2Vals[1]===h2Vals[2])&&(h2Vals[3]===h2Vals[4]))&&(h2Vals[3]<h2Vals[1])){hiPairVal2=h2Vals[1],loPairVal2=h2Vals[3];}
  if(((h2Vals[0]===h2Vals[1])&&(h2Vals[3]===h2Vals[4]))&&(h2Vals[3]>h2Vals[1])){hiPairVal2=h2Vals[3],loPairVal2=h2Vals[1];}
  else if(((h2Vals[0]===h2Vals[1])&&(h2Vals[3]===h2Vals[4]))&&(h2Vals[3]<h2Vals[1])){hiPairVal2=h2Vals[1],loPairVal2=h2Vals[3];}
  if(loPairVal2 !== 0 && hiPairVal2 !== 0)
  for(i=0;i<5;i++){
    if((h2Vals[i]!==hiPairVal2)&&(h2Vals[i]!==loPairVal2))kicker2=h2Vals[i];
  }

  if(hiPairVal1>hiPairVal2)return true;
  if(hiPairVal2>hiPairVal1)return false;
  if(loPairVal1>loPairVal2)return true;
  if(loPairVal2>loPairVal1)return false;
  if(kicker1>kicker2)return true;
  if(kicker2>kicker1)return false;
  if(((((h1Vals[0]===h1Vals[1])&&(h1Vals[2]===h1Vals[3]))||((h1Vals[1]===h1Vals[2])&&(h1Vals[3]===h1Vals[4]))||((h1Vals[0]===h1Vals[1])&&(h1Vals[3]===h1Vals[4])))&&(((h2Vals[0]===h2Vals[1])&&(h2Vals[2]===h2Vals[3]))||((h2Vals[1]===h2Vals[2])&&(h2Vals[3]===h2Vals[4]))||((h2Vals[0]===h2Vals[1])&&(h2Vals[3]===h2Vals[4]))))&&(kicker1>kicker2))return true;
  else if(((((h1Vals[0]===h1Vals[1])&&(h1Vals[2]===h1Vals[3]))||((h1Vals[1]===h1Vals[2])&&(h1Vals[3]===h1Vals[4]))||((h1Vals[0]===h1Vals[1])&&(h1Vals[3]===h1Vals[4])))&&(((h2Vals[0]===h2Vals[1])&&(h2Vals[2]===h2Vals[3]))||((h2Vals[1]===h2Vals[2])&&(h2Vals[3]===h2Vals[4]))||((h2Vals[0]===h2Vals[1])&&(h2Vals[3]===h2Vals[4]))))&&(kicker1<kicker2))return false;
  else if(((((h1Vals[0]===h1Vals[1])&&(h1Vals[2]===h1Vals[3]))||((h1Vals[1]===h1Vals[2])&&(h1Vals[3]===h1Vals[4]))||((h1Vals[0]===h1Vals[1])&&(h1Vals[3]===h1Vals[4])))&&(((h2Vals[0]===h2Vals[1])&&(h2Vals[2]===h2Vals[3]))||((h2Vals[1]===h2Vals[2])&&(h2Vals[3]===h2Vals[4]))||((h2Vals[0]===h2Vals[1])&&(h2Vals[3]===h2Vals[4]))))&&(kicker1===kicker2))return 'cats';
  else if(((h1Vals[0]===h1Vals[1])&&(h1Vals[2]===h1Vals[3]))||((h1Vals[1]===h1Vals[2])&&(h1Vals[3]===h1Vals[4]))||((h1Vals[0]===h1Vals[1])&&(h1Vals[3]===h1Vals[4])))return true;
  else if(((h2Vals[0]===h2Vals[1])&&(h2Vals[2]===h2Vals[3]))||((h2Vals[1]===h2Vals[2])&&(h2Vals[3]===h2Vals[4]))||((h2Vals[0]===h2Vals[1])&&(h2Vals[3]===h2Vals[4])))return false;
  // pair logic
  if(h1Vals[0]===h1Vals[1]){h1PairVal=h1Vals[0];}
  if(h1Vals[0]===h1Vals[2]){h1PairVal=h1Vals[0];}
  if(h1Vals[0]===h1Vals[3]){h1PairVal=h1Vals[0];}
  if(h1Vals[0]===h1Vals[4]){h1PairVal=h1Vals[0];}
  if(h1Vals[1]===h1Vals[2]){h1PairVal=h1Vals[1];}
  if(h1Vals[1]===h1Vals[3]){h1PairVal=h1Vals[1];}
  if(h1Vals[1]===h1Vals[4]){h1PairVal=h1Vals[1];}
  if(h1Vals[2]===h1Vals[3]){h1PairVal=h1Vals[2];}
  if(h1Vals[2]===h1Vals[4]){h1PairVal=h1Vals[2];}
  if(h1Vals[3]===h1Vals[4]){h1PairVal=h1Vals[3];}
  if(h2Vals[0]===h2Vals[1]){h2PairVal=h2Vals[0];}
  if(h2Vals[0]===h2Vals[2]){h2PairVal=h2Vals[0];}
  if(h2Vals[0]===h2Vals[3]){h2PairVal=h2Vals[0];}
  if(h2Vals[0]===h2Vals[4]){h2PairVal=h2Vals[0];}
  if(h2Vals[1]===h2Vals[2]){h2PairVal=h2Vals[1];}
  if(h2Vals[1]===h2Vals[3]){h2PairVal=h2Vals[1];}
  if(h2Vals[1]===h2Vals[4]){h2PairVal=h2Vals[1];}
  if(h2Vals[2]===h2Vals[3]){h2PairVal=h2Vals[2];}
  if(h2Vals[2]===h2Vals[4]){h2PairVal=h2Vals[2];}
  if(h2Vals[3]===h2Vals[4]){h2PairVal=h2Vals[3];}
  if((h1PairVal>0)&&(h2PairVal===0))return true;
  else if((h2PairVal>0)&&(h1PairVal===0))return false;
  else if((((h1Vals[0]===h1Vals[1])||(h1Vals[1]===h1Vals[2]))||((h1Vals[2]===h1Vals[3])||(h1Vals[3]===h1Vals[4]))&&((h2Vals[0]===h2Vals[1])||(h2Vals[1]===h2Vals[2]))||((h2Vals[2]===h2Vals[3])||(h2Vals[3]===h2Vals[4])))&&(h1PairVal>h2PairVal))return true;
  else if((((h1Vals[0]===h1Vals[1])||(h1Vals[1]===h1Vals[2]))||((h1Vals[2]===h1Vals[3])||(h1Vals[3]===h1Vals[4]))&&((h2Vals[0]===h2Vals[1])||(h2Vals[1]===h2Vals[2]))||((h2Vals[2]===h2Vals[3])||(h2Vals[3]===h2Vals[4])))&&(h1PairVal<h2PairVal))return false;
  else if((((h1Vals[0]===h1Vals[1])||(h1Vals[1]===h1Vals[2]))||((h1Vals[2]===h1Vals[3])||(h1Vals[3]===h1Vals[4]))&&((h2Vals[0]===h2Vals[1])||(h2Vals[1]===h2Vals[2]))||((h2Vals[2]===h2Vals[3])||(h2Vals[3]===h2Vals[4])))&&(h1PairVal===h2PairVal)) {
    if((h1PairVal!=h1Vals[4])&&(h1Vals[4]>h2Vals[4]))return true;
    if((h1PairVal!=h1Vals[4])&&(h1Vals[4]<h2Vals[4]))return false;
    if((h1PairVal!=h1Vals[3])&&(h1Vals[3]>h2Vals[3]))return true;
    if((h1PairVal!=h1Vals[3])&&(h1Vals[3]<h2Vals[3]))return false;
    if((h1PairVal!=h1Vals[2])&&(h1Vals[2]>h2Vals[2]))return true;
    if((h1PairVal!=h1Vals[2])&&(h1Vals[2]<h2Vals[2]))return false;
    if((h1PairVal!=h1Vals[1])&&(h1Vals[1]>h2Vals[1]))return true;
    if((h1PairVal!=h1Vals[1])&&(h1Vals[1]<h2Vals[1]))return false;
    if((h1PairVal!=h1Vals[0])&&(h1Vals[0]>h2Vals[0]))return true;
    if((h1PairVal!=h1Vals[0])&&(h1Vals[0]<h2Vals[0]))return false;
    return "cats";  
  }
  // high-card hand logic
  else if(h1Vals[4]>h2Vals[4])return true;
  else if(h1Vals[4]<h2Vals[4])return false;
  else if(h1Vals[3]>h2Vals[3])return true;
  else if(h1Vals[3]<h2Vals[3])return false;
  else if(h1Vals[2]>h2Vals[2])return true;
  else if(h1Vals[2]<h2Vals[2])return false;
  else if(h1Vals[1]>h2Vals[1])return true;
  else if(h1Vals[1]<h2Vals[1])return false;
  else if(h1Vals[0]>h2Vals[0])return true;
  else if(h1Vals[0]<h2Vals[0])return false;
  return "cats";
}