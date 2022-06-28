// 1.Write the code to access element which is having id as "text"

 document.getElementById("text");

// 2.Write the code to access element which is having tag as "h1"

 document.getElementByTagName("h1");

// 3.Write the code to access element which is having class as "box"

 document.getElementByClassName("box");

// "4.<h1>Hello </h1>
// Change the heading from ""Hello"" to ""Hello World"" using DOM functions"

 document.getElementById("Hello").innerHTML = "Hello World";
// 5.Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.
//HTML Property
<div class='cards'>
    <div class='card1'></div>
    <div class='card2'></div>
    <div class='card3'></div>
<button>Change Flex direction</button>
</div>
//CSS Property
.cards{
    display:flex;
    flex direction: horizontal;
}
.card1{
    display:flex;
    flex direction: horizontal;
}
.card2{
    display:flex;
    flex direction: horizontal;
}
.card3{
    display:flex;
    flex direction: horizontal;
}

// 6.What’s the difference between window vs document?

//Ans.Document Object: The document object represent a web page that is loaded in the browser. By accessing the document object, 
//we can access the element in the HTML page. With the help of document objects, 
//we can add dynamic content to our web page. The document object can be accessed with a window.document or just document.


// 7."<h1>Hello </h1>
// Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"

  element.style.color="red"
  <h1 id="heading">Hello </h1>

  document.getElementById("heading").innerHTML = "Hello";

// 8.Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"
 <body>
    <h1 id="heading">Hello world</h1>
    <button id="btn">Replace Text</button>
 </body>
 document.getElementById("btn").onclick="Elevation Academy";


// 9.Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

  function my_Clock() 
  {
  this.cur_date = new Date();
  this.hours = this.cur_date.getHours();
  this.minutes = this.cur_date.getMinutes();
  this.seconds = this.cur_date.getSeconds();
  }
  my_Clock.prototype.run = function ()
  {
  setInterval(this.update.bind(this), 1000);
  };
my_Clock.prototype.update = function () 
  {
  this.updateTime(1);
  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
  };
my_Clock.prototype.updateTime = function (secs) 
  {
  this.seconds+= secs;
 if (this.seconds >= 60)
  {
  this.minutes++;
  this.seconds= 0;
  }
 if (this.minutes >= 60)
  {
  this.hours++;
  this.minutes=0;
  }
if (this.hours >= 24)
  {
  this.hours = 0;
  }
};
var clock = new my_Clock();
  clock.run();
  

// 10.Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected

  <label for="Year">Choose Year:</label>{
  <select name="Year" id="Year">
  <option value="20-21">2020-2021</option>
  <option value="21-22">2021-2022</option>
  }
  console.log(Year);

// 11."Create a form having name ,email, phone no. , birth year
 // Add validations - phone no. should start with 91 , it should be 10 digits
// email should be domain prepbytes.com
// birth year should be > 95"

<form>
    <input type="text" id="Name" name="Enter Name"></input>
    <input type="email" id="email" pattern="prepbytes.com"></input>
    <input type="tel" id="phone" name="phone"pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"required></input>
    <input type="date" id="dob" name="DOB" year>"1995"</input> 
</form>

