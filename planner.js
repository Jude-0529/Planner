let readline = require("readline-sync")


let seats = []


function get_numberofrows(){



let numb_rows= readline.question("INSERT ROW NUMBER: ")
let numb_columns = readline.question("INSERT COLUMN NUMBER: ")

let columns='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let split = columns.split("")


for(i=1 ; i<=numb_rows ; i++){
  for(j = 0 ;j < numb_columns ;j++){
     seats.push(i+split[j])
  }
}


}


get_numberofrows()

sea1 = ['1A' , '1B' , '1C' , '1D']


function seatarranger(sea2){

  let splita = sea2.split("")
  let letters = 'BDFHJNPRTVXZ'
  let seat

  
  if(letters.includes(splita[1])){
   
    seat = 'unavailable'
    
  }else{

    seat = splita.join("")

  }

  return seat

}


function oneseat_apart(){

  
  let seat_switch = readline.question("")

  if (seat_switch == 'on'){

   return seats.map(seatarranger)

    
  }else{

    return seats
  }

}





console.log(oneseat_apart())







// let numb_rows= readline.question("")
// let numb_columns = readline.question("")

// let columns='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// let split = columns.split("")

// let num = []

// for(i=1 ; i<=numb_rows ; i++){
//   for(j = 0 ;j < numb_columns ;j++){
//      num.push(i+split[j])
//   }
// }

// console.log(num)