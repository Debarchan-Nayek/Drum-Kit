var noOfDrumItems=document.querySelectorAll(".drum").length;

//Checking for click
for(var i=0;i<noOfDrumItems;i++)
{

  document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);

}

//What to do when clicked
function handleClick()
{
    var currentButton = this.innerHTML;
    makeSound(currentButton);
}

//Check for keyboard input
document.addEventListener("keypress",function(event)
{
  makeSound(event.key);
});

//Sound making function
function makeSound(key)
{

  switch (key) {

    case "w":
    var mySound=new Audio("sounds/tom-1.mp3");
    mySound.play();
    break;

    case "a":
    var mySound=new Audio("sounds/tom-2.mp3");
    mySound.play();
    break;

    case "s":
    var mySound=new Audio("sounds/tom-3.mp3");
    mySound.play();
    break;

    case "d":
    var mySound=new Audio("sounds/tom-4.mp3");
    mySound.play();
    break;

    case "j":
    var mySound=new Audio("sounds/snare.mp3");
    mySound.play();
    break;

    case "k":
    var mySound=new Audio("sounds/crash.mp3");
    mySound.play();
    break;

    case "l":
    var mySound=new Audio("sounds/kick-bass.mp3");
    mySound.play();
    break;

    default:

  }

}
