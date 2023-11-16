const people = [
    { name: "bhaskar", age: 27, position: "The Leader", id: 1, salary: 500 },
    { name: "akhil", age: 28, position: "Hero", id: 2, salary: 300 },
    { name: "karthik", age: 32, position: "Hero Friend", id: 3, salary: 200 },
    { name: "aravind", age: 32, position: "Hero Friend", id: 4, salary: 200 },
  ];
  
  const newArray = people.reduce(function (acc, currPerson) {
    console.log(`Total Salary : ${acc}`);
    console.log(`Current person Salary : ${currPerson.salary}`);
    acc += currPerson.salary;
    return acc;
  }, 0);
  
  console.log(newArray);