document.querySelector("#form").addEventListener("submit",checkout)

function checkout(event){
    
 event.preventDefault()

 
 alert("order Accpeted")

 setTimeout(function(){
     alert("order is being cooked")
 },3000)

 setTimeout(function(){
    alert("order is ready")
 },8000)

 setTimeout(function(){
    alert("order out for delivery")
 },10000)

 setTimeout(function(){
    alert("order delivered")
 },12000)

}