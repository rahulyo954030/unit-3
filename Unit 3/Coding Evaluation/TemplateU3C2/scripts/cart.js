let addArr = JSON.parse(localStorage.getItem("cart")) || []

// console.log(addArr)

display(addArr)

function display(addArr){
    console.log(addArr)
    
        addArr.map(function(element,index){
        let div = document.createElement("div")
        div.setAttribute("id","divo")

        let image = document.createElement("img")
        image.setAttribute("src",element.strMealThumb)


        let name = document.createElement("h2")
        name.innerHTML= element.strMeal


        let price = document.createElement("h3")
        price.innerHTML="Rs."+" "+ element.price


        let addToCartButton = document.createElement("button")
        addToCartButton.innerText= "Remove"
        addToCartButton.setAttribute("id","remove")
        addToCartButton.addEventListener("click", function(){
           addArr.splice(index,1)
           localStorage.setItem("cart",JSON.stringify(addArr))
           div.remove()
           window.location.reload()
            
            
        })


        div.append(image,name,price,addToCartButton)

        document.querySelector("#cart").append(div)

    
    })

}



