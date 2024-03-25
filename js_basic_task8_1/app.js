
import  Animal  from "./animal.js";
import  Dog  from "./dog.js";
import  Cat  from "./cat.js";


const dog = new Dog('brown', 'Rex', 'dog', 'German Shepherd', 3);
const cat = new Cat('white', 'Snowball', 'cat', 'Persian', 2, 12);

dog.sayHello();
dog.run();
dog.playFetch();
dog.bark();

console.log('--------------');

cat.sayHello();
cat.run();
cat.sleep();
cat.hunt();
