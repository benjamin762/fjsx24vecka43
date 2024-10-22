console.log("Hej Tisdag!");
// Ämnen att täcka:

// 1.1 If-satser med Logiska Operatorer
// Exempel 1: Ålderskontroll med if-sats

// let age = Number(prompt("Ange din ålder:"));

// if (age >= 18) {
//   console.log("Du är myndig");
// } else {
//   console.log("Du är ej myndig");
// }

// ------------------------------------------------
// Exempel 2: Inloggningssystem med logiska operatorer

// let userName = prompt("Ange ditt användarnamn:");
// let password = prompt("Ange ditt lösenord:");

// if (userName === "admin" && password === "hemligt") {
//   console.log("Access granted ", userName);
// } else if (userName === "lärare" && password === "mandus") {
//   console.log("Access granted ", userName);
// } else {
//   console.log("Access denied ");
// }

// ------------------------------------------------
// Exempel 3: Användning av || operatorn

// let day = prompt("Ange vilken dag det är idag:");

// if (day.toLowerCase() === "lördag" || day.toLowerCase() === "söndag") {
//   console.log(`Det är ${day} och helg!`);
// } else {
//   console.log("Det är vardag", day);
// }

// ------------------------------------------------lör

// Exempel 4: Negation med ! operatorn

// let isRaining = false;
// let isSunny = true;
// let havingBoring = true;
// let haveTwoLegs = false;

// if ((!isRaining && !isSunny) || (!haveTwoLegs && havingBoring)) {
//   console.log("Ut och spela fotboll");
// } else {
//   console.log("Stannar inne och läser en bok");
// }

// ------------------------------------------------

// Introducera ternär operatorn som ett kortare sätt att skriva enkla if-else-satser:

// villkor ? uttryckOmSant : uttryckOmFalskt;

// let temperature = Number(prompt("Ange aktuell temperatur:"));

// if else:
// if (temperature > 25) {
//   console.log("Det är varmt ute idag");
// } else {
//   console.log("Det är INTE varmt ute idag");
// }

// ternary operator:

// temperature > 35
//   ? console.log("Det är väldigt varmt ute idag")
//   : temperature > 25
//   ? console.log("Det är varmt")
//   : temperature > 9 && temperature < 21
//   ? console.log("Det är", temperature)
//   : console.log("Det är INTE varmt ute idag");
