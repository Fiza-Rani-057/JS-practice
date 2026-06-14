//  Chapter 1
//   Alert 

   alert("Hello world");
   alert("I'm learning Javascript");

//    Chapter 2
// Variable for names 

  var  userName = "Fiza";
   console.log(userName);
  var userEmail = "abcdefg@gmail.com";
  console.log(userEmail);

   // Chapter 3
   // Variable for numbers 


   //   variable 1

   var num1 = 7;
   console.log(num1);

   var num2 = 3;
   console.log(num2);

   var sum = num1 + num2;
   console.log(sum);

   // Variable 2 

   var num3 = 2;
   console.log(num3);

   var num4 = 3;
   console.log(num4);

   var sum2 =  num3+ 3;
   console.log(sum2);
 
   // Chapter 4
   // Variable names leagal and illeagal 

   var $name = "Ali";
   var _name = "Sara";
   var name1 = "Sara";

   // Chapter 5
   // Maths Expression : Familiar Operators

   // Additiion (+)
   // Subtraction (-)
   // Multiplication (*)
   // Division (/)
   
   var add = 2 + 3;
   console.log(2 + 3);

   var sub = 2 - 3;
   console.log(2 - 3);

   var multiply = 2*3;
   console.log(2*3);

   var divide = 2/3;
   console.log(2/3);

   var number1 = 10;
   var number2 = 5;
   var sumofnum = 10 + 5;
   var subnum = 10 - 5;
   var multiplynum = 10*5;
   var dividenum = 10/5;

   console.log(subnum);
   console.log(multiplynum);
   console.log(dividenum);
   console.log(sumofnum);

   // Chapter 6 
   // Maths Expression : Unfamiliar operators 

   // Increment Operator (++)
   // Decrement Operator (--)

  var numb1 = 2;
  var increment = numb1--;

  console.log(increment);

  var numb2 = 3;
  var decrement = numb2++;

  console.log(decrement);

  var numb3 = 3;
  var incValue = ++numb3;
   
  console.log(incValue);

  var numb4 = 4;
  var decValue = --numb4;

  console.log(decValue);

//   Chapter 7 
//  Eliminating ambiguity 

  var solve = 1 + 3 - 2 * 4;
  console.log(solve);

  var solve1 = 1-(4*2);
  console.log(solve1);

  var solve2 = (2 + 4)*2;
  console.log(solve2);

  var solve3 = (2 + 3) + (1+3) * 6;
  console.log(solve3);

  var solve4 = (2 + 3) * (3 + 2) + 2;
  console.log(solve4);


   // Chapter 8
   // Concatenating text strings 

  var message = "Hello Everyone ";
   alert(message  + "!");

   var myName = "My name is Fiza";
   document.write(myName + " "+ "Rani"+ "<br>");
   document.write("My name" + " " +"is" + " " + "Fiza Rani" + "<br>");
  
   var sumNumbers = "2"+"2"
   document.write(sumNumbers + 3 + "<br>");


   // Chapter 9
   // Prompts

   var anyPrompt = prompt("Enter your name");
   var numofcats = prompt("How many cats");
   var numofcities = prompt("How many cities are there in Pakistan");

   // Chapter 10 
   // if statement 

   var name = "Alina";
   if(name == "Alina"){
      document.write("Hello Alina" + "<br>");
   }
  
   var age = 20;
   if(age== 20){
   document.write("hello young citizen");
   }
   
   // Chapter 11 
  // Comparison Operators 

   //   Equal operator (==) 
   //  Strict Equal operator (===) 
   // Not equal operator (!=)
   // Strict Not Equal operator (!===)
   // Greater Than (>) 
   // Greater than or equal (>=)
   // Less than (<) 
   // Less tha or equal (>=)

   var boy = "Zain";
   if(boy === "Zain") {
       document.write("Hello Zain");
   }

    var girl = "Alina";
    if(girl !==  "Alina"){
      document.write("You are not allowed");
    }
   
    var girlage = 10;
    if(girlage <= 10){
      document.write("Welcome");
    }

    var boyage = 20;
    if(boyage >= 20){
      document.write("Access Denied");
    }
  
   //  Chapter 12 
   // if else and else if Statements 
   
   var $Name = prompt("Enter your name");
   var city = prompt("Enter your city name");
   var country = prompt("Enter your country name");

   if($Name === "Hira"){
      document.write("Hello hira");
   }
   else if(city === "Islamabad"){
      document.write("Hello citizen");
   }
   else if(country === "Pakistan"){
      document.write("Hello Pakistani");
   }
   else{
      document.write ("Access Denied");
   }

   // Chapter 13 
   // Testing sets of Conditions 

   // Logical Operators 

   //  Logical AND (&&)
   // Logical OR (||)


   var usergirl = "Sana";
   var usergirlage = 30;
   var usergirlcity = "Karachi";

   if((usergirl!== "Sana" && usergirlcity=== "Karachi") 
      || usergirlage === 30){
    console.log("your welcome");
      }
      else{
         console.log("you are not allowed");
      }

      // Chapter 14 
      // Nested if Statements

      var theage = 16;

   if (age >= 18) {
    if (age >= 21) {
        console.log("Allowed");
    }
 }
 else{
   console.log("Not Allowed");
  }

//   Chapter 15 
//   Arrays 

  var city1 = "Los Angles";
  var city2 = "Micigan";
  var city3 = "Newyork";
  var city4 = "Saint Francisco";
  var city5 = "London";
  var city_name = ["Los Angles", "Micigian", "Newyork",
    "Sant Francisco", "London"];
    console.log(city_name);

   //  Chapter 16 
   //   Adding and removing Elements 


   // push() → Array ke end mein item add karta hai.
   // pop() → Array ke end se last item remove karta hai.


   var fruits = ["Apple", "Mango"];

  fruits.push("Banana");
   console.log(fruits);

   var fruits = ["Apple", "Mango", "Banana"];
    fruits.pop();

  console.log(fruits);

   //  Chapter 17 
   //  Arrays: Removing, inserting asd Extracting elements 


   // unshift() Array ke start mein item add karta hai .

   var fruits = ["Mango", "Banana"];
    fruits.unshift("Apple");

   console.log(fruits);
   
  
   //   shift() Array ke start se pehla item remove karta hai.
   var fruits = ["Apple", "Mango", "Banana"];
     fruits.shift();

    console.log(fruits);


    /*1. slice() Array ka kuch hissa copy karke naya array banata hai.
     Original array change nahi hota.*/

     var fruits = ["Mango", "Apple" , "Banana", "Cherry"];
     var result = fruits.slice(1,2);

     console.log(result);


    /* 2. splice() Array se items remove, add, ya replace kar sakta hai.
    Original array change ho jata hai.*/

    var fruits = ["Mango", "Apple" , "Banana", "Cherry"];
    var result = fruits.splice(2,3);

    console.log(result);

   //  Chapter 18 
   // for loops 
    

