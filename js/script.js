console.log("Hej Torsdag!");

// // Ämnen: switch

// // Syntax för switch:
// let expression = "Hej";

// switch (expression) {
//   case "Hej":
//     // Kod som köras
//     console.log("Hej: ", expression);
//     break;
//   case "Hej då!":
//     // En annan Kod som köras
//     console.log("Hej då!", expression);
//     break;

//   default:
//     // En tredje alternativ Kod som köras
//     console.log("Wrong expression", expression);
//     break;
// }

// ----------------------------------------
// Exempel 1: Veckodagar

// let daysNumber = 7;
// let daysNumber = new Date().getDay();
// let dayName;

// console.log("daysNumber: ", daysNumber);

// switch (daysNumber) {
//   case 1:
//     dayName = "Måndag";
//     break;
//   case 2:
//     dayName = "Tisdag";
//     break;
//   case 3:
//     dayName = "Onsdag";
//     break;
//   case 4:
//     dayName = "Torsdag";
//     break;
//   case 5:
//     dayName = "Fredag";
//     break;
//   case 6:
//     dayName = "Lördag";
//     break;
//   case 0:
//     dayName = "Söndag";
//     break;

//   default:
//     dayName = "Okänd dag";
//     break;
// }

// console.log("Idag är det: ", dayName);

// ----------------------------------------
// Exempel 2: Enkel Meny

// let choice = prompt(
//   "Välj ett av dessa alternativ: 1: Säg buuu!, 2: Sccreaam!!!, 3: I dont want this anymore!"
// );

// switch (choice) {
//   case "1":
//     console.log("Säg buuu!");
//     break;
//   case "2":
//     console.log("Sccreaam!!!");
//     break;
//   case "3":
//     console.log("I dont want this anymore!");
//     break;

//   default:
//     console.log("Ogiltig inmatning, försök igen.");
//     break;
// }

// ----------------------------------------
