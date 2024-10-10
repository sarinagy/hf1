window.addEventListener('load', function (event) {

    fetch('https://randomuser.me/api/')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson);
            document.getElementById("name").innerHTML = "Szia, " + myJson.results[0].name.first + " " + myJson.results[0].name.last + " vagyok!";
            document.getElementById("email").innerHTML = "Email: " + myJson.results[0].email;
            document.getElementById("phone").innerHTML = "Telefonszám: " + myJson.results[0].cell;
        }).catch((error) => {
            console.error(error);
            alert('Ajax lekérés hiba!');
          });

});
