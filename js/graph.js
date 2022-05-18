var json = null;
await fetch("./includes/ships.json")
    .then(response => response.json())
    .then(data => json = data);
console.log(json.Aantal);