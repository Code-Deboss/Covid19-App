var user = JSON.parse(localStorage.getItem("user"));

var navTitle = document.querySelector(".title");

navTitle.innerText = `Welcome dear ${user.fname}`;

// import { apiUrl } from "../api";

const apiUrl = "https://api.covid19api.com/summary";

let data = null;
var htmlHolder = document.querySelector(".details");

async function getData() {
  const res = await fetch(apiUrl);
  const json = await res.json();
  data = json.Countries;
  document.querySelector(".loading").style.display = "none";

  document.querySelector(".serachbar").style.visibility = "visible";

  for (var i = 0; i <= data.length; i++) {
    // console.log(data[i].Country)
    htmlHolder.innerHTML += `<div class="details--card">
        <h1>${data[i].Country}</h1>
        <div class="card--bottom">
            <div class="card--left">
                <div>
                    <p>New confirmed</p>
                    <button>${data[i].NewConfirmed}</button>
                </div>
                <div>
                    <p>New Deaths</p>
                    <button style="${
                      data[i].NewDeaths == 0
                        ? "background-color: green"
                        : "background-color: red"
                    }">${data[i].NewDeaths}</button>
                </div>
                <div>
                    <p>New Recovered</p>
                    <button style="${
                      data[i].NewRecovered > 0
                        ? "background-color: green"
                        : "background-color: orange"
                    }">${data[i].NewRecovered}</button>
                </div>
            </div>
            <div class="card--right">
                <div>
                    <p>Total confirmed</p>
                    <button>${data[i].TotalConfirmed}</button>
                </div>
                <div>
                    <p>Total Deaths</p>
                    <button>${data[i].TotalDeaths}</button>
                </div>
                <div>
                    <p>Total Recovered</p>
                    <button style="${
                      data[i].NewRecovered > 0
                        ? "background-color: green"
                        : "background-color: orange"
                    }">${data[i].TotalRecovered}</button>
                </div>
            </div>
        </div>
    </div>`;
  }
}

getData();

function searchCountry(searchParam) {
  console.log(data);
  htmlHolder.innerHTML = "";
  var theSearch = searchParam.toLowerCase();
  console.log(theSearch);

  for (var i = 0; i <= data.length; i++) {
    if (data[i].Country.toLowerCase().includes(theSearch)) {
      htmlHolder.innerHTML += `<div class="details--card">
        <h1>${data[i].Country}</h1>
        <div class="card--bottom">
            <div class="card--left">
                <div>
                    <p>New confirmed</p>
                    <button>${data[i].NewConfirmed}</button>
                </div>
                <div>
                    <p>New Deaths</p>
                    <button style="${
                      data[i].NewDeaths == 0
                        ? "background-color: green"
                        : "background-color: red"
                    }">${data[i].NewDeaths}</button>
                </div>
                <div>
                    <p>New Recovered</p>
                    <button style="${
                      data[i].NewRecovered > 0
                        ? "background-color: green"
                        : "background-color: orange"
                    }">${data[i].NewRecovered}</button>
                </div>
            </div>
            <div class="card--right">
                <div>
                    <p>Total confirmed</p>
                    <button>${data[i].TotalConfirmed}</button>
                </div>
                <div>
                    <p>Total Deaths</p>
                    <button>${data[i].TotalDeaths}</button>
                </div>
                <div>
                    <p>Total Recovered</p>
                    <button style="${
                      data[i].NewRecovered > 0
                        ? "background-color: green"
                        : "background-color: orange"
                    }">${data[i].TotalRecovered}</button>
                </div>
            </div>
        </div>
    </div>`;
    }
  }

  if (htmlHolder.innerHTML == "") {
    htmlHolder.innerHTML = `<h1>'${value}' search keyword does not match any image...</h1>`;
  }
}
