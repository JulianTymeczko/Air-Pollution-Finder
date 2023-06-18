
//Here we call our HTML elements into the javascript file
var inputEl = $('#subLoc');
var confirmBtn = $('#confirmBtn');
var placeSearched = inputEl.textContent;
var BB1 = $('#BB1');
var BB2 = $('#BB2');
var BB3 = $('#BB3');
var BB1Title = $('#BB1-title');
var BB2Title = $('#BB2-title');
var BB3Title = $('#BB3-title');
var BB1URL = $('#BB1-URL');
var BB2URL = $('#BB2-URL');
var BB3URL = $('#BB3-URL');
var BB1Image = $('#BB1-Image');
var BB2Image = $('#BB2-Image');
var BB3Image = $('#BB3-Image');
var BB1Rate = $('#BB1-rate');
var BB2Rate = $('#BB2-rate');
var BB3Rate = $('#BB3-rate');



// This searches for the town input into the form space.
confirmBtn.on('click', function (event) {
    event.preventDefault();
    placeSearched = inputEl.val();
    getAirBB(placeSearched);
    getAirQual(placeSearched);
})

// var cityName = localStorage.getItem('placeSearched', placeSearched);
var airBBCheckIn;
var airBBCheckOut;
var airBBCurrency;
var airBBAdults;
//This function uses the city searched by the user to get three air bnb locations in that city.
function getAirBB(cityName) {
    var airBBURL = 'https://airbnb13.p.rapidapi.com/search-location?location=' + cityName + '&checkin=2023-09-16&checkout=2023-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD';
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '103f51fd92mshcba1e6d36482df9p16938fjsn76fc68289de9',
            'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
        }
    };
    //this fetch asks the Airbnb API to loads its content from the rapid api site
    fetch(airBBURL, options)
        .then(function (response) { return response.json(); })
        .then(function (airBBData) {
            console.log('airBB data below: ');
            console.log(airBBData);
            var firstURL = (airBBData.results[0].url);
            var secondURL = (airBBData.results[1].url);
            var thirdURL = (airBBData.results[2].url);



            BB1.text(airBBData.results[0].address);
            BB2.text(airBBData.results[1].address);
            BB3.text(airBBData.results[2].address);
            BB1Title.text(airBBData.results[0].name);
            BB2Title.text(airBBData.results[1].name);
            BB3Title.text(airBBData.results[2].name);
            BB1URL.text(airBBData.results[0].url);
            BB1URL.setAttribute('href', firstURL);
            BB2URL.text(airBBData.results[1].url);
            BB3URL.text(airBBData.results[2].url);



        });
}