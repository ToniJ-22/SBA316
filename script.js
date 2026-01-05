let form = document.getElementById('healthForm');
let entriesList= document.getElementById('entries');
let moneyDisplay = document.getElementById('money');
let inputs = document.querySelectorAll('input,select');


let balance = 0;

form.addEventListener('submit', function(event){
      event.preventDefault();

    const date = document.getElementById('date').vaule;
    const water = Number(document.getElementById('water').vaule);
    const steps = Number(document.getElementById('steps').vaule);
    const mood = document.getElementById('mood').vaule;

    if (!date || !water || !steps || !mood){
        alert('Complete all required fields!');
        return;
    }

    let earned = 0;
    if(water >= 64)earned += 15;
    if(steps >= 5000)earned += 10;
    if(mood==='Good')earned +=5;
    if(mood==='Okay')earned +=5;
    if(mood==='Bad')earned +=5;

    balance += earned;
    moneyDisplay.textContent = balance;

  });
  


