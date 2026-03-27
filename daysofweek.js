// function daysofweek () {
  
//   let day = 4;
//   if (day ==1){
//     console.log("the day is monday");
//    }
//   else if ( day == 2){
//     console.log("the day is tuesday");
//   }
//   else if ( day == 3){
//     console.log("the day is wensday")
//   }
//   else if ( day == 4){
//     console.log("the day is thursday")
//   }
// else if ( day == 5){
//   console.log("the day is friday")
// }
//   else if (day == 6){
//     console.log("the day is saturday")
//   }
//   else {
//     console.log("the day is sunday")
//   }
//   return day;
// }
//  daysofweek ();
// function howManydays(month){
//   let days;
//   switch (month){
//       case 1:
//       case 3:
//       case 5:
//       case 7:
//       case 8:
//       case 10:
//       case 12:
//       days = 31;
//       break;
//       case 4:
//       case 6:
//       case 9:
//       case 11:
//       days = 30 ;
//       break;
//       case 2:
//       days = 28;
//       break;
//       default:
//       days = "invalid day";
//   }
//   console.log(howManydays(8));
//   return days;
// }
// howManydays();
//  
// let score = 85;

// if (score >= 90) {
//     console.log("You passed!");
// }

// console.log("Program continues here...");
// function elseif(){
//   let marks = 89;
//   if (marks >= 90 ) {
//     console.log("Best perform");
//   }
//   else if ( marks >= 80 ){
//     console.log("very good");
//   }
//   else {
//     console.log("try to perform well");
//   }
// }
// elseif();
// function ifelse(){
//   let Age = 60;
//   if (Age >= 70){
//     console.log("you are adult take a rest");
//   }
//    else {
//     console.log("you still have energy to work");
//    }

// }
// ifelse();
// function weekdays(){
//  let days ;
//   switch(days){
//     case 1: 
//     console.log("starting of the week");
//     break;
//     case 2: 
//     console.log("enjoing the week");
//     break;
//     case 3:
//       console.log(" middle of the week");
//       break;
//       case 4:
//         console.log("ending of the days of work");
//         break;
//         case 5:
//           console.log("starting the weekend");
//           break;
         
//   }
// }
// weekdays();
// function builtfunction(){
//   let name = "Uwitonze sonia";
//   let marks = 100;
//   let height = 4.5;
//   console.log(name.toUpperCase());
//   console.log(name.toLowerCase());
//   console.log(name.length);
// }
// builtfunction();
// function comparing(){
//   let name = "UWITONZE";
//   if(name.toLowerCase() ==="uwitonze"){
//     console.log(" this is correct");
//   }
//   console.log("we can leave");
// }
// comparing();
// function trim(){
//   let name = "   Sonia   ";
//   let sentence = "I am the win";
//   console.log(name.trim());
//   console.log(sentence.includes("javascript"));
// }
// trim();
/* To day exercises*/
// function boolToWord( bool ){

//   if( bool === true){
//     console.log("yes");
//   }
//   else if ( bool === false) {
//     console.log("No");
//   }
  
// }
// boolToWord(true);
// boolToWord(false);

// function includes(){
//   let sentence = " we are auca students";
//   console.log(sentence.includes("are"));
//   console.log(sentence.includes("we"));
//   console.log(sentence.includes("hey"));
//   console.log(sentence.includes("hope"));
// }
// includes();
// function includes(){
//   let sentence = "uwitonzesonia2005@gmail.com";
//   if (sentence.includes("@")){
//     console.log("valid email");
//   }
//   else {
//     console.log("invalid email");
//   }
// }
// includes();
function startswith(){
  let sentence = "A have big heaD";
  console.log(sentence.startsWith("A"));
  console.log(sentence.startsWith("h"));
  console.log(sentence.startsWith(" have"));
  console.log(sentence.startsWith(" "));
}
startswith();