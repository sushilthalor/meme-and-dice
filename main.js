//random meme generator
async function check(){
    let data = await fetch("https://meme-api.com/gimme/wholesomememes").then
    (rs => rs.json())
    console.log(data);
    document.getElementById("title").innerHTML = data.title
    document.getElementById("url").src = data.url
    document.getElementById("author").innerHTML = data.author
}
check();

let data={
    "title": "I can smell the desperation",
    "url": "https://i.imgflip.com/3xvz3o.jpg",
}
s


// var key= b2d33a0d14d8a22c2c5c6d5d2855dbc3
// var a=10
// `dfgdfdg${a}`

// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b2d33a0d14d8a22c2c5c6d5d2855dbc3`

