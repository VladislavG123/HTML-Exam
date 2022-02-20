// Task 1

function task1() {
    let name = prompt("What is your name?")

    name = name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase()

    alert(`Hello, ${name}!`)
}


// Task 4
task4()

function task4() {
    let yearsInput = Number(prompt("Your age: "))

    let years = 90 - yearsInput
    let days = years * 365
    let weeks = days / 7
    let months = years * 12

    alert("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.\n")
}

// Task 5
function task5() {
    let weightElement = document.getElementById("weight")
    let heightElement = document.getElementById("height")

    let weight = Number(weightElement.value)
    let height = Number(heightElement.value)

    let bmi = weight / (height * height)

    let result = bmi < 18.5 ? "are underweight" : bmi < 24.9 ? "have a normal weight" : "so you are overweight"

    document.getElementById("result").innerText = "Your BMI is " + bmi.toFixed(2) + ", so you " + result
}

// Task 6
function task6() {
    let year = Number(prompt("Year: "))

    alert(year % 4 === 0 && year % 10 !== 0 || year % 400 === 0 ? "leap" : "not leap")
}

// Task 7
function task7() {
    let people = ["Aidana", "Bekbolat", "Mariya", "Aleksandr", "Diana"]
    let person = Math.floor(Math.random() * people.length);

    document.getElementById("result").innerText = people[person] + " is going to buy lunch today.\n"
}

// Task 8
task8(5)

function task8(count, last= 0, current= 1, result=[0]) {
    if (--count !== 0) {
        result.push(current)
        let buffer = current
        current = current + last
        last = buffer
        task8(count, last, current, result)
    }
    else {
        console.log(result)
    }
}