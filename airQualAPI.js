//this function uses the input city name from the users search to check for the air quality of that city.
function getAirQual(cityName) {

    var url = 'https://airvisual1.p.rapidapi.com/v2/auto-complete?q=' + cityName + '&x-user-lang=en-US&x-aqi-index=us&x-units-pressure=mbar&x-units-distance=kilometer&x-units-temperature=celsius';
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ae08d2c7aamsh4fd412178cbea50p19da57jsn684468612f6d',
            'X-RapidAPI-Host': 'airvisual1.p.rapidapi.com'
        }
    };
    console.log(cityName);
    //this fetch gets data from the rapid api library site.
    fetch(url, options)
        .then(function (response) { return response.json(); })
        .then(function (airQualData) {
            console.log('airQualData below: ');
            console.log(airQualData);
            var AQI = $('#AQI');
            AQI.text('The CURRENT Air Quality Index value for this city is: ' + airQualData.data.cities[0].currentMeasurement.aqius);
        })
}
