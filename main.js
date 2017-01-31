
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box');
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>";
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment');
  // you do the rest
  answerPTagWithValue.textContent = parseInt(answerPTagWithValue.textContent) * 2;
})

document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var switchingCircle = document.querySelector("#circle-bw");
  var switchCircleStyle = window.getComputedStyle(switchingCircle);
  // console.log(currBGC.backgroundColor);
  if (currBGC.backgroundColor === "rgb(255, 255, 255)") {
    switchingCircle.style.backgroundColor = "rgb(0, 0, 0)";
    // console.log(currBGC.backgroundColor);
  } else {
    switchingCircle.style.backgroundColor = "rgb(255, 255, 255)";
    // console.log(currBGC.backgroundColor);
  }
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var growingCircle = document.querySelector(".circle-red");
  var growingCircleStyle = window.getComputedStyle(growingCircle);

  if ( parseInt(growingCircleStyle.width) >= 320) {
    growingCircle.style.width = "40px";
    growingCircle.style.height = "40px";
  } else {
    growingCircle.style.height = parseInt(growingCircleStyle.height) * 2 + "px";
    growingCircle.style.width = parseInt(growingCircleStyle.width) * 2 + "px";
  }
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})
