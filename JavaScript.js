var age = prompt("How old are you?");


if(Number(age) < 18){
    alert("Sorry, you are too young to drive this car. Powering off");
}
else if(Number(age) > 18){
    alert("Powering On. Enjoy the ride!");
} 
else if(Number(age) === 18){
    alert("Congratulations on your first year of driving. Enjoy the ride!");
}
else{
    alert("Pleas put a correct value!")
}
s