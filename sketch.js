var hr, mn, sc
var hrAngle, mnAngle, scAngle

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
}

function draw() {
  background(255,255,255);  

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360)
  mnAngle = map(mn, 0, 60, 0, 360)
  hrAngle = map(hr, 0, 12, 0, 360)

  translate(200,200)
  rotate(-90)
  push()

  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,150,0)
  rotate(scAngle)

  pop()
  push()

  stroke(200,250,111)
  strokeWeight(7)
  line(0,0,125,0)
  rotate(mnAngle)

  pop()
  push()

  stroke(0)
  strokeWeight(7)
  line(0,0,100,0)
  rotate(hrAngle)

  pop()
  strokeWeight(10)
  noFill()

  stroke(250,0,0)
  arc(0,0,300,300,0,scAngle)

  stroke(200,250,111)
  arc(0,0,200,200,0,mnAngle)

  stroke(0)
  arc(0,0,100,100,0, hrAngle)

}