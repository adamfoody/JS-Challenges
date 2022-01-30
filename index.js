


// print all even numbers

/* for (i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
*/


/*
//print all odd numbers
for (i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
*/

// Print a table containing multiplication tables

const timesTables = (value) => {
  for (i = 0; i < 11; i++) {
    multipliedValue = value * i;
    console.log(multipliedValue);
  }
};

//timesTables(3);

//Calculate the sum of numbers within an array

var array1 = [1, 3, 5, 4, 5];
var sum = 0;

const sumOfArray = (array2) => {
  array2.forEach((row) => {
    sum += row;
    console.log(sum);
  });
};

//sumOfArray(array1);

// Create a function that reverses an array

var firstArray = [1, 2, 3, 4, 5];
var reversedArray = [];

const reverseArray = (array) => {
  var newArray = firstArray.reverse();
  console.log(newArray);
};

//reverseArray(firstArray);

//Sort an array from lowest to highest

var numArray = [140000, 104, 99];
numArray.sort(function(a, b) {
  return a - b;
});

//Sort an array by negative numbers 


const randomNumbers = [4, 11, -42, -14, 39];
const filteredArray = randomNumbers.filter(n => {  
  return n > 0;
});

//console.log(filteredArray);

const divBy10 = (number) => {
  if(number % 10 == 0){
    console.log(number);
  }
  else{
    return null;
  }


}

//divBy10(200);
//divBy10(401);




const returnVowelsInString = (string) => {
  var sum = 0;

  for(i = 0; i < string.length; i++){
    if(string[i] == "e"){
      sum += 1;
    } 
    else if(string[i] == "a"){
      sum += 1;

    }
    else if (string[i] == "i"){
      sum += 1;

    }
    else if(string[i] == "o"){
      sum += 1;

    }
    else if(string[i] == "u"){
      sum += 1;

    }
  }
  console.log(sum);
  

}


//returnVowelsInString('helloooooooooo');

const printOddTo100 = () => {
  for(i = 1; i < 100; i++){
    if(i % 2 !== 0){
      console.log(i);
    }

  }

}

//printOddTo100();


//multiplication table's 7 this itme

const timesTablesNew = (value) => {
  for (i = 0; i < 11; i++) {
    multipliedValue = value * i;
    console.log(multipliedValue);
  }
};

// timesTablesNew(7);


const multOneToTen = () => {
  for(i = 1; i <= 10; i++){
    counter = i; 

    for(j = 1; j <= 10; j++){
      var number = counter * j;
      console.log(`Multiplying ${j} * ${counter}`);

    }

  }

}

//multOneToTen();


// Calculate the sum of numbers from 1 to 100


const sum1to10 = () => {


var sum = 0;

for(var i = 1; i <= 100; i++)
{
    sum += i;
}
console.log(sum)
}

//sum1to10();




const sumOdd = () => {


  var sum = 0;
  
  for(var i = 11; i < 30; i++)
  {
    if(i % 2 !== 0){
      sum += i;
    }}
  console.log(sum)
  }
  
  //sumOdd();


  
  
  var array50 = [1, 3, 5, 4, 5];
var sum = 0;
var acc = 0; 

const averageOfArray = (array2) => {
  array2.forEach((row) => {
    sum += row;
    acc += 1; 
   
  });
  console.log(sum / acc);
};
  
// averageOfArray(array50);

array51 = [1,2,3,4,5,-4, -5, -2]
filteredArray51 = []

const test45 = (array) => {
  array.forEach((value) => {
      if(value > 0){
        filteredArray51.push(value);
      }

  })
  filteredArray51.forEach((value) => {
    console.log(value);
  })

}

// test45(array51);

var array52 = [1,5,10,15,15,200];
var checkPlaceholder = 0; 

const returnLargest = (array) => {

  array.forEach((value) => {
    if(value > checkPlaceholder){
      checkPlaceholder = value;
    }

  })
  console.log(checkPlaceholder)


}

//returnLargest(array52);



