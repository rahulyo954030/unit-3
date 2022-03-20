//here retrieve the generated number from Localstorage.

var  show_number = localStorage.getItem("number") || [];

var number = document.querySelector("#show_number");
number.innerText=show_number;

if(show_number==6){
    number.style.color="green"
}
else if(show_number==1){
    number.style.color="yellow"
}
else{
    number.style.color="red"
}
