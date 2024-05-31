//const API_KEY = "0cb9552c1bdd4749886180306243005";

async function showWeather(){
    let city = "goa";

    const response = await fetch('https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}');

    const data = await response.json();
    console.log("Weather data:-> " , data);

    let newPara = document.createElement('p');
    newPara.teaxtContent = `${data?.main?.temp.toFixed(2)} °C `;

    document.body.appendChild(newPara);

}