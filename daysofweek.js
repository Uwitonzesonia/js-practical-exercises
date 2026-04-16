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
// function startswith(){
//   let sentence = "A have big heaD";
//   console.log(sentence.startsWith("A"));
//   console.log(sentence.startsWith("h"));
//   console.log(sentence.startsWith(" have"));
//   console.log(sentence.startsWith(" "));
// }
// startswith();
// function startwith(){
//   let sentence1 = " I love you";
//   let rwandan = "+250792827279";
//   console.log(sentence1.startsWith("you",5));
//   if (rwandan.startsWith("+250")){
//     console.log("rwandan number");
//   }
//   else {
//     console.log("not rwandan number");
//   }
// }
// startwith();
// function built(){
//   let sentence = "  I love you   ";
//   console.log(sentence.toUpperCase());
//   console.log(sentence.toLowerCase());
//   console.log(sentence.length);
//   console.log(sentence.trim());
//   console.log(sentence.includes("love"));
//   console.log(sentence.includes("hate"));
//   console.log(sentence.startsWith("I"));
//   console.log(sentence.startsWith(" love"));
//   console.log(sentence.endsWith("you"));
//   console.log(sentence.endsWith("I"));
//   console.log(sentence.startsWith("love",3));
// }
// built();
// 
// function Array(){
//   let lectures = ["rebecca","gloria","Gashaija","brendh"];
//   let students = ["kaneza"," mukamana","mukanabana","mukamabano"];
//   lectures.push("Mukarukundo");
//   students.push("paul");
//   lectures.unshift("muhoza");
//   students.unshift("kayitesi");
//   console.log(lectures);
//   console.log(students);
//   console.log(lectures.join(" "));
//   console.log(students.join(" , "));
//   console.log(lectures.join(" - "));
//   console.log(students.join( " /" ));
//   console.log(lectures.reverse());
//   console.log(students.sort());
//   console.log(lectures.slice(1,2));


// }
// Array();
// function array(){
// let students = ["Sonia", "Alice", "Bob"];

// students.forEach(function(student) {
//     console.log(student);
// });
// }
// array();
// function loop(){
//   for (let i=0 ; i<=5 ; i++){
//     console.log(i);
//   }
// }
// loop();
// function loops(){
//  let names = ["sonia","alice","bob"];
//  console.log("Hello" + names(0));
//  console.log("Hello" + names(1);
//  console.log("Hello" + names[2]);
// }
// function slice(names){
//   console.log(names.slice(0 , 1));
//   console.log(names);
// }
// slice("sonia");
// function check() {
//   let age = 67;
// let converted = String(age);

// console.log(converted);        // 25
// console.log(typeof converted); // "number"

// }
// check();
// function check(){
//   let Taxe_late = 0.08;
//   let amount = 99.99;
//   amount = amount * 2 ;
//   amount = amount + ( amount * Taxe_late);
//   console.log(amount);
//   console.log(amount.toFixed(4));

  
// }
// check ();
// function check() {
//   let amount = 99.99;
// // a general block
// {
// amount = amount * 2;
// console.log( amount );  // 199.98
// }
// }
// check() ;
// function check() {
//     for( i=0 ; i <=9 ; i++){
//         console.log(i);
//     }
// }
// check ();

// const TAX_RATE = 0.08;
// function calculateFinalPurchaseAmount(amt) {
// // calculate the new amount with the tax
// amt = amt + (amt * TAX_RATE);
// // return the new amount
// return amt;
// }
// var amount = 99.99;
// amount = calculateFinalPurchaseAmount( amount );
// console.log( amount.toFixed( 2 ) );     
// // "107.99"
// calculateFinalPurchaseAmount();

    // console.log("Hello");
    // console.log("Hello");
    // console.log("Hello");
    // for(i=1 ; i <= 3 ; i++){
    //     console.log("Hello");
    // }
    
    // let i = 0;

    //    while (i <= 5){
    //   console.log(i);
    //      i++;
    //           }
//     for (let i = 1; i <= 3; i++){
//   console.log(i);
// }
// let number = 3;
// while(number >=0){
//   console.log("how can i help you");
//   number = number - 1;
// }
// let number = 3 ;
// do {
//   console.log("how can i help you");
//   number = number - 1 ;
// } while (number < 0);
// var a = "42";
// var b = a * 1;
// console.log(typeof a);              
// console.log(typeof b); 
// function foo() {
// var a = 1;
// function bar() {
// var b = 2;
// function baz() {
// var c = 3;
// function buz (){
//   var d = 4 ;
//   function biz () {
//     var e= 5 ;
//     console.log(a,b,c,d,e);
//   }
//   biz ();
//   console.log(a,b,c,d);
// }
// buz() ;
// console.log(a,b,c);
// }
// baz()
// console.log( a, b );        
// }
// bar();
// console.log( a );               
// }
// foo();
// function dom(){
// var x;
// console.log(x); // undefined
// x = 5;

// }
// dom () ;
let user = {
  name: "John",
  greet() {
    console.log(this.name);
  }
};
user.greet();
