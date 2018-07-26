
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  var contenido = parseInt(answerPTagWithValue.textContent);
  answerPTagWithValue.textContent = contenido * 2;

  // answerPTagWithValue.innerHTML = answerPTagWithValue.textContent * 2;

})
//--------------------------------------------
document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #3
//<div class='circle-red'>
var circleRed = document.querySelector(".circle-red");
var altura = circleRed.offsetHeight;
var anchura = circleRed.offsetWidth;
altura *= 2; 
anchura *= 2;
circleRed.style.height = altura + "px";
circleRed.style.width = anchura + "px";

if ( circleRed.offsetHeight >= 320) {
circleRed.style.height = "40px";
circleRed.style.width = "40px";
}

})
//--------------------------------------------
document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #4

  var parent = document.querySelector("#user-list");
  var listLi = document.querySelectorAll('#user-list li');
  listLi.forEach(function (item) {
    if (item.className === 'inactive') {
      parent.removeChild(item);
    }
  });
 

})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #5
  var row = document.querySelectorAll('#squares-box span');
  var rowReverse = [...row];
  rowReverse = rowReverse.reverse();
  var parent = document.querySelector('#squares-box');
  
  rowReverse.forEach(function(item){
    parent.appendChild(item)
  });

})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #6
  var listLi = document.querySelectorAll('#tasks li');
  var parent = document.querySelector('#tasks');
  
  listLi.forEach(function(item){
  var temp = item.textContent;
  temp = temp.split("").reverse().join("");
  item.textContent = temp;
  parent.appendChild(item);

})


})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #7
   var foto = document.querySelector('#city-img');
   var temp = foto.src;
   var i = temp[-5];
   console.log(i);
   
   
   var x = foto.setAttribute('src', './images/city-photo-'+i+'.jpg');
  
  


   console.log(foto);
   
 
   if(i <= 10){
     i = 1;
   }
  

})
