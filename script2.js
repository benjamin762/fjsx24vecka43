//If och ternary

// Temperatur
// let temp = parseFloat(prompt("Ange en temperatur i celcius"));
// if (temp > 30) {
//     console.log("Det är väldigt varmt ute.");
// } else if (temp > 20) {
//     console.log("Det är varmt ute.");
// } else if (temp > 10) {
//     console.log("Det är svalt ute.");
// } else {
//     console.log("Det är kallt ute.");
// }
// temp > 30 ? console.log("Det är väldigt varmt ute.")
//     : temp > 20 ? console.log("Det är varmt ute.")
//         : temp > 10 ? console.log("Det är svalt ute")
//             : console.log("Det är kallt ute.");

// Betygskonvertering
// let numericGrade = parseInt(prompt("Ange ett nummeriskt betyg mellan 0 och 100."));
// let letterGrade;
// if (numericGrade >= 90 && numericGrade <= 100) {
//     letterGrade = "A";
// } else if (numericGrade >= 80 && numericGrade <= 89) {
//     letterGrade = "B";
// } else if (numericGrade >= 70 && numericGrade <= 79) {
//     letterGrade = "C";
// } else if (numericGrade >= 60 && numericGrade <= 69) {
//     letterGrade = "D";
// } else if (numericGrade >= 0 && numericGrade <= 59) {
//     letterGrade = "F";
// } else {
//     console.log("Betyg kan bara vara mellan 0 och 100.");
// }
// letterGrade = (numericGrade >= 90 && numericGrade <= 100) ? letterGrade = "A"
//     : (numericGrade >= 80 && numericGrade <= 89) ? "B"
//     : (numericGrade >= 70 && numericGrade <= 79) ? "C"
//     : (numericGrade >= 60 && numericGrade <= 69) ? "D"
//     : (numericGrade >= 0 && numericGrade <= 59) ? "F"
//     : console.log("Betyg kan bara vara mellan 0 och 100.");
// console.log("Betyg", letterGrade);

// Butiksrabatt
// let customerType = prompt("Ange kundtyp: Ny eller Återkommande");
// let purchaseAmount = parseFloat(prompt("Ange köpbeloppet i kr"));;
// let discount;
// if (customerType === "Återkommande" && purchaseAmount > 500) {
//     discount = 15;
// } else if (customerType === "Ny" && purchaseAmount > 500) {
//     discount = 10;
// } else {
//     discount = 0;
// }
// discount = (customerType === "Återkommande" && purchaseAmount > 500) ? 15 : (customerType === "Ny" && purchaseAmount > 500) ? 10 : 0;
// console.log(`${discount}% rabatt
// Slutgiltigt pris ${purchaseAmount * (100 - discount) * 0.01}`)

// Lösenordskontroll
// let password = prompt("Ange ett lösenord");

// let validOrNot = (password.length >= 8 && password.match(/\d/) && password.match(/[a-zA-z]/))? "giltigt" : "inte giltigt";
// console.log ("Lösenordet är", validOrNot);

// if (password.length >= 8 && password.match(/\d/) && password.match(/[a-zA-z]/)) {
//     console.log("Lösenordet är giltigt.");
// } else {
//     console.log("Lösenordet är inte giltigt.");
// }

// Trafikljus
// let color = prompt('Ange färgen på ett trafikljus: "Röd", "Gul" eller "Grön".').toLowerCase();

// let response = color === "röd" ? "Stanna"
//     : color === "gul" ? "Förbered för att stanna"
//     : color === "grön" ? "Kör"
//     : "ogiltig inmatnig";
// console.log(response);
// // Det här är fel, röd betyder stopp och gul stanna, stopp och stanna är olika saker i trafikförordningen.
// if (color === "röd") {
//     console.log("Stanna")
// } else if (color === "gul") {
//     console.log("Förbered för att stanna")
// } else if (color === "grön") {
//     console.log("Kör")
// } else {
//     console.log("Ogiltig inmatning")
// }

// Nummer i ord
// let numberToWordify = parseInt(prompt("Ange ett tal mellan 0 och 5"));

// let numberWord = numberToWordify === 0 ? "Noll" :
//     numberToWordify === 1 ? "Ett" :
//         numberToWordify === 2 ? "Två" :
//             numberToWordify === 3 ? "Tre" :
//                 numberToWordify === 4 ? "Fyra" :
//                     numberToWordify === 5 ? "Fem" : "Ogiltigt tal";
// console.log(numberWord);

// if (numberToWordify == 0) { console.log("Noll"); }
// else if (numberToWordify == 1) { console.log("Ett"); }
// else if (numberToWordify == 2) { console.log("Två"); }
// else if (numberToWordify == 3) { console.log("Tre"); }
// else if (numberToWordify == 4) { console.log("Fyra"); }
// else if (numberToWordify == 5) { console.log("Fem"); }
// else { console.log("Ogiltigt tal"); }


// switch (numberToWordify) {
//     case 0: console.log("Noll"); break;
//     case 1: console.log("Ett"); break;
//     case 2: console.log("Två"); break;
//     case 3: console.log("Tre"); break;
//     case 4: console.log("Fyra"); break;
//     case 5: console.log("Fem"); break;
//     default: console.log("Ogiltigt tal"); break;
// }


// Planetvikt
// let weight = parseFloat(prompt("Ange din vikt i kg"));
// let planet = prompt("Välj en planet (Mars, Jupiter, Månen)");

// if (planet.toLowerCase() === "mars") {
//     console.log(`Din vikt på Mars är ${weight * 0.38} kg.`);
// } else if (planet.toLowerCase() === "jupiter") {
//     console.log(`Din vikt på Jupiter är ${weight * 2.34} kg.`);
// } else if (planet.toLowerCase() === "månen") {
//     console.log(`Din vikt på månen är ${weight * 0.16} kg.`)
// } else {
//     console.log("Felaktig inmatning");
// }

// let gravityFactor = planet.toLowerCase() === "mars" ? 0.38 
//     : planet.toLowerCase() === "jupiter" ? 2.34
//     : planet.toLowerCase() === "månen" ? 0.16
//     : console.log("Felaktig inmatning");
// console.log(`Din vikt på ${planet} är ${weight*gravityFactor} kg.`);


// Quizspel
// let answer, points;
// points = 0;

// answer = prompt("Fråga 1: Vad är motsatsen till norr?").toLowerCase();
// if (answer.includes("söder")) {
//     points++;
//     alert("Rätt");
// } else {
//     alert("Fel");
// }
// answer = prompt("Fråga 2: Vad är 2+2?");
// if (answer === "4") {
//     points++;
//     alert("Rätt");
// } else {
//     alert("Fel");
// }
// answer = prompt("Fråga 3: Är undefined i javascript?").toLowerCase();
// if (answer.includes("ja")) {
//     points++;
//     alert("Rätt");
// } else {
//     alert("Fel");
// }
// alert(`Du fick ${points} poäng av 3 möjliga.`);


// Validera e-postadress
// let email = prompt("Ange en epostadress att validera");
// if (email.includes('@') && email.includes('.')) {
//     console.log("E-postadressen är giltig.")
// } else {
//     console.log("E-postadressen är ogiltig.")
// }

// console.log("E-postadressen är", email.includes('@') && email.includes('.') ? "giltig." : "ogiltig.");


// Enkel bankomat
// let enteredPin;
// let correctPin = "1234";
// enteredPin = prompt(`Ange pin`);
// let remainingAttempts = 2
// while (enteredPin !== correctPin && remainingAttempts > 0) {
//     enteredPin = prompt(`Fel pin. Ange pin (${remainingAttempts} försök kvar)`);
//     remainingAttempts--;
// }
// if (enteredPin === correctPin) {
//     console.log("Välkommen!")
// } else if (remainingAttempts === 0) {
//     console.log("Kortet är blockerat.");
// }


// Matbeställning
// let food = parseInt(prompt(`Meny:
// 1. Pytt i panna 15kr
// 2. Hamburgare 10kr
// 3. Pizza 6kr
// Välj maträttens nummer`));
// if (food === 1) {
//     console.log("Pytt i panna 15kr");
// } else if (food === 2) {
//     console.log("Hamburgare 10kr");
// } else if (food === 3) {
//     console.log("Pizza 6kr");
// }

// Hastighetskontroll
// let speed = parseFloat(prompt("Ange din hastighet i km/h"));
// if (speed > 120) {
//     console.log("För fort, böter!");
// } else if (speed >= 80) {
//     console.log("Godkänd hastighet.");
// } else {
//     console.log("För långsamt, öka hastigheten.");
// }

// Valutakonverterare
// let sek = parseFloat(prompt("Ange ett belopp i SEK"));
// let eur = sek / 10;
// console.log(eur.toFixed(2));

// Filmrekommendation
// Matematiskt spel
// BMI-kalkylator
// Resekostnadskalkylator
// Kontrollera anagram
// Nummergissningsspel


//  IF + INBYGGDA FUNKTIONER  //////////////////////////////////////////////

// Övning 1 Kontrollera versaler i en sträng
// let word = prompt("Ange ett ord");
// // if (word.match(/[A-Z]/)) { //Funkar bara a-z inte a-ö
// if (word !==  word.toLowerCase()) {
//     console.log("Ordet innehåller stora bokstäver");
// } else {
//     console.log("Ordet innehåller inte stora bokstäver");
// }

// Övning 2 Jämföra tal med toFixed
// let number = parseFloat(prompt("Ange ett decimaltal"));
// if (number.toFixed(2) > 10.5) {
//     console.log("Talet är större än 10.5.");
// } else {
//     console.log("Talet är mindre än eller lika med 10.5.");
// }

// Övning 3 Kontrollera egenskap i Objekt
// let person = {
//     namn: "Kalle",
//     ålder: 99,
//     stad: "Lycksele"
// }
// let search = prompt("Ange en egenskap att söka efter");
// if (Object.keys(person).includes(search)) {
//     console.log(search, person[search])
// } else {
//     console.log("Egenskapen finns inte.")
// }

// Övning 4 Validera telefonnummer
// let phone =  prompt("Ange ett telefonnummer");
// if (phone.length === 10 && phone.match(/^[0-9]+$/)) {
//     console.log("Telefonnummret är giltigt.")
// } else {
//     console.log("Telefonnumret är inte giltigt.")
// }

// .match(/^[0-9]*$/) https://stackoverflow.com/a/19715367
// /^[0-9]+/.test(phone)
// Möjliga lösningar: Loopa igenom varje bokstav kolla om siffra, string(parseint())===phone, isNaN, /^[0-9]+$/
//isNaN() tilllåter minus, decmalpunkt, e, och mellanslag 

// Övning 5 Kontrollerar inledande text
// let sentence = prompt("Ange en mening");
// Övning 6 Kontonummervalidering
// Övning 7 Jämföra produkters priser
// Övning 8 Kontrollera palindrom
// Övning 9 Analys av textlängd
// Övning 10 Analysera studentens betyg