
let num="";
let temp=0;
var result=0;
var sign_temp="";
function show(val)
{
   if(val=="c")
   {
    num="0";
    val="0";

   } 
   num=num+val;
  document.getElementById("Display").value=num*1;
  

}

function sign(symbol)
{
   var final=0;
   if(symbol==='=')
    {
      
    final=operation(sign_temp);
    document.getElementById("Display").value=final;
    temp=result;
    result=0;
    num="";
    }
    else if(symbol==='◄')
    {
      num=num.substring(0, num.length - 1);
      document.getElementById("Display").value=num;

    }


   else
   {
     sign_temp=symbol;
     document.getElementById("Display").value=symbol;
      temp= temp + Number(num);
          num="";
   }

}






function operation(sign)
{
      
      switch(sign)
      {
        case '+':
             result= temp + Number(num);

             return result;
             break;
        case '-':
             result= temp - Number(num);
             return result;
             break;
        case 'x':
             result= temp * Number(num);
             return result;
             break;
        case '÷':
             result= temp / Number(num);
             return result;
             break;
        case 'x²':
             
             
             result= Number(num) * Number(num);
                 
             document.getElementById("Display").value=result;
       temp=result;
             result=0;
             num="";
             break;




        }
    
     
   
}




