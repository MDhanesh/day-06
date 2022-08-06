console.log("---------------------UML Diagram-----------------------");

class circle {
  constructor(radius = "1", color = "red") {
    this.radius = radius;
    this.color = color;
  }
  get getradius() {
    return this.radius;
  }
  set Radius(RADIUS) {
    this.radius = "5";
  }
  get getcolor() {
    return this.radius;
  }
  set Color(COLOR) {
    this.color = "Blue";
  }

  getArea() {
    let area = "this is area" + " " + 2 * Math.PI * this.radius;
    return area;
  }
  getCirumference() {
    let cirumference =
      "this is cirumference" + " " + 2 * (2 * Math.PI * this.radius);
    return cirumference;
  }
}
//first
const Circle = new circle();
console.log(Circle);
//second
console.log("This is radius double" + ":" + Circle.radius * 2);
//third
const circle1 = new circle("2", "yellow");
console.log(
  "this is radius" +
    ":" +
    circle1.radius * 2 +
    " " +
    "color" +
    ":" +
    circle1.color
);
//Fourth
console.log("This is getradius" + ":" + circle1.getradius * 2);
//Fifth
circle1.radius = "5";
console.log("This is setradius" + ":" + circle1.radius);
//Sixth
console.log("This is getcolor" + ":" + circle1.color);
//Seventh
circle1.Color = "blue";
console.log("this is setcolor" + ":" + circle1.color);
//Eigth
console.log(circle1);
//Nine
console.log(Circle.getArea());
//Ten
console.log(Circle.getCirumference());
