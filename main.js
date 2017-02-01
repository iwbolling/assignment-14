var forEach = function(arr, func){
    for(var i = 0 ; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}

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
  if (switchCircleStyle.backgroundColor === "rgb(255, 255, 255)") {
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
  var listOfUsers = document.querySelectorAll("#user-list li");
  forEach (listOfUsers, function(listItem,index,arr) {
    if (listItem.className.indexOf("active") >= 0 &&
        listItem.className.indexOf("inactive") === -1) {
    } else {
      listItem.style.fontSize = 0;
    }
  })
})

document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  var colorSquares = document.querySelectorAll(".square");
  if (colorSquares[0].className === "square s3") {
    colorSquares[0].className = "square s2";
    colorSquares[1].className = "square s1";
    colorSquares[2].className = "square s2";
    colorSquares[3].className = "square s1";
    colorSquares[4].className = "square s1";
    colorSquares[5].className = "square s1";
    colorSquares[6].className = "square s3";
  } else {
    colorSquares[0].className = "square s3";
    colorSquares[1].className = "square s1";
    colorSquares[2].className = "square s1";
    colorSquares[3].className = "square s1";
    colorSquares[4].className = "square s2";
    colorSquares[5].className = "square s1";
    colorSquares[6].className = "square s2";
  }
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var listofTasks = document.querySelector("#tasks");
  var allTasks = document.querySelectorAll("#tasks li");
  forEach (allTasks, function(task,index,arr) {
    var taskStr = task.textContent;
    var charArr = taskStr.split("");
    var revArr = charArr.reverse();
    task.textContent = revArr.join("");
  })
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})
