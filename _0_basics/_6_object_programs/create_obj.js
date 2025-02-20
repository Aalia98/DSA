// TODO: Creating object with a constructor
{
  function vehicle(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  let car = new vehicle("GT", "BMW", "1998cc");
  console.log(car.name);
  console.log(car.maker);
  console.log(car["engine"]);
}
// TODO: Using object literals
{
  let car = {
    name: "GT",
    maker: "BMW",
    engine: "1998cc",
  };
  console.log(car.name); //dot notation
  console.log(car["maker"]); //bracket notation
}
// TODO: Creating object with Object.create() method
{
  const coder = {
    isStudying: false,
    printIntroduction: function () {
      console.log(
        `My name is ${this.name}. Am I studying?: ${this.isStudying}`
      );
    },
  };
  const me = Object.create(coder);
  me.name = "Mukul";
  me.isStudying = true;
  me.printIntroduction();
}
// TODO: Using es6 classes
{
  // Using es6 classes
  class Vehicle {
    constructor(name, maker, engine) {
      this.name = name;
      this.maker = maker;
      this.engine = engine;
    }
  }
  let car1 = new Vehicle("GT", "BMW", "1998cc");
  console.log(car1.name);
}
