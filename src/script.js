function toggleModal(modalID) {
    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("flex");
    document.getElementById(modalID + "-backdrop").classList.toggle("flex");
}
var people = [];
var addPerson = function (event) {
    event.preventDefault();
    var person = {
        id: people.length,
        name: document.getElementById('name').value,
        lastName: document.getElementById('last-name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    people.push(person);
    document.forms[0].reset();
    console.log('added', { people: people });
    var pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(people, "\t", 2);
    localStorage.setItem('PersonList', JSON.stringify(people));
};
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn').addEventListener('click', addPerson);
});
function toggleDropdown() {
    document.getElementById("dropdown").classList.toggle("hidden");
}
