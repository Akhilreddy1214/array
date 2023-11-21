const myStates = [
    "Telangana",
    "Delhi",
    "Assam",
    1997,
    "Tamil Nadu",
    "Maharashtra",
  ];
 //                                                        for loop

for( let i=0; i < myStates.length; i++){
    console.log(myStates[i]);
}


  for (let i = 0; i < myStates.length; i++) {
    if (typeof myStates[i] !== "string") break;
    console.log(myStates[i]);
  }

  for (let i = 0; i < myStates.length; i++) {
    if (typeof myStates[i] !== "string") continue;
    console.log(myStates[i]);
  }
//                                                                   forEach METHOD
  myStates.forEach((s) => (console.log(s)));

//                                               FOR OF LOOP MAINLY USED FOR ARRAYS

  const names = ["Youtube", "facebook", "Instagram", "Netflix", "Amazon"];

for (const n of names) {
  console.log(n);
}

//                                                                  FOR IN LOOP MAINLY USED FOR OBJECTS
const symbols = {
  yt: "Youtube",
  ig: "Instagram",
  fb: "Facebook",
  lco: "LearnCodeOnline.in",
};

for (const n in symbols) {
  console.log(`Key is: ${n} and value is: ${symbols[n]}`);
}

                                              
  
  
  
    //                                                                while loop
{ let i=0;
  while (i < myStates.length) {
    console.log(myStates[i]);
    i++;
  }
}


//                                                               do-while
  
 {
    let i = 0;
  
    do {
      console.log(myStates[i]);
      i++;
    } while (i < myStates.length);
 } 