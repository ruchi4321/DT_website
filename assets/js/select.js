

window.onload = function() {
  let select  = document.getElementById('state1');

  fetch('assets/data/countries.json').then(function(response) {
    // response.json() returns a promise, use the same .then syntax to work with the results
    response.json().then(function(countries){
      // users is now our actual variable parsed from the json, so we can use it
      countries.forEach(function(country){
        let option = document.createElement("option");
        option.innerHTML = country.name;
        select.appendChild(option)
      });
    });
  }).catch(err => console.error(err));
}