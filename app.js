//    =============================== chapter 14 to 16 ===================================

// Assignment 4
// chapter 14 to 16
// Question 1
// var stdName=[];

// Assignment 4
// chapter 14 to 16
// Question 2
// var obj=[];
// obj=["waqas","faiz","sam"]

// Assignment 4
// chapter 14 to 16
// Question 3
// var strArr=["waqas","faiz","sam"];

// Assignment 4
// chapter 14 to 16
// Question 4
// var numb=[6512,305858,392763];

// Assignment 4
// chapter 14 to 16
// Question 5
// var bool=[true,false];

// Assignment 4
// chapter 14 to 16
// Question 6
// var mixedArr=["waqas","faiz","sam",6512,305858,392763,true,false];

// Assignment 4
// chapter 14 to 16
// Question 7
// var eduQualInPak=["SSC","HSC","BCS","BS","BCOM", "MS", "M. Phil", "PhD"];

// document.write(`${"<h1>Qualification</h1>"}<br>`)
// document.write(`${"0 ) "+ eduQualInPak[0]}<br>`)
// document.write(`${"1 ) "+ eduQualInPak[1]}<br>`)
// document.write(`${"2 ) "+ eduQualInPak[2]}<br>`)
// document.write(`${"3 ) "+ eduQualInPak[3]}<br>`)
// document.write(`${"4 ) "+ eduQualInPak[4]}<br>`)
// document.write(`${"5 ) "+ eduQualInPak[5]}<br>`)
// document.write(`${"6 ) "+ eduQualInPak[6]}<br>`)
// document.write(`${"7 ) "+ eduQualInPak[7]}<br>`)

// Assignment 4
// chapter 14 to 16
// Question 8
// var stdsName=["Sameer","Faiz","Waqas"];
// var score=[450,400,350];
// percentageS=score[0]/500*100;
// percentageF=score[1]/500*100;
// percentageW=score[2]/500*100;

// document.write(`Score of ${stdsName[0]} is ${score[0]} . Percentage is  ${percentageS}% <br>`)
// document.write(`Score of ${stdsName[1]} is ${score[1]} . Percentage is  ${percentageF}% <br>`)
// document.write(`Score of ${stdsName[2]} is ${score[2]} . Percentage is  ${percentageW}% <br>`)

// Assignment 4
// chapter 14 to 16
// Question 9
// var colorNames=["Red","Green","Blue","Pink"]
// alert("what color you want to add the beginning")
// var input=prompt("Enter one color u  want to add the beginning")
// colorNames.unshift(input)
// document.write(`${input+" to the beginning <br>"+colorNames}<br><br>`)

// alert("what color you want to add the end")
// var input1=prompt("Enter one color u  want to add the end")
// colorNames.push(input1)
// document.write(`${input1+" to the end <br>"+colorNames}<br><br>`)

// var input2=prompt("Enter 1st color u  want to add the beginning")
// var input3=prompt("Enter 2nd color u  want to add the beginning")
// colorNames.unshift(input2,input3)
// document.write(`${input2+","+input3+" to the beginning <br>"+colorNames}<br><br>`)

// colorNames.shift()
// document.write(`${"Delete "+input2+" color from the beginning <br>"+colorNames}<br><br>`)

// colorNames.pop()
// document.write(`${"Delete "+input1+" color from the end <br>"+colorNames}<br><br>`)

// var indexNumber1=+prompt("Enter index number in which u wants to add a color")
// var desiredColor1=prompt("Which color u wants to add at desire index")
// colorNames.splice(indexNumber1,0,desiredColor1)
// document.write(`${"Add "+desiredColor1+" to the index "+indexNumber1+"<br>"+colorNames}<br><br>`)

// var indexNumber2=+prompt("Enter index number in which u wants to delete a color")
// var desiredColor2=prompt("Which colors u wants to add at desire index")
// var colorDeleted=+prompt("How many color u want to delete")
// colorNames.splice(indexNumber2,colorDeleted)
// document.write(`${"Delete "+colorDeleted+" colors from the index "+indexNumber2+"<br>"+colorNames}<br><br>`)


// Assignment 4
// chapter 14 to 16
// Question 10
// var stdScore=[320,230,480,120]
// document.write(`${"Score of Students : "+stdScore[0]+","+stdScore[1]+","+stdScore[2]+","+stdScore[3] }<br>`)
// stdScore.sort()
// document.write(`${"Ordered score of Students :"}${stdScore}`);

// Assignment 4
// chapter 14 to 16
// Question 11
// var ciyNames = ["Karachi", "Islamabad", "Quetta", "Lahore", "Peshawer"]
// var selectedCities = ciyNames.slice(1, 3)
// document.write(`<h1>City List</h1> ${ciyNames[0]}, ${ciyNames[1]}, ${ciyNames[2]}, ${ciyNames[3]}, ${ciyNames[4]}<br><br>`)
// document.write(`Selected cities list: <br> ${selectedCities}`)

// Assignment 4
// chapter 14 to 16
// Question 12
// var arr = ["This","is ","my","cat"];
// arr.join
// document.write(`<h1>Array :</h1>${arr}`)
// document.write(`<h1>Sring :</h1> ${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]}`)


// Assignment 4
// chapter 14 to 16
// Question 12
// var arr = ["This","is ","my","cat"];
// fin1=arr.join(" ")
// document.write(`<h1>Array :</h1>${arr}`)
// document.write(`<h1>Sring :</h1> ${fin1}`)

// Assignment 4
// chapter 14 to 16
// Question 13
// var fifo = [];
// fifo.push("keyboard");
// fifo.push("mouse");
// fifo.push("printer");
// fifo.push("monitor");
// document.write(`<h1>Devices :</h1> ${fifo}<br><br>`)
// document.write(`Out :<br>${fifo.shift()} <br><br> Out :<br>${fifo.shift()} <br><br> Out :<br>${fifo.shift()} <br><br> Out :<br>${fifo.shift()}`)


// Assignment 4
// chapter 14 to 16
// Question 14
// var lifo = [];

// lifo.push("keyboard");s
// lifo.push("mouse");
// lifo.push("printer");
// lifo.push("monitor");

// document.write(`<h1>Devices :</h1> ${lifo}<br><br><br>`)

// document.write(`Out : <br>${lifo.pop()}<br><br>`)
// document.write(`Out : <br>${lifo.pop()}<br><br>`)
// document.write(`Out : <br>${lifo.pop()}<br><br>`)
// document.write(`Out : <br>${lifo.pop()}`)


// Assignment 4
// chapter 14 to 16
// Question 15
// var company = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"]
// document.write(`
// <select>
//     <option>${company[0]}</option>
//     <option>${company[1]}</option>
//     <option>${company[2]}</option>
//     <option>${company[3]}</option>
//     <option>${company[4]}</option>
// </select>`)