/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div


// Get number of people from number of people div
var numberofpeople = document.getElementById('numberOfPeople');
var current_person = Number(numberofpeople.innerText);


// ** Calculate the total bill per person **
const calculateBill = () => {
    // get bill from user input & convert it into a number
    let totalInput = document.getElementById('billTotalInput');
    let totalValue = Number(totalInput.value);
    // console.log(totalValue);
    // get the tip from user & convert it into a percentage (divide by 100)

    let total_tip = document.getElementById('tipInput');
    let total_tip_value = total_tip.value/100;

    // get the total tip amount
    let total_tip_amount = total_tip_value*totalValue; 
  
    // calculate the total (tip amount + bill)
    let total_pay = totalValue + total_tip_amount;

    // calculate the per person total (total divided by number of people)


    // update the perPersonTotal on DOM & show it to user
    let per_person_total = document.getElementById('perPersonTotal');
    per_person_total.innerText = `$${total_pay}`;
    return  total_pay;

}
// ** Splits the bill between more people **
const increasePeople = () => {
    // increment the amount of people
    current_person += 1;
    
    // update the DOM with the new number of people
    numberofpeople.innerText = current_person;
    
    // calculate the bill based on the new number of people
    let temp_increase_pay = calculateBill();
    let per_person_pay = document.getElementById('perPersonTotal');
    let temp =  (temp_increase_pay / current_person).toFixed(3);
    per_person_pay.innerText  = `$${temp}`;
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
  
    // let current_person = Number(numberofpeople.innerText);
    // decrement the amount of people
    if(current_person > 1){
        current_person -= 1;
    }
    else{
        alert('the number of users cannot be less than one');
    }
    // update the DOM with the new number of people
    numberofpeople.innerText = current_person;
    let temp_increase_pay = calculateBill();
    let per_person_pay = document.getElementById('perPersonTotal');
    let temp =  (temp_increase_pay / current_person).toFixed(3);
    per_person_pay.innerText  = `$${temp}`;    
  
    // calculate the bill based on the new number of people
  
  }