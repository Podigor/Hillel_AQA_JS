function fetchToDoById(id) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${1}`)
    .then((res) => res.json())
    .then((jsonBody) => console.log(jsonBody))
    .catch((e) => console.log(e));
}
fetchToDoById(1);

async function fetchToDoByIdAsync(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${1}`);
  const body = await response.json();
  console.log(body);
}
fetchToDoByIdAsync(1);

// const fetchTodoArrow = async () => {
//     try {
//    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${1}`)
//    const body = await response.json()
//    return body
//     }
//     catch(e) {
//         console.log(e)
//     }
// }
// fetchTodoArrow(1).then((body)=>console.log(body))
// fetchToDoByIdAsync(1).catch(e=>console.log(e))
Promise.all([
  fetchToDoById(1),
  fetchToDoById(2),
  fetchToDoById(100),
]).then((values) => console.log(values));

// hw
function printWithDelay(text, ms) {
  setTimeout(() => console.log(text), ms);
}

class todoController {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  async fetchToDoById(id) {
    const response = await fetch(`${this._baseUrl}/${1}`);
    const body = await response.json();
    return body;
  }
}
