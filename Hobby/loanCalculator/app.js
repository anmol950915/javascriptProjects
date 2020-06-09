// listen to submit





function loadingGif(){
   
      document.querySelector("#loader").style.display = "block";
      setTimeout(cleargif,1500);      
}
function cleargif(){
      document.querySelector("#loader").style.display = "none";
      document.querySelector("#results").style.display = "block";
}

document.getElementById('loan-form').addEventListener('submit',myfunction);

function myfunction(e){
    
      
      const UIinitialAmount =document.getElementById("initial-amount");
      const UIannualrate = document.getElementById("annual-interest");
      const UIyears = document.getElementById("years");
      const UIcompoundingNum = document.getElementById("compoundingNum")
      const UImonthlyPayment = document.getElementById("monthly-payment");
      const UItotalPayment = document.getElementById("total-payment");
      const UItotalInterest = document.getElementById("total-interest");


      const principal =parseFloat(UIinitialAmount.value);
      const interest =parseFloat(UIannualrate.value)/100;
      const years = parseFloat(UIyears.value);
      const compoundingNum = parseFloat(UIcompoundingNum.value);

      const x = ((compoundingNum + interest)/compoundingNum);
      const y = compoundingNum*years;
      const multiplier = Math.pow(x,y);
        
        const  finalAmount = (principal*multiplier).toFixed(2); 
        if(isFinite(finalAmount)){
           
            UItotalPayment.value = finalAmount ;
            UImonthlyPayment.value = ((UItotalPayment.value) / (years*12)).toFixed(2); 
            UItotalInterest.value = ((UItotalPayment.value) - (principal)).toFixed(2);
            document.getElementById('submit').addEventListener('click',loadingGif)

            }
            else{
                  showerror();
            }
       
      //compute monthly payment

      function showerror(){
            document.getElementById("error").style.display = "block";
            setTimeout(clearError,3000);
      }
      function clearError(){
            document.querySelector("#error").style.display = "none";
      }

    
     e.preventDefault();


}

