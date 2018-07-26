document.querySelector("#inject-html button").addEventListener('click',function(){
    // TASK #1
    var answerBoxEl = document.querySelector('#inject-html .answer-box')
    answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
  })
  
  document.querySelector("#double button").addEventListener('click',function(){
    // TASK #2
    var answerPTagWithValue = document.querySelector('#compoundInvestment')
    answerPTagWithValue.textContent = parseInt(answerPTagWithValue.textContent)*2;
  
  })
  
  document.querySelector("#blow-up button").addEventListener('click',function(){
    // TASK #3
    var circle = document.querySelector('.circle-red');
    var height =circle.offsetHeight *= 2;
    var width = circle.offsetWidth *= 2;
    circle.style.height = height+"px";
    circle.style.width = width+"px";
    console.log(height);
      
    if(height > 320){
      circle.style.height = "40px";
      circle.style.width = "40px";
    }
    
  })
  
  document.querySelector("#remove button").addEventListener('click',function(){
    // TASK #4
    var parent = document.querySelector('#user-list');
    var inactive = document.querySelectorAll('.inactive');
    console.log(inactive);
    
    inactive.forEach(function (item) {
      parent.removeChild(item);
    });


  })
  
  
  document.querySelector("#reverse-squares button").addEventListener('click',function(){
    // TASK #5
    var parent = document.querySelector('#squares-box');
    var listSpam = document.querySelectorAll('.square');
    listSpamReverse = [...listSpam].reverse();
    
    listSpamReverse.forEach(function (item) {
      console.log(item);
      parent.appendChild(item);
    });
    
    
  })
  
  document.querySelector("#pig-latin button").addEventListener('click',function(){
    // TASK #6
    var ul = document.querySelector('#tasks');
    var listLi = document.querySelectorAll('#tasks li');
    var template = "";
    listLi.forEach(function (item) {
      template = item.textContent.split('').reverse().join('');
      item.innerHTML = template;
      
    });
    
  })
  
  document.querySelector("#cycle-image button").addEventListener('click',function(){
     //TASK #7
     var img = document.querySelector('#city-img');
     var number = img.src.split('').slice(-5, -4).join('');
    x = parseInt(number) + 1;
    
    var foto = img.setAttribute('src', './images/city-photo-'+x+'.jpg')
     
  })
  