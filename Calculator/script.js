let string = "";
let buttons = document.querySelectorAll('.button');
const display= document.querySelector("#display");
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == 'Enter'){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'Clear'){
      string = ""
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'Delete'){
      string = string.substring(0,string.length-1);
    document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})