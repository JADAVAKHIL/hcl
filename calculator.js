
const display=document.getElementsByClassName('.display');
function num(val){
   document.getElementById("result").value+=val;
   
}
function equalsTo(){
    let x= document.getElementById("result").value;
     let y= eval(x);
    checklength();
    
    document.getElementById("result").value = y;
    
    }
function checklength(){
    var textbox=document.getElementById("result");
    if(textbox.value.length >=10){
       alert("Make sure the length of the input is less than 10.");
    }

}


flag = 0;
function openpara(val)
{
document.getElementById('result').value+=val;
flag+=1;
}
function closepara(val1)
{
document.getElementById('result').value+=val1;
flag-=1;
}
function back()
{

var backspace= document.getElementById('result').value;
document.getElementById('result').value= backspace.substring(0,backspace.length-1);
}

function clearScreen(){
    document.getElementById("result").value=" ";
}

