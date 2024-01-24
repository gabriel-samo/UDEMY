const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const allSpans = document.querySelectorAll('span');

for (let index = 0; index < allSpans.length; index++){
  allSpans[index].style.color = colors[index];
}
