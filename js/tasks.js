person = {
    "firstName": "Vasya",
    "lastName": "Uncle",
    "age": 54,
    "work": {
        "position": "Bike rider",
        "experience": 45,
    },
    "hobbies": [
        {
            "name": "cooking",
            "level": "senior"
        },
        {
            "name": "watching a \"Polie chydes\"",
            "level": "dilettante"
        },
    ]
}

console.log("--------- Hobbies ----------")
doHobbies();

console.log("--------- Work ----------")
doWork();

console.log("--------- Info ----------")
printAllInfo();

function doHobbies(){
    for (const hobbie of person['hobbies']) {
        console.log(person["lastName"] + " " + person["firstName"] + " is " + hobbie["name"] + " as " + hobbie["level"])
    }
}

function doWork() {
    console.log(person["lastName"] + " " + person["firstName"] + " is working as " + person["work"]["position"] + " for " + person["work"]["experience"] + " ages")
}

function printAllInfo() {
    console.log("Person\'s info:")
    console.log("First name: " + person["firstName"])
    console.log("Last name: " + person["lastName"])
    console.log("Age: " + person["age"])
    console.log("Work: ")
    console.log(person["work"]["experience"] + " years as " + person["work"]["position"])
    let counter = 1;
    for (const hobbie of person['hobbies']) {
        console.log("Hobbie " + counter + ": " + hobbie["name"] + ", " + hobbie["level"])
        counter++;
    }
}