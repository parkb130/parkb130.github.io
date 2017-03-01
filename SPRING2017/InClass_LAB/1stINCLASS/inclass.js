  var joe = document.querySelector("#thename");
  var color = document.querySelector("#color");
  var place = document.querySelector("#place");
  var number = document.querySelector("#number");
  var story = document.querySelector("#story")
  var launch = document.querySelector("#launch");
  launch.addEventListener("click", writeStory, false);

  function writeStory() {
  	console.log(thename.value);
   var launchedStory = "";
   launchedStory += "<p>Welcome, " + thename.value + ". ";
   launchedStory += "You're strange for picking " + color.value + " as your favorite color...</p>";
   launchedStory += "<p>To be honest, I'm not interested in " + place.value + " so, um... Yeah...</p>";
   launchedStory += "<p>By the way, " + number.value + " is the result of the amount of children you will have.</p>";

   story.innerHTML = launchedStory;
  }