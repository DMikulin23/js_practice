let startprice = 10000
let price = startprice
let year = 2020
let mileage = 77777
let climatecontrol = true
let package1 = true

if (year >= 2019 && year <= 2022) {
    price *= 1.1;
  } 
  
  if (mileage >= 50000 && mileage <= 100000) {
    price *= 0.95;  
  }
  
  if (climatecontrol) {
    price *= 1.07; 
  }
  
  if (package1) {
    price *= 1.08;   
  }

console.log(startprice)
console.log(price)