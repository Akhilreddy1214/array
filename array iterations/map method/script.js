const people = [
    { name: "akhil", age: 27, position: "The Leader" },
    { name: "bhaskar", age: 33, position: "Hero" },
    { name: "karthik", age: 32, position: "Hero Friend" },
  ];
  
  const ages = people.map(function (person) {
    return person.age;
  });
  console.log(ages);
  const newPeopleArray = people.map(function (person) {
    return {
      firstName: person.name,
      personAge: person.age,
    };
  });
  console.log(newPeopleArray)
  
  const renderNewArray = people.map(function (person) {
    return `<h2>${person.name}</h2>`;
  });
  
  document.body.innerHTML = renderNewArray.join("");
  
  console.log(renderNewArray);