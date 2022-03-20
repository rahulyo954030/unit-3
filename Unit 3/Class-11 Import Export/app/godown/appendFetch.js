const getdata = async (url)=>{
    
        try{
        let res = await fetch(url)
        let data = await res.json()
        return data.meals    
     }
     catch(error){
         console.log(error)
     }
};

const display=(data,parent)=>{
    parent.innerHTML=""

    data.map(function(element){
         let div2 = document.createElement("div")
         div2.setAttribute("id","div2")
         
         let name1 = document.createElement("h2")
         name1.innerHTML= "Dish Name:"+" "+element.strMeal

         let foodImg1 = document.createElement("img")
         foodImg1.setAttribute("src",element.strMealThumb)

         let cate = document.createElement("p")
         cate.innerHTML= "Category:"+" "+element.strCategory
         
         let area = document.createElement("p")
         area.innerHTML= "Area:"+" "+element.strArea

         div2.append(name1,foodImg1,cate,area)
         parent.append(div2) 
    })
}
export {getdata,display}