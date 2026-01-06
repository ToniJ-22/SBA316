let form = document.getElementById('healthForm');
let entriesList= document.getElementById('entries');
let moneyDisplay = document.getElementById('money');
let inputs = document.querySelectorAll('input,select');


let balance = 0;

form.addEventListener('submit', function(event){
      event.preventDefault();

    const date = document.getElementById('date').value;
    const water = Number(document.getElementById('water').value);
    const steps = Number(document.getElementById('steps').value);
    const mood = document.getElementById('mood').value;

    let earned =0;
    if(water >= 64)earned += 10;
    if(steps >= 5000)earned += 10;
    if(mood==='Good')earned +=3;
    else if(mood==='Okay')earned +=2;
  else  if(mood==='Bad')earned +=1;

    balance += earned;
    moneyDisplay.textContent = `$${balance.toFixed(2)}`;

const li = document.createElement("li");

li.innerHTML = 
 ` <strong>${date}</strong><br>
   Water: ${water} oz<br>
  Steps: ${steps}<br>
  Mood: ${mood}<br>
  Earned: $${earned}<br>
  Total Balance:$${balance.toFixed(2)}
   `;

entriesList.appendChild(li);

alert('You got paid! see you tomorrow');

form.reset();

 });


