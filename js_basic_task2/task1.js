let income = 55555
let persentage
let massage
let incomefull

if (income < 10000) {
    persentage = income * 0.05
    incomefull = income - persentage
    massage = "5%"
} else if (income > 10000 && income <= 50000) {
    persentage = income * 0.1
    incomefull = income - persentage
    massage = "10%"
} else if (income > 50001 && income <= 100000) {
    persentage = income * 0.15
    incomefull = income - persentage
    massage = "15%"
} else if (income > 100001 && income <= 200000) {
    persentage = income * 0.2
    incomefull = income - persentage
    massage = "20%"
} else {
    persentage = income * 0.25
    incomefull = income - persentage
    massage = "25%"
}

console.log(income)
console.log(massage)
console.log(incomefull)