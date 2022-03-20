function home(){
    window.location.href="index.html"
}

function login(){
    window.location.href="login.html"
}

function signup(){
    window.location.href="signup.html"
}
         
         
         document.querySelector("#form").addEventListener("submit",SignUp);
    var SignupUserArr= JSON.parse(localStorage.getItem("signUser")) || [];
  function SignUp(event){
    event.preventDefault();

         SignupUserObj={
            Name:document.querySelector("#name").value,
            Email:document.querySelector("#email").value,
            Phno:document.querySelector("#phoneNo").value,
            Passw:document.querySelector("#pass").value,
            Passw2:document.querySelector("#pass2").value,
            }
            SignupUserArr.push(SignupUserObj);
            console.log(SignupUserArr);

            localStorage.setItem("signUser",JSON.stringify(SignupUserArr));

            document.querySelector("button").addEventListener("click",function(){
                var pass1=document.getElementById("pass").value;
                var pass2=document.getElementById("pass2").value;

                

                if(pass1==pass2   && pass1.length>=6)
                {
                    window.location.href="login.html";
                }
                else if(pass1.length<6)
                {
                   alert("your pasword  must be at least 6 charactors")  
                }

                else
                {
                    alert("wrong password");
                }

        
            })
            
    }
