// WRITE YOUR CODE IN HERE:
const allLis = document.querySelectorAll('li');

for(let i = 0; i < allLis.length; i++){
  allLis[i].classList.toggle('highlight');
  
  // if(allLis[i].classList.contains('highlight')){
  //   allLis[i].classList.toggle('highlight');
  // } else {
  //   allLis[i].classList.toggle('highlight');
  // }
}