
const form = document.getElementById("passwordForm");

const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // On ne récupère et ne stocke aucun mot de passe.
    confirmation.style.display = "block";

    form.reset();

});
