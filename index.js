fetch("http://localhost:3000/characters")
    .then(resp => resp.json())
    .then(data => console.log(data))