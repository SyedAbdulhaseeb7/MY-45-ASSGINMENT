//task 2.......................................................................................................

//let person = 'abdul rehman';
//console.log("hello ".concat(person, " would you like to learn some python "));

//task 3............................................................................................................

//let person = "Abdul haseeb"
//console.log("Lowercase:", person.toLowerCase());
//console.log("Uppercase:", person.toUpperCase());
//console.log("Titlecase:", toTitleCase(person));
//function toTitleCase(str) {
   // return str.replace(/\b\w/g, function(char) {
     //   return char.toUpperCase();
    //});}

    // task 4............................................................................................................
    //let poetry:string = "ALLAMA IQBAL ONCE SAID";
   // let qoute:string = "he ultimate aim of the ego is not to see something, but to be something..Vision without power does bring moral elevation but cannot give a lasting culture";
   // console.log(`${poetry}'${qoute}'`);

   //TASK 5 .................................................................................................
   //let famous_person:string="Ralph Waldo Emerson"
  // let massege = `${famous_person}, Do not go where the path may lead, go instead where there is no path and leave a trail. `;
  // console.log(massege);

  //TASK 6 ....................................................................................
 // let character : string = "haseeb shaikh";
 // let value = `\n\t ${character} \n\t`;
 // console.log(value);

 // Task 7..........................................................................................

// // Addition
// console.log("Addition:", 5 + 3);

// // Subtraction
// console.log("Subtraction:", 10 - 2);

// // Multiplication
// console.log("Multiplication:", 4 * 2);

// // Division
// console.log("Division:", 16 / 2);

//TASK 8..........................................................................................

// let mynumber :number = 7;
// let massege =`my favorite number is ${mynumber} here`;
// console.log(massege);

// TASK 9..............................................................................................
  
//[author :Abdul haseeb]
//[wednesday: february : 14, 2024 ];

// TASK 10..................................................................................................

// const friend :string []= ['Mehekalamgir', 'haseeb','hamza','ali'];
// console.log(friend);

//TASK 11...............................................................................................

// let friendo :string [] =["Ali", "Fatima", "Mohammad", "Zainab", "Aisha", "Osman", "Maryam", "Abdullah", "Samia", "Sara"];
// let massege = 'welcome';
// for(let i =0; i<= friendo.length; i++){
//   console.log(`${friendo[i]}, ${massege}`);
// }

// TASK 12 ..........................................................................................


// let favoriteTransportation: string[] = ["car", "bicycle", "motorcycle", "scooter", "skateboard"];

// favoriteTransportation.forEach(transport => {
//     console.log(`I would like to own a ${transport}.`);
// });

// TASK 13...........................................................................................
// let guestlist :string [] = ["Sarah","Christopher", "Rachel", "Daniel", "Lauren", "Matthew"];
// guestlist.forEach(guest =>{

// console.log(`${guest} you are invite to a dinner`)

// });


// 14...............................................................................................
// var guestlist = ["Sarah", "Christopher", "Rachel", "Daniel", "Lauren", "Matthew"];
// var notattend = ['sara'];
// console.log("".concat(notattend, " guest not attend at dinner"));
//15
// let guestlist :string [] = ["Sarah","Christopher", "Rachel", "Daniel", "Lauren", "Matthew"];
//  let notattend : string = 'sara';
// console.log(`Unfortunately, ${notattend} cannot make it to the dinner.`);
// let newguest :string = 'mehek alamgir';
// guestlist[guestlist.indexOf(notattend)] = newguest;
// console.log(guestlist);
// guestlist.map((items)=>{
// console.log(`dear ${items} you are invite to a dinner`)


// })

//16 .......................................................................................................
// let guestlist :string [] = ["Sarah","Christopher", "Rachel", "Daniel", "Lauren", "Matthew"];
// let notattend : string = 'Rachel';

//   let newguest :string = 'mehek alamgir';
// guestlist[guestlist.indexOf(notattend)] = newguest;

//  guestlist.map((items)=>
//  console.log(`dear ${items} you invite to bigger table to dinner`));

// let guestlist :string [] = ["Sarah","Christopher", "Rachel", "Daniel", "Lauren", "Matthew"];
// let newguest : string = 'abdul rehman';
// guestlist.unshift(newguest);
// console.log(guestlist);

//part3

// let guestlist1 :string [] = ["Sarah","Christopher", "Rachel", "Daniel", "Lauren", "Matthew"];

//  let newguest1 :string = 'fatima';
// let middleArry = guestlist1.length/3
// guestlist1.splice(middleArry,0,newguest1);
// console.log(guestlist1);
// //part4
// let guestList: string[] = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie", "Isaac Newton"];

// guestList.forEach(person => {
//     console.log(`Dear ${person}, you are cordially invited to dinner. Please join us for a delightful evening.`);
// });

//TASK 17.......................................................................................

//part 1
// let guest :string [] = ['haseeb', 'sonia','ali','jamil','akib', 'hamad','shobie','kamal'];
// console.log(`Dear ${guest[0]}, now you are still invited to dinner.`);
// console.log(`Dear ${guest[1]}, now you are still invited to dinner.`);
// for(let i = 2; i < guest.length; i++) {
  //console.log(`Sorry ${guest[i]}, we won't be able to accommodate you for dinner.`);
// }
// part 2
// let guest :string [] = ['haseeb', 'sonia','ali','jamil','akib', 'hamad','shobie','kamal'];
// while( guest.length > 2){

//   const guestremove =guest.pop();
//   console.log(`${guestremove}  you can’t invite them to dinner!`);
// }
//part 3

// let guest :string [] = ['haseeb', 'sonia'];
//  while( guest.length > 2){
//   const guestremove =guest.pop();
//   console.log(`${guestremove}  you can’t invite them to dinner!`);
 
//  };
//par4
//  for(let item  of guest){
// console.log(`${item} you are sitll invite to dinner`)
//  }

//TASk 18 ............................................................................................

// let country :string[] = ["United States", "pakistan", "saudia arbia", "France", "Germany",];
// //part1
// //• Print your array in its original order.
// console.log(`orignal-order:${country}`);
// //part2
// // Print your array in alphabetical order without modifying the actual list.
// let alphabetic = [...country].sort();
// console.log(`alphabetical order without modifying the actual list ${alphabetic}`);
// //part3
// //• Show that your array is still in its original order by printing it.
//  console.log(` original order by printing it. ${ country}`);

// //part4
// //• Reverse the order of your list. Print the array to show that its order has changed.
// let reverse = [...country].sort().reverse();
// console.log(`Reverse the order of your list${reverse}`);
// //part5
// // Reverse the order of your list again. Print the list to show it’s back to its original order
// let reverseagain = country.reverse();
// console.log(` original order by printing it. ${reverseagain}`);
// //part6
// //it’s back to its original order.
// country.reverse();
// console.log(`it’s back to its original order.${country}`);
// //part7
// //• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// country.sort();
// console.log(`•  alphabetical its order has been changed ${country}`)
// //part8
// // Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// country.sort((a,b)=> b.localeCompare(a));
// console.log(`it’s stored in reverse alphabetical ${country}`);

//TASk 19 ...................................................................................

//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
//of people you are inviting to dinner.
//var guest = ['haseeb', 'sonia', 'ali', 'jamil', 'akib', 'hamad', 'shobie', 'kamal'];
//var lenght = guest.length;
//console.log("you are inviting ".concat(lenght, " people to dinner.\n"));
//task 20 
//Think of something you could store in a array. For example, you could make a list of 
//mountains, rivers, countries, cities, languages, or anythingelse you’d like.
// Write a program that creates a list containing these items.

// let listitems : string [] = ['pakistan ','united state','nepal','japan','china'];
// console.log('THE LIST OF COUNTRY');
// console.log(listitems);

// //task 21 ...........................................................................................
// 21. //They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// let person : {name:string, sname:string, age:17;} =
// {name:'HASEEB',sname:"yousuf",age:17};
// console.log(person);
//task 22 
//
22.// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
//to produce an index error. Make sure you correct the error before closing the program.

// let error :number[]=[1,2,3,4,5,6,7];
// console.log(error[9]);
// if(error.length>9){
//   console.log(`your number is ${[9]}`)
// }else{
//   console.log(`your number is 6`)

//   }
//task 23 ..............................................................................................

23.// Conditional Tests: Write a series of conditional tests. Print a statement
//describing each test and your prediction for the results of each test. Your code
//should look something like this:
//part1 true

 //let car :string = 'haseeb';
// console.log('IS CAR == HASEEB ? I PRIDICT IS TRUE ');
// console.log('IS CAR == hamza ? I PRIDICT IS FALSE ');
// console.log(` HASEEB \t${car == "haseeb"}`);
// true
//  console.log(` HASEEB \t${car == "HASEEB"}`);
//  true 
// //   console.log(5==5)
// true
// //   console.log('hello' == 'hello')
// true
// //   console.log(`5!= 4`);
// true
// //   let num :number =5;
// true
// //   if (num!=4) {
// //     console.log(true);
// // }else{
// //   console.log(false)
// // }
//false
// let num :number =50;
//    if (num!=50) {
//      console.log(true);
//  }else{
//    console.log(false)}
//  console.log( `Hamza \t ${car == 'HAMZA'}`);
//  false
// // console.log( `Hamza \t ${car == 'hamza'}`);
// false 
// console.log(`is car.length 5 ==  IS PREDICT FALSE`);
// console.log(car.length ==  5 );
// //fasle
// console.log(`if 20 < 30  IS PRIDICT IS FALSE`);
// console.log(40 < 30 );
//false
//task 24.........................................................................................
//Tests for equality and inequality with strings
// let names :string = 'haseeb';
// let string:string= '87';
// if(names != string) {
//   console.log(false)
// }else{
//   console.log(true)
// };

  
// let names :number = 199;
// let string:number= 87;
// if(names != string) {
//   console.log(false)
// }else{
//   console.log(true)
// };
//• Tests using the lower case function
// let string :string= "Sir Zia Khan"
// let string2 :string = 'ameen alam'
// let mmyfunc = () =>{
//  let stringchange = string.toLowerCase() == string.toLowerCase();
// let stringchange2 = string.toLowerCase() == string2.toLowerCase();
// console.log(stringchange);
// console.log(stringchange2);
// }
// mmyfunc();
//PART 2 
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// let number1:number=50;
// let number2:number=200;
// let number3:number=50
// let muynum = ()=>{
//   if(number1==number3){
//     console.log(`your number is equel`)
//   }
//   else{
//     console.log(`your number are not equal`)
//   }
 
// }
// muynum();

//   let mynum2 = ()=>{
// if(number1==number2){
// console.log(`your number is are equal `)


// }else{
//   console.log(`your number are not equal`)
// }
//   }
//   mynum2();


// let number1:number=100;
// let number2:number=200;
// let number3:number=100

// let greater = ()=>{
//   if(number3 < number2){
//     console.log(`your number is equel ${number2} less then ${number1}`)
//   }
//   else{
//     console.log(`your number are  ${number2} less than ${number1}`)
//   }
 
// }

// greater();

// let greater2 = ()=>{
//   let numn = number1 > number2;
//   numn = true;
//  numn = false;
//  console.log(numn);
// }
// greater2();

// const num1: number = 10;
// const num2: number = 8;

// if (num1>= num2) {
//     console.log("value1 is greater than or equal to value2");
// } else {
//     console.log("value1 is not greater than or equal to value2");
// }

// if (num1 <= num2) {
//   console.log("value1 is greater than or equal to value2");
// } else {
//   console.log("value1 is not greater than or equal to value2");
// }
//Tests using "and" and "or" operators
// let number = 10 ;
// let number2 = 5 ; 
// let number3= 10 ;
// let number4= 10; 
//  if(number == number2 && number4 == number3){
//   console.log(`you are 10 equal 10 `)

//  }else{
//   console.log(`you are 10 not equal 10 `)
//  }
//  if(number == number2 || number4 == number3){
//   console.log(`you are 10 equal 10 `)

//  }else{
//   console.log(`you are 10 not equal 10 `)
//  }
// • Test whether an item is in a Array

// // • Test whether an item is not in Array
// let array: number[] = [1, 2, 3, 4, 5];
// let itemToFind: number = 3;

// if (array.findIndex(itemToFind)) {
//   console.log(`${itemToFind} is not in the array.`);
// } else {
//   console.log(`${itemToFind} is in the array.`);
//  let banknum: number[] = [1, 2, 3, 4, 5];
// let uinum: number = 9;

// if (banknum.indexOf(uinum) === -1) {
//   console.log(`${uinum} is not in the array.`);
// } else {
//   console.log(`${uinum} is in the array.`);
// }
//TASK 25................................................................................................



// let alain :string= 'green'
// if(alain === 'green'){
//   console.log('you earned 5 point')
// }else{
//   console.log('you earned 0 point')

// let alain :string= 'green'
// if(alain === 'blue'){
//   console.log('you earned 5 point')
// }else{
//   console.log('no output')
// }

// task 26....................................................................................

// let alain :string= 'yellow';
// if(alain === 'red'){
//   console.log(`Congratulations! You just earned 5 points`)

// }else if(alain === 'blue'){
//   console.log(`Congratulations! You just earned 10 points`)
// }else if(alain === 'green'){
//   console.log(`Congratulations! You just earned 15 points`)
// }else{
//   console.log(`Congratulations! You just earned 20points`)
// }

//part 1
// let alien :string= 'green';
// if (alien === 'green'){
// console.log(`the player just earned 5 points for shooting the alien.`)
// }
// let alien2 :string= 'green';
// if (alien2 === 'green'){
// console.log(`the player just earned only  10 points alien.`)
// }
// Version 1: Runs the if block
// const alienColor: string = "green"; 


// if (alienColor === "green") {
//     console.log(`Congratulations! You just earned 5 points.`);
// } else {
//     console.log(`Oops! The alien is not green. No points earned.`);
// }

// const alienColor2: string = "red"; 


// if (alienColor2 === "green") {
//     console.log(`Congratulations! You just earned 5 points`);
// } else {
//     console.log(`Oops! The alien is not green. No points earned`);
// }

// let alain1:string='red';


// if(alain1 ==='green'){
//   console.log(`that the player just earned 5 points for alien`);
// }else if(alain1 === 'yellow'){
//   console.log(`that the player just earned 5 points for alien`);
// }else if(alain1 === 'red'){
//   console.log(`that the player just earned 5 points for shooting the alien.`);
// }else{
//   console.log('no output')
// }
// let alain2:string='green';


// if(alain2==='green'){
//   console.log(`that the player just earned 5 points for alien`);
// }else if(alain2 === 'yellow'){
//   console.log(`that the player just earned 5 points for alien`);
// }else if(alain2 === 'red'){
//   console.log(`that the player just earned 5 points for shooting the alien.`);
// }else{
//   console.log('no output')
// }

// let alain3:string='yellow';

// if(alain3 ==='green'){
//   console.log(`that the player just earned 5 points for alien`);
// }else if(alain3=== 'yellow'){
//   console.log(`that the player just earned 5 points for alien`);
// }else if(alain3 === 'red'){
//   console.log(`that the player just earned 5 points for shooting the alien.`);
// }else{
//   console.log('no output')
// }
//part 3

// let alain_color3:string='green';


//task 27..................................................................................


// if(alain_color3==='orange'){
//   console.log(`green player just earned 5 points for alien`);
// }else if(alain_color3 === 'yellow'){
//   console.log(`yellow player just earned 5 points for alien`);
// }else if(alain_color3=== 'green'){
//   console.log(` red player just earned 20 points for shooting the alien.`);
// }else{
//   console.log('no output')
// }

// let alain_color2:string='red';

// if(alain_color2 ==='green'){
//   console.log(`player just earned 5 points for alien`);
// }else if(alain_color2 === 'yellow'){
//   console.log(`yellow player just earned 10 points for alien`);
// }else if(alain_color2 === 'red'){
//   console.log(`red player just earned 20 points for shooting the alien.`);
// }else{
//   console.log('no output')
// }

// let alain_color4:string='blue';

// if(alain_color4 ==='purple'){
//   console.log(`yellow the player just earned 5 points for alien`);
// }else if(alain_color4 === 'blue'){
//   console.log(`blue the player just earned 10 points for alien`);
// }else if(alain_color4 === 'red'){
//   console.log(`red the player just earned 5 points for shooting the alien.`);
// }else{
//   console.log('no output')
// }

// task 28.......................................................................................
// let age_person:number = 45;

// if (age_person <4 ) {
//   console.log('you are baby');
// } else if (age_person < 14) {
//   console.log('your age is TODLLER');
// } else if (age_person < 20) {
//   console.log('your age is teenager');
// } else if(age_person < 65){
//   console.log('your age is adult');
// } 
// else {
//   console.log('you are not baby');
// }
// task 29........................................................................................



// let favorite_friut :string[]=['mango','orange','apple'];
// for(let fav of favorite_friut){
// console.log(`${fav}\t my favorite friut`);

// }

// let favorite_friut :string[]=['mango','apple','banana','kiwi','berry'];
//  if(favorite_friut.indexOf('mango')!== -1){
//   console.log(`You really like mango`)
// }if(favorite_friut.indexOf('banana')!== -1){
//   console.log(`You really like banana`)}
//   if (favorite_friut.indexOf('apple')!== -1){
//     console.log(`You really like apple`)
//   }
//   if (favorite_friut.indexOf('berry')!== -1){
//     console.log(`You really like kiwi`)
//   }
//   if (favorite_friut.indexOf('berry')!== -1){
//     console.log(`You really like berry`)
//   }

// task 29 ..........................................................................................
// let person_name :string[]=['admin','haseeb','mehek alamgir','ali','sonia']
// person_name.forEach(person_name =>{
// console.log(`HELLO ${person_name} WELCOME BACK TO OUR WEBSITE `)

// })


// let person_name :string[]=['admin','haseeb','mehek alamgir','ali','sonia']
// person_name.forEach(person_name =>{
// if(person_name === "admin"){
//   console.log(` Hello admin, would you like to see a status report?`)
// }else{
//   console.log(`HELLO ${person_name} WELCOME BACK TO OUR WEBSITE `)
// }

// })

// let person_name :string[]=[]
// if(person_name.length === 0){
//   console.log(`we need to find some user!`)
//   }else{
//   for(let person of person_name){
//     if(person === 'admin'){
//        console.log(` Hello admin, would you like to see a status report?`)
//     }else{
//       console.log(`HELLO ${person_name} WELCOME BACK TO OUR WEBSITE`)

//     }

//task 30
// let current_name:string[]=["admin","haseeb","Mehek","Yonus","Yousuf"]
// let new_game:string[]=["admin","haseeb","ali","hamza","lala"]
// let current_name2:string[]=current_name.map(user => user.toLowerCase())
// for (let new_user of new_game){
//   if(current_name2.includes(new_user)){
//     console.log(`Sorry, the username ${new_user} is already taken. Please choose a different one.`)}
//     else{
//       console.log(`${new_user} username is available.`)
//     }}
// TASK 33.............................................................................................

// let num_arry:number[]=[1,2,3,4,5,6,7,8,9];
// for(let new_num of num_arry){
//   if(new_num === 1){
//     console.log(`${new_num}st`)
//   } else if(new_num === 2){
//     console.log(`${new_num}nd`)
//   } else if(new_num === 3){
//     console.log(`${new_num}rd`)

//   }else{
//     console.log(`${new_num}th`)
//   }
// }
// task 34 ..............................................................................................


// let pizza_arry:string[]=['pepperoni', 'chicken','vegitable'];

// for(let pizza of pizza_arry){
//   console.log(`${pizza}`)
// }

// for(let new_piza of pizza_arry){
//   console.log(`I like ${new_piza} pizza`)
// }
// console.log(` I really love pizza`)

// task 35..............................................................................

// let animal_arry :string[]=['dog','cat','cow',];
// for(let new_animal of animal_arry){
//   console.log(` A ${new_animal} would make a great pet.`)
// }

// for(let new3 of animal_arry){
// console.log(`but ${new3} there is animal all log tail`)
// }
// task 36................................................................................

// function mytshit(size: string, text: string ):void{
// console.log(`INTER YOU ${size} ON T-SHIRT PRINTED YOUR ${text}`);
// }
// mytshit('medium',"HASEEEB");

// function mytshit2(size:number, text: string ):void{
//   console.log(`INTER YOU ${size} ON T-SHIRT PRINTED YOUR ${text}`);
//   }
//   mytshit2(15,"HASEEEB");
//task 37........................................................................


// function largshirt1(size: string, text: string ):void{
// console.log(`INTER YOU ${size} ON T-SHIRT PRINTED YOUR ${text}`);
// }
// largshirt1('Large',"I LOVE TYPESCRIPT");

// function mediumtshit3(size:string, text: string ):void{
//   console.log(`INTER YOU ${size} ON T-SHIRT PRINTED YOUR ${text}`);
//   }
//   mediumtshit3('medium',"i love typescript");
//task  38.....................................................................................

// function countries(ci: string,cou:string="unknown"){
//   console.log(`${ci} is in ${cou} `)
// }
// countries('Islamabad','pakistan');
// countries('new york','usa');
// countries('tokyo',);

// task 39......................................................................................
// function city_country(city:string,COUNTRY:string){
  
//   return  `"${city},${COUNTRY}"`

// }
// city_country('karachi','pakistan')
// city_country('tokyo','japan');
// city_country('new york','Usa')

// console.log(city_country('karachi','pakistan'))
// console.log(city_country('new york','Usa'))
// console.log(city_country('Russia','Saint Petersburg'))

// task 40............................................................................................
// function make_album(artist:string,Title:string):{artist:string,Title:string}{
//   const dic ={
//     artist:artist.charAt(0).toUpperCase() + artist.slice(1) ,
//     Title:Title.charAt(0).toUpperCase() + Title.slice(1)
    
//   }
//   return dic;
// }
//   let album = make_album('ali','light');
//   console.log(album);
//   let album2 = make_album('mehek','dark');
//   console.log(album2);
//   let album3 = make_album('hafiz','glory');
//   console.log(album3);
// // task 41.............................................................................................

// let magic :string[]=['glory','haseeb','kmal','yonus'];
// function magic_name(name:string[]){
//   for(let magions of name){
//     console.log(magions.charAt(0).toUpperCase() + magions.slice(1));
    
//   }
// }
// // magic_name(magic)
// // task 42...................................................................................

// let arrry_magic2 :string[]=['haseeb','komal','kamal','jawad'];

// function magic_hold2(name:string[]){
// for( let i =0; i < name.length ;i++){
//   name[i]=`${name[i]}  the great magicoins`

// }
//  return name
// }
// // let magic2 = magic_hold(arrry_magic);
// // console.log(magic2);
// // task 43.......................................................................................

// let arrry_magic :string[]=['haseeb','komal','kamal','jawad','open','kowalss'];

// function magic_hold(name:string[]){
// for( let i =0; i < name.length ;i++){
//   let magicit :string[]=[];
//   magicit.push(name[i] + 'the great magic');

// }
//  return name
// }
// let magic2 = magic_hold(arrry_magic);
// magic_name(magic2)
// let magixc=magic_hold2(magic2)
// console.log(magixc);
// task 44.............................................................................

// function sandwich(...sandwich_item :string[]){
//   console.log(`enjoy your order mehek`);
  
//   for(let i =0; i < sandwich_item.length ; i++){
//     sandwich_item[i]=sandwich_item[i].charAt(0).toUpperCase() + sandwich_item[i].slice(1);
// console.log(`- ${sandwich_item[i]} :`);

//   }
// }
// sandwich('chiken','maionis','tomato')
// sandwich('beef','pasta','cheeze')
// sandwich('oninion','makkhan','veg')
// task 45...............................................................................................
// type car = {
// manufacture:string,
// model:string,
// [key:string]:any;
// }

// function mycar (manufacture:string,model:string,optinal:Record<string,any>):car{
//  let carinfo =
// {manufacture,model,...optinal}
//  return carinfo;
// }

// let Car = mycar('toyota','yaris',{color: 'red' ,year:2024});
// console.log(Car);
// MY 45 ASSINGMENT AS BEEN COMPLETED;