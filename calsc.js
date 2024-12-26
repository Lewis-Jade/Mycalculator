let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('.buttons');
let result = document.getElementById('btn');
let clear = document.getElementById('clear');

buttons.forEach(function(button){
    
    button.addEventListener('click', function(e){

        let status = e.target.value;

        screen.value += status;
    });

   result.addEventListener('click',function(e){
       if(screen.value ===''){
        screen.value = 'Enter a value';
       } 
       else
       {
        let results = eval(screen.value);

        screen.value = results;
       }
      
   });
    

clear.addEventListener('click', function(e){
    screen.value = "";
})

});

