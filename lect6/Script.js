
document.getElementById("title").innerHTML=("Mutliply 2 Numbers")

//3shan norbot elgwaha b el button lamma n click
document.getElementById("multiplyBtn").addEventListener("click", function(){
    //take input from user , 0==> defult value
    var num1=prompt("Enter first number" , 0);
    //validate numbers
    if(isNaN(num1)){
        alert("Please enter a valid number for the first input.");
            return;}
    else{
        let num2=prompt("Enter first number" , 0);
        if(isNaN(num2)){
            alert("Please enter a valid number for the second input.");
                return;}
        else{
            var result = num1*num2;
            document.getElementById("result").innerHTML= "The resilt is:"+num1 +"*"+ num2 +"="+result;
        }        
        }
    });
    