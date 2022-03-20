let counter = 0;

function orderFood() {
    let display = document.getElementById("displayFood");
    display.innerHTML = null;
    // display.display = none;
    let orderId = document.getElementById("orderId");
    orderId.innerHTML = null;

    let coke = document.getElementById("coke");
    // let Pizza = document.getElementById("Pizza");
    // let Burger = document.getElementById("Burger");
    // let frenchFries = document.getElementById("frenchFries");
    // let chickenWings = document.getElementById("chickenWings");
    let store = "open";
    let time = Math.random() * 4000;

    if (counter >= 10) {
        store = "close";
    }
    // let store = "close";


    let foodProm = new Promise(function(resolve, reject) {
        if (store == "close") {
            reject();
        } else {

            setTimeout(function() {
                resolve(coke);
                // resolve(Pizza);
                // resolve(Burger);
                // resolve(frenchFries);
                // resolve(chickenWings);
            }, time)
        }
    })


    let image = document.createElement("img");
    let tag = document.createElement("h2");
    let orderid = document.createElement("p")
    let id = Math.floor(Math.random() * 20 + 1);


    foodProm.then(function(res) {
        // Get the checkbox

        // var frenchFries = document.getElementById("frenchFries");
        // var Burger = document.getElementById("Burger");
        // var Pizza = document.getElementById("Pizza");
        // var chickenWings = document.getElementById("chickenWings");

        // If the checkbox is checked, display the output text
        if (coke.checked == true) {
            let food = res.value;
            image.src = "https://thumbs.dreamstime.com/b/wet-glass-cola-ice-cubes-lime-straw-isolated-white-background-glass-cola-ice-cubes-lime-straw-white-110465452.jpg";
            tag.innerText = `Your ${food} is ready!`;
            orderid.innerText = `Order id:  #${id}`;
            display.append(image, tag);
            orderId.append(orderid);
        }
        if (frenchFries.checked == true) {
            let food = res.value;
            image.src = "https://aubreyskitchen.com/wp-content/uploads/2021/01/frozen-french-fries-in-air-fryer.jpg";
            tag.innerText = `Your ${food} is ready!`;
            orderid.innerText = `Order id:  #${id}`;
            display.append(image, tag);
            orderId.append(orderid);
        }
        if (Burger.checked == true) {
            let food = res.value;
            image.src = "https://cdn.lifestyleasia.com/wp-content/uploads/sites/7/2021/01/18132502/118355228_3374197469472952_5958807579596251163_n-900x900.jpg";
            tag.innerText = `Your ${food} is ready!`;
            orderid.innerText = `Order id:  #${id}`;
            display.append(image, tag);
            orderId.append(orderid);
        }
        if (Pizza.checked == true) {
            let food = res.value;
            image.src = "https://5.imimg.com/data5/QU/JL/GLADMIN-69655639/1-500x500.png";
            tag.innerText = `Your Pizza is ready!`;
            orderid.innerText = `Order id:  #${id}`;
            display.append(image, tag);
            orderId.append(orderid);
        }
        if (chickenWings.checked == true) {
            let food = res.value;
            image.src = "https://spicecravings.com/wp-content/uploads/2020/12/Tandoori-Chicken-Wings-featured-1.jpg";
            tag.innerText = `Your ChickenWings is ready!`;
            orderid.innerText = `Order id:  #${id}`;
            display.append(image, tag);
            orderId.append(orderid);
        }



        /*  // switch (res) {

            case "Chicken Wings":
                image.src = "https://spicecravings.com/wp-content/uploads/2020/12/Tandoori-Chicken-Wings-featured-1.jpg";
                tag.innerText = `Your ${food} is ready!`;
                orderid.innerText = `Order id:  #${id}`;
                display.append(image, tag);
                orderId.append(orderid);
                break;


            case "Pizza":
                image.src = "https://5.imimg.com/data5/QU/JL/GLADMIN-69655639/1-500x500.png";
                tag.innerText = `Your ${food} is ready!`;
                orderid.innerText = `Order id:  #${id}`;
                display.append(image, tag);
                orderId.append(orderid);
                break;

            case "Burger":
                image.src = "https://cdn.lifestyleasia.com/wp-content/uploads/sites/7/2021/01/18132502/118355228_3374197469472952_5958807579596251163_n-900x900.jpg";
                tag.innerText = `Your ${food} is ready!`;
                orderid.innerText = `Order id:  #${id}`;
                display.append(image, tag);
                orderId.append(orderid);
                break;

            case "French Fries":
                image.src = "https://aubreyskitchen.com/wp-content/uploads/2021/01/frozen-french-fries-in-air-fryer.jpg";
                tag.innerText = `Your ${food} is ready!`;
                orderid.innerText = `Order id:  #${id}`;
                display.append(image, tag);
                orderId.append(orderid);
                break;

            case "Coke":
                image.src = "https://thumbs.dreamstime.com/b/wet-glass-cola-ice-cubes-lime-straw-isolated-white-background-glass-cola-ice-cubes-lime-straw-white-110465452.jpg";
                tag.innerText = `Your ${food} is ready!`;
                orderid.innerText = `Order id:  #${id}`;
                display.append(image, tag);
                orderId.append(orderid);
        //         break;
        // }*/

    })

    foodProm.catch(function(error) {
        image.src = "https://th.bing.com/th/id/OIP.8rbNrekVky9iCPAD3HIk3wHaEK?w=321&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7";
        tag.innerText = error;
        display.append(image, tag);
    })
    counter++;
}