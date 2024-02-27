const BASE_URL = 'https://jsonplaceholder.typicode.com';
fetchTodoArrow = async () => {
  const response = await fetch(`${BASE_URL}/${1}`);
  const body = await response.json();
  return body;
};

async function fetchAllTodos() {
  const response = await fetch(`${BASE_URL}/posts`);
  const body = await response.json();
  return body;
}

fetchAllTodos()
  .then((val) => val.map((todo) => ({ ...todo, title: todo.title.toUpperCase() })))
  .then((val) => console.log(val));
