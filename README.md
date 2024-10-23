# fjsx24vecka43

Fördjupa JavaScript-kunskaper - Ämnen: Loopar: for, while, do-while

Övningar:

Övning 1: Multiplikationstabell (Lätt)

Uppgift:

Be användaren ange ett tal mellan 1 och 10.
Använd en for-loop för att skriva ut multiplikationstabellen för det talet (1 till 10).

Tips:
Loop från 1 till 10 och multiplicera med användarens tal.
Exempel:

Övning 2: Räkna Ned (Lätt)

Uppgift:

Skriv en loop som räknar ned från 10 till 1 och skriver ut varje nummer.

Tips:
Använd en for-loop med minskande räknare.

Övning 3: Summa av Udda Tal (Medel)

Uppgift:

Beräkna summan av alla udda tal mellan 1 och 100.

Tips:
Kontrollera om ett tal är udda med i % 2 !== 0.
Exempel:

Övning 4: Enkel Räknare (Medel)

Uppgift:

Skapa en enkel räknare som låter användaren lägga till eller dra ifrån ett värde.
Programmet ska fortsätta fråga användaren tills de väljer att avsluta.

Tips:
Använd en while- eller do-while-loop för att upprepa.
Håll reda på det nuvarande värdet i en variabel.

Övning 5: Fibonacci-sekvensen (Svår)

Uppgift:

Skriv ett program som genererar Fibonacci-sekvensen upp till ett visst antal termer som användaren anger.

Tips:
Fibonacci-sekvensen: varje tal är summan av de två föregående (0, 1, 1, 2, 3, 5, 8, ...).

Övning 6: Gissa Talet-spel (Svår)

Uppgift:

Skapa ett spel där datorn väljer ett slumpmässigt tal mellan 1 och 100.
Användaren ska gissa talet.
Efter varje gissning ska användaren få veta om gissningen är för hög eller för låg.
Spelet fortsätter tills användaren gissar rätt.

Tips:
Använd Math.random() och Math.floor() för att generera ett slumpmässigt tal.
Använd en while-loop för att upprepa gissningarna.

Övning 7: Enkel Meny (Medel)

Uppgift:

Skapa en meny med flera alternativ (t.ex. 1. Se datum, 2. Se tid, 3. Avsluta).
Användaren ska kunna välja ett alternativ och få relevant information.
Menyn ska visas igen efter varje val tills användaren väljer att avsluta.

Tips:
Använd en do-while-loop för att visa menyn upprepade gånger.

Övning 8: Räkna Antalet Vokaler i en Sträng (Svår)

Uppgift:

Be användaren ange en text.
Använd en for-loop för att iterera över varje tecken i texten.
Räkna antalet vokaler (a, e, i, o, u, y) i texten.
Skriv ut resultatet.

Tips:
Använd toLowerCase() för att göra jämförelsen skiftlägesokänslig.
Använd charAt(i) eller indexering text[i] för att få varje tecken.

Övning 9: Faktorberäkning (Medel)

Uppgift:

Be användaren ange ett positivt heltal.
Beräkna och skriv ut n! (n-fakultet), dvs. produkten av alla positiva heltal mindre än eller lika med n.

Tips:
Använd en for-loop för att multiplicera talen.

Övning 10: Palindromkontroll (Svår)

Uppgift:

Be användaren ange en text.
Använd en loop för att kontrollera om texten är ett palindrom (samma fram- och baklänges).
Skriv ut om texten är ett palindrom eller inte.

Tips:
Använd en for-loop för att jämföra tecken från början och slutet.

console.log("Hej Onsdag!");
// Ämnen att täcka:

// For-loop

// Syntaxen för en For-loop:

// for (initialisering; villkor; uppdatering) {
// // Kod som upprepas
// }

// Code Along - Exempel 1: Iterera över en Talserie

// for (let i = 1; i <= 10; i++) {
// console.log(i);
// }

// Förklaring:

// let i = 1; - Startvärde för räknaren.
// i <= 10; - Loopens villkor; körs så länge detta är sant.
// i++ - Uppdatering av räknaren efter varje iteration.

// Code Along - Exempel 2: Beräkna Summan av Tal

// Uppgift:

// Beräkna summan av talen från 1 till 100.

// let summa = 0;
// for (let i = 1; i <= 100; i++) {
// summa += i;
// }
// console.log(`Summan av talen 1 till 100 är ${summa}.`);

// Förklaring:

// Variabeln summa sammlar värdet av i, i varje iteration.
// (formeln för summan av en aritmetisk serie är: 𝑛(𝑛+1) där 𝑛 n är 100 i ditt fall).
// /2

// ------------------------------------------------------

// While- och Do-while-loopar

// While-loopar:

// Syntax:

// while (villkor) {
// // Kod som upprepas så länge villkoret är sant
// }

// Exempel 3: Gissa Talet (Använda While-loop)

// Uppgift:

// Skapa ett program där användaren ska gissa ett förbestämt tal.
// let randomNumber = Math.random() \* 10;
// randomNumber = Math.ceil(randomNumber);

// let hemligtTal = randomNumber;
// let gissning = Number(prompt("Gissa ett tal mellan 1 och 10:"));

// while (gissning !== hemligtTal) {
// gissning = Number(prompt("Fel gissat! Försök igen:"));
// }

// console.log("Grattis! Du gissade rätt.");

// Förklaring:

// Loopen fortsätter tills användaren gissar rätt tal.

// Do-while-loopar:

// Syntax:

// do {
// // Kod som körs minst en gång
// } while (villkor);

// Exempel 4: Menyval (Använda Do-while-loop)

// Uppgift:

// Skapa en enkel meny som upprepas tills användaren väljer att avsluta.

// let val;
// do {
// val = Number(prompt("Välj ett alternativ:\n1. Säga hej\n2. Säga hejdå\n3. Avsluta"));
// if (val === 1) {
// console.log("Hej!");
// } else if (val === 2) {
// console.log("Hejdå!");
// } else if (val === 3) {
// console.log("Programmet avslutas.");
// } else {
// console.log("Ogiltigt val, försök igen.");
// }
// } while (val !== 3);

// Förklaring:

// Loopen körs minst en gång och fortsätter tills användaren väljer att avsluta.
