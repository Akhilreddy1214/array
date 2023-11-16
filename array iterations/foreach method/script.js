const people = [
  { name: "akhil", age: 27, position: "The Leader" },
  { name: "karthik", age: 33, position: "Hero" },
  { name: "bhaskar", age: 32, position: "Hero Friend" },
];

const div_1 = document.getElementById("demo");

people.forEach(function (person) {
  let h1 = document.createElement("h1");

  h1.innerText = person.name.toUpperCase();
  div_1.appendChild(h1);

  let p1 = document.createElement("p");
  p1.innerText = JSON.stringify(person);
  div_1.appendChild(p1);
});

/* function showPerson(person) {
    console.log(person.name.toUpperCase());
  }
  
  // people.forEach(showPerson);
  
  people.forEach(function (item) {
    console.log(item.name);
  }); */
