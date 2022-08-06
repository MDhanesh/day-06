// write a class to calculate the uber price.
console.log("--------------uber price  problem------------");
class Ride {
  constructor(price, distance) {
    this.price = price;
    this.distance = distance;
  }
  getFullFair() {
    const fair = `Price for ride is ${this.price * this.distance}`;
    return fair;
  }
}

const uber = new Ride("100", "5");
console.log(uber.getFullFair());
