function home(){
    window.location.href="index.html"
}

function login(){
    window.location.href="login.html"
}

function signup(){
    window.location.href="signup.html"
}

let images = JSON.parse(localStorage.getItem("imgData"))

imgArr = [
    {image_url : "https://wallpaperaccess.com/full/13453.jpg"},
    {image_url : "https://wallpaperaccess.com/full/99006.jpg"},
    {image_url : "https://static1.colliderimages.com/wordpress/wp-content/uploads/2020/10/mcu-watch-order-chronological-release-date.jpg?q=50&fit=contain&w=943&h=472&dpr=1.5"},
    {image_url : "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/06/guardiansofthegalaxymcu2014.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5"}
],

localStorage.setItem("imgData",JSON.stringify(imgArr))

let container = document.querySelector("#slideshow");

let i =0;
setInterval(function(){
    if(i=== images.length){
        i=0;
    }
    let image = imgArr[i].image_url;
    container.innerHTML=null;

    let img = document.createElement("img");
    img.setAttribute("id","slideShowImg")

    img.src = image;

    container.append(img);

    i++;
},2000);

let moviesArr=[
    {Img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/thor-dark-world-1510060778.jpg?crop=1xw:1xh;center,top&resize=980:*",
      Name:"Thor: The Dark World",
      Release_date:"2013",
      IMDB_Rating:9,
    },
    {Img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/iron-man-2-1510061567.jpg?crop=1xw:1xh;center,top&resize=768:*",
    Name:"Iron Man 2",
    Release_date:"2010",
    IMDB_Rating:8,
    },
    {Img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/avengers-age-of-ultron-1510060901.jpg?crop=1xw:1xh;center,top&resize=768:*",
    Name:"Avengers: Age of Ultron",
    Release_date:"2015",
    IMDB_Rating:4,
    },
     {Img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/thor-2011-1510061478.jpg?crop=1xw:1xh;center,top&resize=768:*",
     Name:"Thor",
     Release_date:"2011",
     IMDB_Rating:7,
    },
     {Img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/iron-man-3-1510063691.jpg?crop=1xw:1xh;center,top&resize=768:*",
      Name:"Iron Man 3",
      Release_date:"2013",
      IMDB_Rating:3,
     },
     {Img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/doctor-strange-1510064028.jpg?crop=1xw:1xh;center,top&resize=768:*",
     Name:"Doctor Strange",
     Release_date:"2016",
     IMDB_Rating:5,
    },
     {Img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ant-man-wasp-1530890608.jpg?crop=1xw:1xh;center,top&resize=768:*",
     Name:"Ant-Man and the Wasp",
     Release_date:"2018",
     IMDB_Rating:1,
    },
     {Img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/captain-marvel-1550585151.jpg?crop=1xw:1xh;center,top&resize=768:*",
     Name:"Captain Marvel ",
     Release_date:"2019",
     IMDB_Rating:10,
    },
     {Img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/captain-america-1-1510063576.jpg?crop=1xw:1xh;center,top&resize=768:*",
      Name:"DCaptain America: The First Avenger",
      Release_date:"2011",
      IMDB_Rating:6,
    } 
]
localStorage.setItem("MoviesList",JSON.stringify(moviesArr));

 let moviesData=JSON.parse(localStorage.getItem("MoviesList"))
 console.log(moviesData)
 
  display(moviesData);

   function display(data){
     document.querySelector("#movies").innerHTML="";
      data.map(function(el,index){
         
        var div1=document.createElement("div");
          div1.setAttribute("id","childdiv")
          
          var img1=document.createElement("img");
          img1.setAttribute("src",el.Img);
          img1.setAttribute("id","pic")

           var Name=document.createElement("h3");
           Name.innerText="Movie Name: "+el.Name;

          var Release_date=document.createElement("p");
          Release_date.innerText= "Release-Date: "+el.Release_date;

          var IMDB_Rating=document.createElement("p");
          IMDB_Rating.innerText="IMDB-Rating: "+el.IMDB_Rating;
          // console.log(typeof IMDB_Rating.innerText)

          
          div1.append(img1,Name,Release_date,IMDB_Rating);

          document.querySelector("#movies").append(div1);

      });

  }

   
function SortItems(){
  var sorting=document.querySelector("#sort").value
  console.log(sorting)
  
  if(sorting=="h2l"){
    moviesData.sort(function(a,b){
      return b.IMDB_Rating-a.IMDB_Rating
    })
     display(moviesData)
  }
  else if(sorting=="l2h"){
    moviesData.sort(function(a,b){
      return a.IMDB_Rating-b.IMDB_Rating;
    })
     display(moviesData)
  }
}