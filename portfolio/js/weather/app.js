(function populateTableRows() {
    let strTableRows = `<tr>
        <td><span>Summary</span></td>
        <td>Row 1, Cell 2</td>
    </tr>
    <tr>
        <td><span>Temperature</span></td>
        <td>Row 2, Cell 2</td>
    </tr>
    <tr>
        <td><span>Humidity</span></td>
        <td>Row 3, Cell 2</td>
   </tr>
   <tr>
        <td><span>Pressure</span></td>
        <td>Row 4, Cell 2</td>
    </tr>`;

    document.querySelector("#table-weather-dublin tbody").innerHTML = strTableRows;

})();

if (document.readyState === "loading") {
    // Loading hasn't finished yet
    document.addEventListener("DOMContentLoaded", populatetableRows);
} else {
    // DOMContentLoaded has already fired
    populateTableRows();
}

capitalize = s => s && s[0].toUpperCase() + s.slice(1)
async function populatetableRows() {

    await fetch('https://api.openweathermap.org/data/2.5/weather?q=dublin,ie&units=metric&APPID=bc425ac2188d406c884f4fdd88b339f0')

        .then(response => {
            if (response.status !== 200) {
                console.log('Error Status Code: ' + response.status);
                return;
            }
            response.json().then((data) => {
                // Test if data is being received
                console.log(data);
                let strTableRows = `<tr>
          <td><span>Summary</span></td>
          <td>${capitalize(data["weather"][0]["description"])}</td>
      </tr>
      <tr>
      <td><span>Temperature</span></td>
      <td>${data["main"]["temp"] + "°C"}</td>
  </tr>
  <tr>
  <td><span>Humidity</span></td>
  <td>${data["main"]["humidity"] + " %"}</td>
  </tr>
  <tr>
  <td><span>Pressure</span></td>
  <td>${data["main"]["pressure"] + " Pa"}</td>
  </tr>`;
                document.querySelector("#table-weather-dublin tbody").innerHTML = strTableRows;
            });

        })
        .catch(error => {
            // handle any error
        });
}



//Funcion to change background image
function change_background() {
    let d = new Date();
    let n = d.getHours();
    if (n > 23 || n <= 6) {
        document.querySelector(".theme-js").style.backgroundImage = "url('assets/img/dublin-night.jpg')";
    } else {
        document.querySelector(".theme-js").style.backgroundImage = "url('assets/img/dublin-day.jpg')";
    }
}
change_background();