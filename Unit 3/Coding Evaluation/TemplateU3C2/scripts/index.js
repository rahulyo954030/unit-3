
let  menu = document.querySelector("#menu")

async function getdata(){
    try{
        let res = await fetch(`https://masai-food-api.herokuapp.com/api/meals/india`)
        let data = await res.json()
        // console.log(data)
        display(data[0].meals)
    }
    catch(err){
        console.log("err :", err)
    }
}
getdata()

function display(data){
    console.log(data)
    
    data.map(function(element){
        let div = document.createElement("div")
        div.setAttribute("id","divo")

        let image = document.createElement("img")
        image.setAttribute("src",element.strMealThumb)


        let name = document.createElement("h2")
        name.innerHTML= element.strMeal


        let price = document.createElement("h3")
        price.innerHTML="Rs."+" "+ element.price


        let addToCartButton = document.createElement("button")
        addToCartButton.innerHTML= "Add To Cart"
        addToCartButton.setAttribute("id","addtocart")
        addToCartButton.addEventListener("click", function(){
            add(element)
        })


        div.append(image,name,price,addToCartButton)

        menu.append(div)

    
    })
    

}



arr1=[];
let addArr = JSON.parse(localStorage.getItem("cart")) || []
function add(element){
    
    arr1.push(element)
    localStorage.setItem("cart",JSON.stringify(arr1))
    
    console.log(arr1)  

    // let counter =0;
    let count = document.querySelector("#count")
    count.innerHTML = arr1.length
}


 
