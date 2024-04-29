/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

function printName () {

console.log("abdul")

}
printName ()

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge (yearOfBirth) {
    let currentYear = new Date().getFullYear(); 
    let age = currentYear - yearOfBirth;
    console.log (`you are ${age} years old`)
}

printAge (1990);



/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello ( name , language ) {
if ( language == "en") {
    console.log (`hello ${name}`)
}else if ( language == "es") {
    console.log (`Hola ${name}`)
} else if (language == "fr") {
    console.log (`Bonjour ${name}`)
} else if (language == "tr") {
    console.log (`Merhaba ${name}`)
}else {
    console.log ("ERROR")
}
}

printHello("abdul" , "en")

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax (x , y) {
  
if (x > y) {
    console.log (`${x} is the bigger num`);

} else if (y > x) {

    console.log (`${y} is the bigger num`);
} else {
    console.log (" they are equal")
}
}
printMax (5,10)