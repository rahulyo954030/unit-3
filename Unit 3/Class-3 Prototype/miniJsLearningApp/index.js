//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.

let scopeObj={
    p1:"The current context of execution. The context in which values and expressions are visible or can be referenced. If a variable or other expression is not in the current scope, then it is unavailable for use.",
    p2:"Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.",
    p3:"A function serves as a closure in JavaScript, and thus creates a scope, so that (for example) a variable defined exclusively within the function cannot be accessed from outside the function or within other functions.",
    p4:"Before ES6 (2015), JavaScript had only Global Scope and Function Scope.",
    p5:"JavaScript has function scope: Each function creates a new scope.",
    p6:"Variables defined inside a function are not accessible (visible) from outside the function."
}

let scopeArr = [];
scopeArr.push(scopeObj)
console.log(scopeArr)
 localStorage.setItem("Scope", JSON.stringify(scopeArr))

 let scopeData = JSON.parse(localStorage.getItem("Scope")) 

 document.querySelector("#scope").addEventListener("click", function(){
    document.querySelector("#box").innerHTML="";

    function display(scopeData){
    scopeData.map(function(element,index){
        let div1 = document.createElement("div")

        let ul = document.createElement("ul")

        let li1 = document.createElement("li")
        li1.innerText=element.p1

        let li2 = document.createElement("li")
        li2.innerText=element.p2

        let li3 = document.createElement("li")
        li3.innerText=element.p3

        let li4 = document.createElement("li")
        li4.innerText=element.p4

        let li5 = document.createElement("li")
        li5.innerText=element.p5

        let li6 = document.createElement("li")
        li6.innerText=element.p6

        ul.append(li1,li2,li3,li4,li5,li6)
        div1.append(ul)

        document.querySelector("#box").append(div1)
        
    })
}
    display(scopeData)
 })

 let hoistingObj={
    p1:"JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.",
    p2:"Hoisting allows functions to be safely used in code before they are declared.",
    p3:"Variable and class declarations are also hoisted, so they too can be referenced before they are declared.",
    p4:"Note that doing so can lead to unexpected errors, and is not generally recommended.",
    p5:"Hoisting works with variables too, so you can use a variable in code before it is declared and/or initialized.",
    p6:"Until that point in the execution is reached the variable has its default initialization (undefined for a variable declared using var, otherwise uninitialized)."
}

let hoistingArr = [];
hoistingArr.push(hoistingObj)
console.log(hoistingArr)

localStorage.setItem("Hoisting",JSON.stringify(hoistingArr))

let hoistingData = JSON.parse(localStorage.getItem("Hoisting"))

document.querySelector("#hoisting").addEventListener("click",function(){
    document.querySelector("#box").innerHTML="";

    function display(hoistingData) {
        
    

    hoistingData.map(function(element,index){
        let div1 = document.createElement("div")

        let ul = document.createElement("ul")

        let li1 = document.createElement("li")
        li1.innerText=element.p1

        let li2 = document.createElement("li")
        li2.innerText=element.p2

        let li3 = document.createElement("li")
        li3.innerText=element.p3

        let li4 = document.createElement("li")
        li4.innerText=element.p4

        let li5 = document.createElement("li")
        li5.innerText=element.p5

        let li6 = document.createElement("li")
        li6.innerText=element.p6

        ul.append(li1,li2,li3,li4,li5,li6)
        div1.append(ul)

        document.querySelector("#box").append(div1)
    })
}
display(hoistingData)
})

let constructor_functionObj={
        p1:"The constructor method is a special method of a class for creating and initializing an object instance of that class.",
        p2:"A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.",
        p3:"If you don't provide your own constructor, then a default constructor will be supplied for you. If your class is a base class, the default constructor is empty:",
        p4:"If your class is a derived class, the default constructor calls the parent constructor, passing along any arguments that were provided:",
        p5:"The ValidationError class doesn't need an explicit constructor, because it doesn't need to do any custom initialization.",
        p6:"The default constructor then takes care of initializing the parent Error from the argument it is given.",
     };

     let constructor_functionArr = [];
     constructor_functionArr.push(constructor_functionObj)
     console.log(constructor_functionArr)

     localStorage.setItem("Constructor_function",JSON.stringify(constructor_functionArr))

let constructor_functionData = JSON.parse(localStorage.getItem("Constructor_function"))

document.querySelector("#constructor_function").addEventListener("click",function(){
    document.querySelector("#box").innerHTML="";

    function display(constructor_functionArr) {
        
    

        constructor_functionArr.map(function(element,index){
        let div1 = document.createElement("div")

        let ul = document.createElement("ul")

        let li1 = document.createElement("li")
        li1.innerText=element.p1

        let li2 = document.createElement("li")
        li2.innerText=element.p2

        let li3 = document.createElement("li")
        li3.innerText=element.p3

        let li4 = document.createElement("li")
        li4.innerText=element.p4

        let li5 = document.createElement("li")
        li5.innerText=element.p5

        let li6 = document.createElement("li")
        li6.innerText=element.p6

        ul.append(li1,li2,li3,li4,li5,li6)
        div1.append(ul)

        document.querySelector("#box").append(div1)
    })
}
display(constructor_functionArr)
})


let protypeArr=[{
    p1:"Prototypes are the mechanism by which JavaScript objects inherit features from one another.",
    p2:"Every object in JavaScript has a built-in property, which is called its prototype.",
    p3:"The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.",
    p4:" The chain ends when we reach a prototype that has null for its own prototype.",
    p5:"When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property.",
    p6:"If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.",
}]

console.log(protypeArr)

localStorage.setItem("Prototype", JSON.stringify(protypeArr))

let prototypeData = JSON.parse(localStorage.getItem("Prototype"))

document.querySelector("#prototype").addEventListener("click", function(){
    document.querySelector("#box").innerHTML="";
    
    function display(prototypeData){

        prototypeData.map(function(element,index){

            let div1 = document.createElement("div")

        let ul = document.createElement("ul")

        let li1 = document.createElement("li")
        li1.innerText=element.p1

        let li2 = document.createElement("li")
        li2.innerText=element.p2

        let li3 = document.createElement("li")
        li3.innerText=element.p3

        let li4 = document.createElement("li")
        li4.innerText=element.p4

        let li5 = document.createElement("li")
        li5.innerText=element.p5

        let li6 = document.createElement("li")
        li6.innerText=element.p6

        ul.append(li1,li2,li3,li4,li5,li6)
        div1.append(ul)

        document.querySelector("#box").append(div1)

        })

    }
    display(prototypeData)
})


