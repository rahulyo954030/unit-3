const navbar =()=>{
    return `<nav id="navbar">
    <div id="logoDiv">
        <img src="https://www.themealdb.com/images/logo-small.png" alt="">   
    </div>
    <div id="homeDiv">
        
        <p onclick="home()">Home</p>
    
    </div>
    <div id="apiDiv">
        <p onclick="random()">Random Recipes</p>
    </div>
    <div id="forumDiv">
        <p onclick="day()">Latest Recipes</p>
        <img src="https://www.themealdb.com/images/facebook_icon.png" alt="">
        <img src="https://www.themealdb.com/images/twitter_icon.png" alt="">
    </div>
    <div id="searchDiv">
        <input id="searchBar" type="text" placeholder="Search" oninput="debounce(main,1000)">
    </div>
    </nav>`
};

export default navbar;

