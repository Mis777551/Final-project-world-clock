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

// Determine city background image
let cityBackground = "";
switch (cityTimeZone) {
case "Europe/London":
  cityBackground = "https://upload.wikimedia.org/wikipedia/commons/c/cd/London_Montage_L.jpg";
  break;
case "America/New_York":
  cityBackground = "https://upload.wikimedia.org/wikipedia/commons/4/4d/Manhattan3_amk.jpg";
  break;
case "Pacific/Auckland":
  cityBackground = "https://upload.wikimedia.org/wikipedia/commons/4/45/Auckland_skyline_2020.jpg";
  break;
default:
  cityBackground = "https://images.unsplash.com/photo-1503264116251-35a269479413";
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
</script>
</body>
</html>
