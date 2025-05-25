function updateTime() {
  const losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    const date = losAngelesElement.querySelector(".date");
    const time = losAngelesElement.querySelector(".time");
    const now = moment().tz("America/Los_Angeles");
    date.innerHTML = now.format("MMMM Do YYYY");
    time.innerHTML = now.format("h:mm:ss [<small>]A[</small>]");
  }

  const parisElement = document.querySelector("#paris");
  if (parisElement) {
    const date = parisElement.querySelector(".date");
    const time = parisElement.querySelector(".time");
    const now = moment().tz("Europe/Paris");
    date.innerHTML = now.format("MMMM Do YYYY");
    time.innerHTML = now.format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
let cityTimeZone = event.target.value;
if (!cityTimeZone) return;

if (cityTimeZone === "current") {
cityTimeZone = moment.tz.guess();
}

const cityName = cityTimeZone.replace("_", " ").split("/")[1];
const now = moment().tz(cityTimeZone);


let cityBackground = "";
switch (cityTimeZone) {
case "Europe/London":
cityBackground = "https://th.bing.com/th/id/OIP.UoprBOQHQj0hALkFSe2CvQHaEc?rs=1&pid=ImgDetMain";
break;
case "America/New_York":
cityBackground = "https://th.bing.com/th/id/OIP.jwvF3KIKjFJg-5jurGcQ5gHaE8?rs=1&pid=ImgDetMain";
break;
case "Pacific/Auckland":
cityBackground = "https://th.bing.com/th/id/OIP.1iYfEVtErO_OVbrkb_z3gwHaDm?rs=1&pid=ImgDetMain";
break;
default:
cityBackground = "https://th.bing.com/th/id/OIP.tfGDkr-_miSENb45zS26QwHaEK?rs=1&pid=ImgDetMain";
}

const citiesElement = document.querySelector("#cities");
citiesElement.innerHTML = `
<div class="city" style="background-image: url('${cityBackground}')">
<div>
  <h2>${cityName}</h2>
  <div class="date">${now.format("MMMM Do YYYY")}</div>
</div>
<div class="time">${now.format("h:mm:ss")} <small>${now.format("A")}</small></div>
</div>
`;
}

updateTime();
setInterval(updateTime, 1000);

const citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);