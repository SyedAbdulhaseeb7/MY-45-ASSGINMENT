//task 2.......................................................................................................
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
22.; // Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
//to produce an index error. Make sure you correct the error before closing the program.
// let error :number[]=[1,2,3,4,5,6,7];
// console.log(error[9]);
// if(error.length>9){
//   console.log(`your number is ${[9]}`)
// }else{
//   console.log(`your number is 6`)
//   }
//task 23 ..............................................................................................
23.; // Conditional Tests: Write a series of conditional tests. Print a statement
function mycar(manufacture, model, optinal) {
    var carinfo = __assign({ manufacture: manufacture, model: model }, optinal);
    return carinfo;
}
var Car = mycar('toyota', 'yaris', { color: 'red', year: 2024 });
console.log(Car);
