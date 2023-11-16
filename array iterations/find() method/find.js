const people = [
    { name: "akhil", age: 27, position: "The Leader", id: 1 },
    { name: "karthik", age: 28, position: "Hero", id: 2 },
    { name: "bhaskar", age: 32, position: "Hero Friend", id: 3 },
    { name: "aravind", age: 32, position: "Hero Friend", id: 4 },
  ];
  
  const newNames = ["akhil", "bhaskar", "sudheer", "krishna"];
  const findNewNames = newNames.find(function (firstName) {
    return firstName === "krishna";
  });
  console.log(findNewNames);
  
  const findingUnique = people.find(function (person) {
    return person.id === 3;
  });
  console.log(findingUnique ? findingUnique.name : findingUnique);
  const findingUnique3 = people.find(function (person) {
    return person.id === 5;
  });
  console.log(findingUnique3 ? findingUnique3.name : findingUnique3);
  
  const findingUnique2 = people.filter(function (person) {
    return person.id === 1;
  });
  console.log(findingUnique2[0].name);