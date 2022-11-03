

clickhere=()=> {


  var random_number1 = Math.floor(Math.random() * 6) + 1; //use for get any rendom number
  console.log( random_number1);
  var image_name1 = "dice" + random_number1 + ".png"; //use for get image 
  var image_Sourse1 = "images/" + image_name1; //use for set image path
  document.querySelectorAll("img")[0].setAttribute("src", image_Sourse1);


  var random_number2 = Math.floor(Math.random() * 6) + 1;
  console.log( random_number2);
  var image_name2 = "dice" + random_number2 + ".png";
  var image_Sourse2 = "images/" + image_name2;
  document.querySelectorAll("img")[1].setAttribute("src", image_Sourse2);




  if (random_number1 > random_number2) {
    document.querySelector("h1").innerHTML = "<h1>🏆player 1 win<h1/>";
  }
  else if (random_number1 < random_number2) {
    document.querySelector("h1").innerHTML = "<h1>player 2 win🏆<h1/>";
  }

  else {
    document.querySelector("h1").innerHTML = "<h1>🏆drow🏆<h1/>";
  }

}