
function abbrevName(name) {
    x = name.split(" ")
    y = `${x[0][0]}`.toUpperCase() + "." + `${x[1][0]}`.toUpperCase()
    console.log(y);
}
abbrevName("julian houle");
// HEY SO tara and i spoke and we should create branches off of the develop branch, not main. Imagine main as an active site 
//and we should only push when everything works in develop branch. 












// Here Sam is working out his fetch
//airbb has alot of query items we could possibly use.
// var airBBLocal = 'paris';
// var airBBCheckIn;
// var airBBCheckOut;
// var airBBCurrency;
// var airBBAdults;
// var airBBURL = 'https://airbnb13.p.rapidapi.com/search-location?location=' + airBBLocal + '&checkin=' + airBBCheckIn + '&checkout=' + airBBCheckOut + '&adults=' + airBBAdults + '&page=1&currency=' + airBBCurrency;
// fetch(airBBURL)
//     .then(function (response) { return response.json(); })
//     .then(function (airBBData) {
//         console.log('airBB data below: ');
//         console.log(airBBData);
//     });