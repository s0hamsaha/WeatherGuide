let button = document.querySelector(".subbutton");
let input = document.querySelector(".searchbar");
window.addEventListener("load", () => {
    let lon;
    let lat;
    let locationtimezone = document.querySelector(".location-Timezone");
    let temperaturdegree = document.querySelector(".temperature-deg");
    let temperaturedescription = document.querySelector(".temperature-des");
    let degree = document.querySelector(".degree");
    let degspan = document.querySelector(".degree span");
    let tempeicon = document.querySelector(".tempicon");
  
    degree.addEventListener("click", () => {
      const tem = temperaturdegree.innerHTML;
      console.log(tem);
      if (degspan.textContent === "°C") {
        degspan.textContent = "°F";
        temperaturdegree.textContent = Math.round(tem * (9 / 5) + 32);
      } else {
        degspan.textContent = "°C";
        // temperaturdegree.textContent = Math.round(tem - 273);
        // (5 / 9) * (F - 32);
        temperaturdegree.textContent = Math.round((5 / 9) * (tem - 32));
      }
    });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        lon = position.coords.longitude;
        lat = position.coords.latitude;
        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b9e6c3d8ea64ec4fdd403b43c3e95ae4`;
        fetch(api)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            const { name } = data;
            const { feels_like } = data.main;
            const { id, icon, main } = data.weather[0];
            locationtimezone.textContent = name;
            temperaturdegree.textContent = Math.round(feels_like - 273);
            temperaturedescription.textContent = main;
            if (id < 250) {
              tempeicon.src = "./animated/thunder.svg";
              document.body.style.backgroundImage ="url('./animated/thunderstorm.gif')";
            } else if (id < 350) {
              tempeicon.src = "./animated/rainy-4.svg";
              document.body.style.backgroundImage ="url('./animated/rain.gif')";
            } else if (id < 510 && icon === "10d") {
              tempeicon.src = "./animated/10d.png";
              document.body.style.backgroundImage ="url('./animated/rain.gif')";
            } else if (id < 510 && icon === "10n") {
              tempeicon.src = "./animated/10n.png";
              document.body.style.backgroundImage ="url('./animated/rain.jpg')";
            } else if (id === 511) {
              tempeicon.src = "./animated/snowy-5.svg";
              document.body.style.backgroundImage ="url('./animated/snow.gif')";
            } else if (id < 550) {
              tempeicon.src = "./animated/rainy-4.svg";
              document.body.style.backgroundImage ="url('./animated/rain.gif')";
            } else if (id < 650) {
              tempeicon.src = "./animated/snowy-6.svg";
              document.body.style.backgroundImage ="url('./animated/snow.gif')";
            } else if (id < 800 && icon === "50n") {
              tempeicon.src = "./animated/50n.png";
              document.body.style.backgroundImage ="url('./animated/fog.gif')";
            } else if (id < 800 && icon === "50d") {
              tempeicon.src = "./animated/50d.png";
              document.body.style.backgroundImage ="url('./animated/fog.gif')";
            } else if (id > 800 && ((icon === "02d")||(icon === "03d"))) {
              tempeicon.src = "./animated/cloudy-day-2.svg";
              document.body.style.backgroundImage ="url('./animated/clouds.gif')";
            } else if (id > 800 && ((icon === "02n")||(icon === "03n"))) {
              tempeicon.src = "./animated/cloudy-night-2.svg";
              document.body.style.backgroundImage ="url('./animated/clouds.gif')";
            } else if (id >= 803) {
              tempeicon.src = "./animated/cloudy.svg";
              document.body.style.backgroundImage= "url('./animated/clouds.gif')";
            } else if (id == 800 && icon === "01d") {
              tempeicon.src = "./animated/day.svg";
              document.body.style.backgroundImage ="url('./animated/clear.gif')";
            } else {
              tempeicon.src = "./animated/night.svg";
              document.body.style.backgroundImage ="url('./animated/clear.gif')";
            }
            document.querySelector(".weather").classList.remove("weather");
          });
      });
    }
  });
  function fetchweather(){
    let locationtimezone = document.querySelector(".location-Timezone");
    let temperaturdegree1 = document.querySelector(".temperature-deg");
    let temperaturedescription = document.querySelector(".temperature-des");
    let degree1 = document.querySelector(".degree");
    let degspan1 = document.querySelector(".degree span");
    let tempeicon = document.querySelector(".tempicon");
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        input.value +
        "&appid=b9e6c3d8ea64ec4fdd403b43c3e95ae4"
    )
      .then((response) => {
        if (!response.ok) throw new Error ("Non 202 response");
        return response.json();
      })
      .catch((error)=> alert("Wrong City Name!"))
      .then((data) => {
        console.log(data);
        const { name } = data;
        const { feels_like } = data.main;
        const { id, icon, main } = data.weather[0];
        locationtimezone.textContent = name;
        temperaturdegree1.textContent = Math.round(feels_like - 273);
        temperaturedescription.textContent = main; 
        if (id < 250) {
          tempeicon.src = "./animated/thunder.svg";
          document.body.style.backgroundImage ="url('./animated/thunderstorm.gif')";
        } else if (id < 350) {
          tempeicon.src = "./animated/rainy-4.svg";
          document.body.style.backgroundImage ="url('./animated/rain.gif')";
        } else if (id < 510 && icon === "10d") {
          tempeicon.src = "./animated/10d.png";
          document.body.style.backgroundImage ="url('./animated/rain.gif')";
        } else if (id < 510 && icon === "10n") {
          tempeicon.src = "./animated/10n.png";
          document.body.style.backgroundImage ="url('./animated/rain.jpg')";
        } else if (id === 511) {
          tempeicon.src = "./animated/snowy-5.svg";
          document.body.style.backgroundImage ="url('./animated/snow.gif')";
        } else if (id < 550) {
          tempeicon.src = "./animated/rainy-4.svg";
          document.body.style.backgroundImage ="url('./animated/rain.gif')";
        } else if (id < 650) {
          tempeicon.src = "./animated/snowy-6.svg";
          document.body.style.backgroundImage ="url('./animated/snow.gif')";
        } else if (id < 800 && icon === "50n") {
          tempeicon.src = "./animated/50n.png";
          document.body.style.backgroundImage ="url('./animated/fog.gif')";
        } else if (id < 800 && icon === "50d") {
          tempeicon.src = "./animated/50d.png";
          document.body.style.backgroundImage ="url('./animated/fog.gif')";
        } else if (id > 800 && ((icon === "02d")||(icon === "03d"))) {
          tempeicon.src = "./animated/cloudy-day-2.svg";
          document.body.style.backgroundImage ="url('./animated/clouds.gif')";
        } else if (id > 800 && ((icon === "02n")||(icon === "03n"))) {
          tempeicon.src = "./animated/cloudy-night-2.svg";
          document.body.style.backgroundImage ="url('./animated/clouds.gif')";
        } else if (id >= 803) {
          tempeicon.src = "./animated/cloudy.svg";
          document.body.style.backgroundImage= "url('./animated/clouds.gif')";
        } else if (id == 800 && icon === "01d") {
          tempeicon.src = "./animated/day.svg";
          document.body.style.backgroundImage ="url('./animated/clear.gif')";
        } else {
          tempeicon.src = "./animated/night.svg";
          document.body.style.backgroundImage ="url('./animated/clear.gif')";
        }
        document.querySelector(".weather").classList.remove("weather");

      })
      }
  button.addEventListener("click", function () {
    fetchweather();
  });
  document.querySelector(".searchbar").addEventListener("keyup",function (event){
  if(event.key=="Enter")
  {
      fetchweather();
  }
    });
    