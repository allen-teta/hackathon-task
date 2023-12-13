const apiKey =  "910c4328603a46cbe7a9ff5d28f04066";
const contains = document.getElementById('contains');
const form = document.getElementById('form');
const search = document.getElementById('search');
  
const url = (city)=> `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
async function getWeatherByLocation(city){
     
         const resp = await fetch(url(city), {
             origin: "cros" });
         const respData = await resp.json();
     
           addWeatherToPage(respData);
          
     }
      function addWeatherToPage(data){
          const temp = Ktoc(data.contains.temp);
          const weather = document.createElement('div')
          weather.classList.add('weather');
          weather.innerHTML = `
          <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> </h2>
          <small>${data.weather[0].main}</small>
          
          `;
        //   cleanup 
          contains.innerHTML= "";
           contains.appendChild(weather);
      };
     function Ktoc(K){
         return Math.floor(K - 273.15);
     }
     form.addEventListener('click',(e) =>{
        e.preventDefault();
        const city = search.value; 
        if(city){
            getWeatherByLocation(city)
        }
     });