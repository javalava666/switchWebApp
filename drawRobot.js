var robotCanvas, ctx2,
    dirFact = 1, dirFact2 = 1,
    y1   = 0.00,
    lsa  = 0.00,
    rsa  = 0.00,
    lea  = 0.00,
    rea  = 0.00,
    lha  = 0.00,
    rha  = 0.00,
    lhip = 0.00,
    rhip = 0.00,
    lka  = 0.00,
    rka  = 0.00,
    lft  = 0.00,
    rft  = 0.00,
    y1   = 0.00;
robotCanvas = document.getElementById('robotCanvas');
ctx2 = robotCanvas.getContext('2d');
function updateRobot() {
  if(lsa * 1 === 160){dirFact  = -1;}
  if(lsa * 1 ===   0){dirFact  = 1; }
  if(y1  * 1 ===   0){dirFact2 = 1; }
  if(y1  * 1 === -40){dirFact2 = -1;}
  lsa  = lsa  + 4   * dirFact;
  rsa  = rsa  - 4   * dirFact;
  lea  = lea  + 1.5 * dirFact;
  rea  = rea  - 1.5 * dirFact;
  lha  = lha  + .7  * dirFact;
  rha  = rha  - .7  * dirFact;
  lhip = lhip + .7  * dirFact;
  rhip = rhip - .7  * dirFact;
  lka  = lka  - .7  * dirFact;
  rka  = rka  + .7  * dirFact;
  y1   = y1   - 2   * dirFact2;
  drawRobot(0,.5,150,y1 + 50,lsa,rsa,lea,rea,lha,rha,lhip,rhip,lka,rka,lft,rft,'yellow','orange','black');
}
function drawRobot(angle1,scale1,x1,y1,lsa,rsa,lea,rea,lha,rha,lhip,rhip,lka,rka,lft,rft,col1,col2,col3) {
  ctx2.save();
  ctx2.translate(x1,y1);
  ctx2.scale(scale1,scale1);
  ctx2.rotate((Math.PI/180)*angle1);
  drawTorso(col1,col2,col3);
  drawThickSupports();
  drawHead(30,col1,col2,col3);
  drawArm(190,250,rsa,rea,rha,col1,col2,col3);  // right
  drawArm(10,250,lsa,lea,lha,col1,col2,col3);   // left
  drawLeg(25,550,lhip,lka,lft,col1,col2,col3);  // left
  drawLeg(175,550,rhip,rka,rft,col1,col2,col3); // right
  ctx2.restore();
}
function drawTorso(col1,col2,col3) {
  ctx2.save();
  var gradient = ctx2.createRadialGradient(100, 480, 0, 100, 480, 110);
  gradient.addColorStop(0.05, col1);
  gradient.addColorStop(0.7, col2);
  gradient.addColorStop(1.0, col3);
  ctx2.beginPath();
  ctx2.arc(100, 480, 110, 0, Math.PI * 2, true);
  ctx2.fillStyle = gradient;
  ctx2.fill();
  ctx2.stroke();
  ctx2.restore();
}
function drawThickSupports() {
  ctx2.save();
  ctx2.beginPath();
  ctx2.lineWidth = 30;
  ctx2.lineCap = 'round';
  ctx2.moveTo(100, 200);  // neck
  ctx2.lineTo(100, 235);
  ctx2.stroke();
  ctx2.moveTo(70, 250);   // torso support1
  ctx2.lineTo(70, 400);
  ctx2.stroke();
  ctx2.moveTo(130, 250);  // torso support2
  ctx2.lineTo(130, 400);
  ctx2.stroke();
  ctx2.moveTo(190, 250);  // cross brace
  ctx2.lineTo(10, 250);
  ctx2.stroke();
  ctx2.moveTo(190, 250);  // left bracket
  ctx2.lineTo(130, 400);
  ctx2.stroke();
  ctx2.moveTo(10, 250);   // right bracket
  ctx2.lineTo(70, 400);
  ctx2.stroke();
  ctx2.restore();
}
function drawHead(angle,col1,col2,col3) {
  ctx2.save();
  ctx2.translate(100,100);
  ctx2.rotate((Math.PI/180)*angle);
  ctx2.beginPath();
  ctx2.arc(0, 0, 105, 0, Math.PI * 2, true);ctx2.strokeStyle = 'black';
  ctx2.stroke();
  gradient = ctx2.createRadialGradient(0, 0, 0, 0, 0, 105);
  gradient.addColorStop(0.05, col1);
  gradient.addColorStop(0.7, col2);
  gradient.addColorStop(1.0, col3);
  ctx2.fillStyle = gradient;
  ctx2.fill();
  ctx2.restore();
  ctx2.save();
  ctx2.beginPath();       // between eyes
  ctx2.lineWidth = 25;
  ctx2.moveTo(55, 55);
  ctx2.lineTo(140, 55);
  ctx2.stroke();
  ctx2.restore();
  ctx2.save();
  ctx2.beginPath();
  ctx2.lineWidth = 20;
  ctx2.lineCap = 'round';
  ctx2.moveTo(100, 90);
  ctx2.lineTo(100, 105);
  ctx2.stroke();
  ctx2.beginPath();
  ctx2.lineWidth = 30;
  ctx2.moveTo(70, 150);
  ctx2.lineTo(130, 150);
  ctx2.stroke();
  ctx2.restore();
  ctx2.save();
  gradient = ctx2.createRadialGradient(55, 55, 0, 55, 55, 25);
  gradient.addColorStop(0.1, 'yellow');
  gradient.addColorStop(0.4, 'green');
  gradient.addColorStop(1.0, 'black');
  ctx2.beginPath();
  ctx2.arc(55, 55, 25, 0, Math.PI * 2, true);
  ctx2.fillStyle = gradient;
  ctx2.fill();
  ctx2.stroke();
  ctx2.restore();
  ctx2.save();
  gradient = ctx2.createRadialGradient(140, 55, 0, 140, 55, 25);
  gradient.addColorStop(0.1, 'yellow');
  gradient.addColorStop(0.4, 'green');
  gradient.addColorStop(1.0, 'black');
  ctx2.beginPath();
  ctx2.arc(140, 55, 25, 0, Math.PI * 2, true);
  ctx2.fillStyle = gradient;
  ctx2.fill();
  ctx2.stroke();
  ctx2.restore();
  ctx2.save();
  gradient = ctx2.createRadialGradient(80, 150, 0, 80, 150, 10);
  gradient.addColorStop(0.05, 'yellow');
  gradient.addColorStop(0.7, 'green');
  ctx2.beginPath();
  ctx2.arc(80, 150, 10, 0, Math.PI * 2, true);
  ctx2.fillStyle = gradient;
  ctx2.fill();
  ctx2.stroke();
  ctx2.restore();
  ctx2.save();
  gradient = ctx2.createRadialGradient(100, 150, 0, 100, 150, 10);
  gradient.addColorStop(0.05, 'yellow');
  gradient.addColorStop(0.7, 'green');
  ctx2.beginPath();
  ctx2.arc(100, 150, 10, 0, Math.PI * 2, true);
  ctx2.fillStyle = gradient;
  ctx2.fill();
  ctx2.stroke();
  ctx2.restore();
  ctx2.save();
  gradient = ctx2.createRadialGradient(120, 150, 0, 120, 150, 10);
  gradient.addColorStop(0.05, 'yellow');
  gradient.addColorStop(0.7, 'green');
  ctx2.beginPath();
  ctx2.arc(120, 150, 10, 0, Math.PI * 2, true);
  ctx2.fillStyle = gradient;
  ctx2.fill();
  ctx2.stroke();
  ctx2.restore();
  ctx2.save();
  gradient = ctx2.createRadialGradient(100, 100, 0, 100, 100, 8);
  gradient.addColorStop(0.05, 'hotpink');
  gradient.addColorStop(0.7, 'red');
  ctx2.beginPath();
  ctx2.arc(100, 100, 8, 0, Math.PI * 2, true);
  ctx2.fillStyle = gradient;
  ctx2.fill();
  ctx2.stroke();
  ctx2.restore();
}
function drawArm(x, y, s, e, h, col1, col2, col3) {
  ctx2.save();
  ctx2.translate(x, y);
  ctx2.rotate((Math.PI / 180) * s);
  gradient = ctx2.createRadialGradient(0, 0, 0, 0, 0, 40);
  gradient.addColorStop(0.05, col1);
  gradient.addColorStop(0.7,  col2);
  gradient.addColorStop(1.0,  col3);
  ctx2.beginPath();       // right shoulder
  ctx2.arc(0, 0, 40, 0, Math.PI * 2, true);
  ctx2.fillStyle = gradient;
  ctx2.fill();
  ctx2.stroke();
  ctx2.beginPath();
  ctx2.lineWidth = 35;
  ctx2.lineCap = 'round';
  ctx2.moveTo(0, 20);     // right upper arm
  ctx2.lineTo(0, 120);
  ctx2.stroke();
  drawForearm(e, h, col1, col2, col3);
  ctx2.restore();
}
function drawForearm(e, h, col1, col2, col3) {
  ctx2.save();
  ctx2.translate(0, 120);
  ctx2.rotate((Math.PI / 180) * e);
  gradient = ctx2.createRadialGradient(0, 0, 0, 0, 0, 20);
  gradient.addColorStop(0.05, col1);
  gradient.addColorStop(0.7,  col2);
  gradient.addColorStop(1.0,  col3);
  ctx2.beginPath();       // right elbow
  ctx2.arc(0, 0, 20, 0, Math.PI * 2, true);
  ctx2.fillStyle = gradient;
  ctx2.fill();
  ctx2.lineWidth = 1;
  ctx2.stroke();
  ctx2.beginPath();
  ctx2.lineWidth = 25;
  ctx2.lineCap = 'round';
  ctx2.moveTo(0, 20);     // right forearm
  ctx2.lineTo(0, 100);
  ctx2.stroke();
  drawRHand(0, 100, 1, h, col1, col2, col3);
  ctx2.restore();
}
function drawRHand(x, y, scale, h, col1, col2, col3) {
  ctx2.save();
  ctx2.translate(x, y);
  ctx2.scale(scale, 1);
  ctx2.rotate((Math.PI / 180) * h);
  gradient = ctx2.createRadialGradient(0, 0, 0, 0, 0, 22);
  gradient.addColorStop(0.05, col1);
  gradient.addColorStop(0.7,  col2);
  gradient.addColorStop(1.0,  col3);
  ctx2.beginPath();       // hand
  ctx2.arc(0, 0, 22, 0, Math.PI * 2, true);
  ctx2.fillStyle = gradient;
  ctx2.fill();
  ctx2.lineWidth = 1;
  ctx2.stroke();
  ctx2.beginPath();
  ctx2.lineWidth = 6;
  ctx2.lineCap = 'round';
  ctx2.moveTo(0, 20);     // finger
  ctx2.lineTo(0, 45);
  ctx2.stroke();
  ctx2.moveTo(-10, 15);   // finger
  ctx2.lineTo(-10, 40);
  ctx2.stroke();
  ctx2.moveTo(10, 15);    // finger
  ctx2.lineTo(10, 40);
  ctx2.stroke();
  ctx2.restore();
}
function drawLeg(x,y,ha,lla,fa,col1,col2,col3) {
  ctx2.save();
  ctx2.translate(x,y);
  ctx2.rotate((Math.PI/180)*ha);
  gradient = ctx2.createRadialGradient(0, 0, 0, 0, 0, 50);
  gradient.addColorStop(0.05, col1);
  gradient.addColorStop(0.7, col2);
  gradient.addColorStop(1.0, col3);
  ctx2.beginPath();       // hip
  ctx2.arc(0, 0, 50, 0, Math.PI * 2, true);
  ctx2.fillStyle = gradient;
  ctx2.fill();
  ctx2.stroke();
  ctx2.beginPath();
  ctx2.lineWidth = 75;
  ctx2.lineCap = 'round';
  ctx2.moveTo(0, 20);     // upper leg
  ctx2.lineTo(0, 120);
  ctx2.stroke();
  drawLowerLeg(lla,fa,col1,col2,col3);
  ctx2.restore();
}
function drawLowerLeg(lla,fa,col1,col2,col3) {
  ctx2.save();
  ctx2.translate(0,120);
  ctx2.rotate((Math.PI/180)*lla);
  gradient = ctx2.createRadialGradient(0, 0, 0, 0, 0, 40);
  gradient.addColorStop(0.05, col1);
  gradient.addColorStop(0.7, col2);
  gradient.addColorStop(1.0, col3);
  ctx2.beginPath();       // knee
  ctx2.arc(0, 0, 40, 0, Math.PI * 2, true);
  ctx2.fillStyle = gradient;
  ctx2.fill();
  ctx2.lineWidth = 1;
  ctx2.stroke();
  ctx2.beginPath();
  ctx2.lineWidth = 60;
  ctx2.lineCap = 'round';
  ctx2.moveTo(0, 20);     // lower leg
  ctx2.lineTo(0, 100);
  ctx2.stroke();
  drawFoot(fa,col1,col2,col3);
  ctx2.restore();
}
function drawFoot(angle, col1, col2, col3) {
  ctx2.save();
  ctx2.translate(0, 100);
  ctx2.rotate((Math.PI / 180) * angle);
  gradient = ctx2.createRadialGradient(0, 0, 0, 0, 0, 50);
  gradient.addColorStop(0.05, col1);
  gradient.addColorStop(0.7, col2);
  gradient.addColorStop(1.0, col3);
  ctx2.beginPath();       // foot
  ctx2.arc(0, 0, 50, 0, Math.PI * 2, true);
  ctx2.fillStyle = gradient;
  ctx2.fill();
  ctx2.lineWidth = 1;
  ctx2.stroke();
  ctx2.beginPath();
  ctx2.lineWidth = 30;
  ctx2.lineCap = 'round';
  ctx2.moveTo(-25, 35);   // sole of foot
  ctx2.lineTo(25, 35);
  ctx2.stroke();
  ctx2.restore();
}
function animateRobot() {
  ctx2.clearRect(0,0,1000,1000);
  updateRobot();
  requestAnimationFrame(animateRobot);
}