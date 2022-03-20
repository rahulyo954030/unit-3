function login(){
    window.location.href="login.html"
}

function signup(){
    window.location.href="signup.html"
}


      registerdUserArr= JSON.parse(localStorage.getItem("signUser")) || [];
     
    //  console.log(registerdUserArr);
     
     document.querySelector("#loginForm").addEventListener("submit",loginFunction);
      
     var form=document.querySelector("#loginForm");

      function loginFunction(event){
          event.preventDefault();
          
                        var logname = form.Uname.value;
                        var logpass = form.Upass.value;
                        console.log(logname,logpass);
         
          flag=true;                
         for(var i=0; i<registerdUserArr.length; i++)
         {
            if(registerdUserArr[i].Name==logname && registerdUserArr[i].Passw==logpass)
            {
               flag=false;
            }
          }
          if(flag==false)
          {
            alert("login succesful");
            window.location.href="./index.html";
          }
          else{
            alert("login failed");
          }
  }

  function home(){
    window.location.href="index.html"
}


  