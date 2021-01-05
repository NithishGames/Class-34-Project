const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;



function setup() {
  canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  ball1 = new Pendulum(340, 450, "Red");
  ball2 = new Pendulum(400, 450, "Orange");
  ball3 = new Pendulum(460, 450, "Yellow");
  ball4 = new Pendulum(520, 450, "Green");
  ball5 = new Pendulum(580, 450, "Blue");

  sling1 = new Sling(ball1.body, { x: 340, y: 200 });
  sling2 = new Sling(ball2.body, { x: 400, y: 200 });
  sling3 = new Sling(ball3.body, { x: 460, y: 200 });
  sling4 = new Sling(ball4.body, { x: 520, y: 200 });
  sling5 = new Sling(ball5.body, { x: 580, y: 200 });
}

function draw() {
  background(0);
  Engine.update(engine);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}

function mouseDragged() {
  Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
}
