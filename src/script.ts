function toggleModal(modalID) {
  document.getElementById(modalID).classList.toggle("hidden");
  document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
  document.getElementById(modalID).classList.toggle("flex");
  document.getElementById(modalID + "-backdrop").classList.toggle("flex");
}

function toggleDropdown() {
  document.getElementById("dropdown").classList.toggle("hidden");
}

function get_experiencia_laboral() {
  const request = new XMLHttpRequest();
  request.open("get", "https://PW2021-APINode-nachodiba210.nachodiba.repl.co/experiencia-laboral", true);
  request.onload = () => {
      try {
          const json = JSON.parse(request.responseText);
          populate_portfolio(json);
      } catch (e) {
          console.warn(e);
      }
  };

  request.send();
}

function populate_portfolio(lista_experiencias) {
  const portfolio_listing = document.getElementById("portfolio-listing");

  // Remove all experiences
  while(portfolio_listing.firstChild) {
    portfolio_listing.removeChild(portfolio_listing.firstChild);
  }

  // Crear div con la empresa y su info adentro
  const div = document.createElement("div");
  div.classList.add("w-80");

  if (lista_experiencias["experiencia-laboral"]) {
    lista_experiencias["experiencia-laboral"].forEach(experiencia => {
      // Crear empresa
      const empresa = document.createElement("p");
      empresa.textContent = experiencia.empresa;
      empresa.classList.add("text-xl", "font-bold");

      // Crear descripcion
      const descripcion = document.createElement("p");
      descripcion.textContent = experiencia.descripcion;
      descripcion.classList.add("text-lg", "pl-6", "text-grey-400");

      // Crear Puesto
      const puesto = document.createElement("p");
      puesto.textContent = experiencia.puesto;
      puesto.classList.add("text-lg", "pl-6", "text-grey-400");

      // Crear Fecha Inicio y fin
      const inicio_fin = document.createElement("p");
      inicio_fin.textContent = experiencia.fecha_inicio + "~" + experiencia.fecha_fin;
      inicio_fin.classList.add("text-lg", "pl-6", "text-grey-300");

      div.appendChild(empresa);
      div.appendChild(descripcion);
      div.appendChild(puesto);
      div.appendChild(inicio_fin);
    });
  }

  portfolio_listing.appendChild(div);
}

document.addEventListener("submit", function(event) {
  event.preventDefault();
  const toSend = {
    name: (<HTMLInputElement>document.getElementById("name")).value,
    last_name: (<HTMLInputElement>document.getElementById("last_name")).value,
    email: (<HTMLInputElement>document.getElementById("email")).value,
    message: (<HTMLInputElement>document.getElementById("message")).value,
    phone: (<HTMLInputElement>document.getElementById("phone")).value
  }

  const jsonString = JSON.stringify(toSend);

  const url = "https://PW2021-APINode-nachodiba210.nachodiba.repl.co/enviar-formulario";
  fetch(url, {
      method : "POST",
      body: jsonString,
      headers: {
      'Content-Type': 'application/json'
      },
  }).then((response) => {
    toggleModal("contact-me-modal-id");
    toggleModal("success-modal-id");
    console.log(response);
  }).catch((error) => {
    console.error(error);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  get_experiencia_laboral();
})
