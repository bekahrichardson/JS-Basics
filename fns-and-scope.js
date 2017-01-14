//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler (name) {
    if (name === 'Tyler') {
      return true;
    }

    return false;
}

function isTyler (name) {
  return name === 'Tyler';
}
//////////////////PROBLEM 2////////////////////

//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName () {
  return prompt("what is your name?");
}//Code Here


//////////////////PROBLEM 3////////////////////

function welcome () {
  alert("Welcome, " + getName());
}

//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Function parameters are the names listed in the function definition.
  //Function arguments are the values passed and received by the function.



//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Falsy values include: "false", "0 (zero)", ""(empty string), "null.", "undefined.", "NaN (a special value number meaning Not-a-Number!)"



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

function myName (){
  return "Bekah";
}

//Now save the function definition of myName into a new variable called newMyName

  var newMyName = myName;

//Now alert the result of invoking newMyName
alert(newMyName());


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  function outerFn () {
    return function () {
      return "Bekah";
    }
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn();


//Now invoke innerFn.
innerFn();
