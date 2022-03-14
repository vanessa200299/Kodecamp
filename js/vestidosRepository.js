//import { baseUrl } from "./constants";

//const endpoint = `${baseUrl}vestidos.json`;
const baseUrl = "https://kodecamp22-default-rtdb.firebaseio.com/";
const endpoint = `${baseUrl}vestidos.json`;

function createVestidosRows(vestidos) {
  let result = "";
  const table = document.getElementById("VestidosTable");
  if (vestidos) {
    let index = 1;
    Object.keys(vestidos).forEach((key) => {
      const vestido = vestidos[key];
      const aux = `<tr>
      <th scope="row">${index}</th>
      <td>${vestido.nombre}</td>
      <td>${vestido.precio}</td>
      <td>
        <div class="d-flex flex-row mb-3">
          <div>
            <button type="button" class="btn" onclick="onEdit('${key}')">
              <i class="material-icons text-warning">edit</i>
            </button>
          </div>
          <div>
            <button type="button" class="btn" onclick="onDelete('${key}')">
              <i class="material-icons text-danger">delete</i>
            </button>
          </div>
        </div>
      </td>
    </tr>`;
      result += aux;
      index++;
    });
  } else {
    result = "<tr><p>No Recods</p></tr>";
  }

  table.innerHTML = result;
}

function loadForm(vestido) {
  const nombre = document.getElementById("vestidoNombre");
  const precio = document.getElementById("vestidoPrecio");

  nombre.value = vestido.nombre;
  precio.value = vestido.precio;
}

function getVestidos() {
  fetch(endpoint)
    .then((res) => {
      return res.json();
    })
    .then((vestidos) => {
      console.log(vestidos);
      createVestidosRows(vestidos);
    });
}

function getVestidoById(id) {
  fetch(`${baseUrl}vestidos/${id}.json`)
    .then((res) => {
      return res.json();
    })
    .then((vestido) => {
      console.log("getVestidoById", vestido);
      loadForm(vestido);
    });
}

function createVestido( vestido) {
  console.log("createVestido",vestido)
  fetch(`${endpoint}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(vestido)
  })
    .then((res) => res.text()) // or res.json()
    .then((res) => {
     console.log(res)
    });
}

function onDelete(id) {
  fetch(`${baseUrl}vestidos/${id}.json`, {
    method: "DELETE",
  })
    .then((res) => res.text()) // or res.json()
    .then((res) => {
      getVestidos();
    });
}
