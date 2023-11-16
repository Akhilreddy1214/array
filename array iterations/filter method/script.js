
const people = [
    { name: "akhil", age: 27, position: "The Leader" },
    { name: "bhaskar", age: 28, position: "Hero" },
    { name: "karthik", age: 32, position: "Hero Friend" },
    { name: "aravind", age: 32, position: "Hero Friend" },
  ];
  
  const youngPeople = people.filter(function (person) {
    return person.age <= 30;
  });
  // console.log(youngPeople);
  
  const newArray = people.filter(function (person) {
    return person.position === "Hero Friend";
  });
  console.log(newArray);
  