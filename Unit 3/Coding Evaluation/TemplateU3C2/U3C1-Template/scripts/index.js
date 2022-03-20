//store the products array in localstorage as "products"
document.querySelector("#product_form").addEventListener("submit",detail)
let proArr = JSON.parse(localStorage.getItem("protucts")) || []
function detail(){

    let name = document.querySelector("#name").value;
    let price = document.querySelector("#price").value;
    let type = document.querySelector("#type").value;
    let image = document.querySelector("#image").value;


function data(){
    this.name=name
    this.price=price
    this.type=type
    this.image=image
}

let  yo = new data()
console.log(yo)
proArr.push(yo)

localStorage.setItem("protucts",JSON.stringify(proArr))


}