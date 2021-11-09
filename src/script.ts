function toggleModal(modalID) {
  document.getElementById(modalID).classList.toggle("hidden");
  document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
  document.getElementById(modalID).classList.toggle("flex");
  document.getElementById(modalID + "-backdrop").classList.toggle("flex");
}

let people = [];

const addPerson = (event) => {
  event.preventDefault();
  let person = {
      id: people.length,
      name: (<HTMLInputElement>document.getElementById('name')).value,
      lastName: (<HTMLInputElement>document.getElementById('last-name')).value,
      phone: (<HTMLInputElement>document.getElementById('phone')).value,
      email: (<HTMLInputElement>document.getElementById('email')).value,
      message: (<HTMLInputElement>document.getElementById('message')).value
  }

  people.push(person);
  document.forms[0].reset();

  console.log('added' , {people});
  let pre = document.querySelector('#msg pre');
  pre.textContent = '\n' + JSON.stringify(people, "\t", 2);

  localStorage.setItem('PersonList', JSON.stringify(people));
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', addPerson);
});

function toggleDropdown() {
  document.getElementById("dropdown").classList.toggle("hidden");
}
