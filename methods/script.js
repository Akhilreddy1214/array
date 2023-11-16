let fruitNames = ["apple", "banana", "cherries", "orange", "blueberries"];

// length
console.log(fruitNames.length);
console.log(fruitNames[fruitNames.length - 1]);

// concat
const firstNames = ["akhil", "bhaskar", "karthik"];
const allNames = fruitNames.concat(firstNames);
console.log(allNames);
// reverse
console.log(allNames.reverse());

// push
allNames.push("Grapes");
allNames.push("blackberries");
console.log(allNames);
// pop
allNames.pop();
allNames.pop();
console.log(allNames);

// unshift
allNames.unshift("BlackBerries");
allNames.unshift("Grapes");
console.log(allNames);
// shift
allNames.shift();
allNames.shift();
console.log(allNames);

// changing elements

allNames[0] = "aravind";
console.log(allNames);

// arraylength easy way to add elements
allNames[allNames.length] = "sudheer";
console.log(allNames);

// delete Element
delete allNames[8];
console.log(allNames);

// splice to remove elements  using index 
allNames.splice(8,1);
console.log(allNames);

// JavaScript automatically converts an array to a comma separated string when a primitive value is expected.

allNames.toString();
console.log(allNames);



// sort sorts array in ascending order
allNames.sort();
console.log(allNames);

// numeric sort for ascending order
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);


// numeric sort for decending order
const points1 = [40, 100, 1, 5, 25, 10];
points1.sort(function(a, b){return b - a});
console.log(points1);

// highest num in array
const points2 = [40, 100, 1, 5, 25, 10];
points2.sort(function(a, b){return b-a});
console.log(points2[0]);



// highest num in array
const points3 = [40, 100, 1, 5, 25, 10];
points3.sort(function(a, b){return a-b});
console.log(points3[0]);

const points4 = [40, 100, 1, 5, 25, 10];
minvalue= Math.min(points4);
console.log(minvalue)