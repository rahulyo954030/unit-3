let proArr = JSON.parse(localStorage.getItem("protucts")) || []

document.querySelector("#add_product").addEventListener("click", btn1)
function btn1(){
proArr.map(function(element){
    let div1 = document.createElement("div")
    div1.setAttribute("id","div1")

    let img = document.createElement("img")
    img.innerText=element.image
    img.setAttribute("src",element.image)

    let name = document.createElement("p")
    name.innerText=element.name
    name.setAttribute("id","Pname")

    let price = document.createElement("p")
    price.innerText="Price :"+" "+element.price

    let type = document.createElement("p")
    type.innerText="Type :"+" "+element.type

    let removeBtn = document.createElement("button")
    removeBtn.innerText="Remove"
    removeBtn.setAttribute("id","removeBtn")



    div1.append(img,name,price,type,removeBtn)
    document.querySelector("#products_data").append(div1)

    
    document.querySelector("#removeBtn").addEventListener("click",removeitem)
    function removeitem(){
       
        
    }
})
}
