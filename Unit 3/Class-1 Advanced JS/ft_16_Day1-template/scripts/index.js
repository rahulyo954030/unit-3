//Store the generated number in LocalStorage with key "number".
var btntext = document.querySelector("#throw_dice")

btntext.addEventListener("click", function(){
    var randomNumber = Math.floor(Math.random()*6+1)
    localStorage.setItem("number", randomNumber);
    window.location.href="./display.html"
})