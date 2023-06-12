


// HEY SO tara and i spoke and we should create branches off of the develop branch, not main. Imagine main as an active site 
//and we should only push when everything works in develop branch. 











var fetchBtn = $('#fetcher');
// Here Sam is working out his fetch
//airbb has alot of query items we could possibly use.
var airBBLocal = 'paris';
var airBBCheckIn = 2023 - 0o6 - 16;
var airBBCheckOut = 2023 - 0o6 - 17;
var airBBCurrency;
var airBBAdults = 2;

fetchBtn.on('click', function () {
    var airBBURL = 'https://airbnb13.p.rapidapi.com/search-location?location=' + airBBLocal + '&checkin=' + airBBCheckIn + '&checkout=' + airBBCheckOut + '&adults=' + airBBAdults + '&page=1';
    fetch(airBBURL)
        .then(function (response) { return response.json(); })
        .then(function (airBBData) {
            console.log('airBB data below: ');
            console.log(airBBData);
        });

})