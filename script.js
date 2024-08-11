function convert(){
    var fromUnit=document.getElementById("fromUnit").value;
    var toUnit=document.getElementById("toUnit").value;
    //input validation
    var temperature=parseFloat(document.getElementById("temperature").value);

    var convertedValue;
    var resultUnit;
    //logic for conversion
    if(isNaN(temperature)){
        alert("Enter a valid Input");
        return;
    }

    switch(fromUnit){
        case "C":
            if(toUnit === "F"){
                convertedValue=(temperature * 9/5) + 32;
                resultUnit="F";
            }else if(toUnit === "K"){
                convertedValue=temperature + 273.15;
                resultUnit="K";
            }else{
                convertedValue=temperature;
                resultUnit="C";
            }
            break;
        case "F":
            if(toUnit === "C"){
                convertedValue=(temperature - 32) *5/9;
                resultUnit="C";
            }else if(toUnit === "K"){
                convertedValue=(temperature - 32) * 5/9 + 273.15;
                resultUnit="K";
            }else{
                convertedValue=temperature;
                resultUnit="F";
            }
            break; 
        case "K":
            if(toUnit === "F"){
                convertedValue=(temperature - 273.15) * 9/5 +32;
                resultUnit="F";
            }else if(toUnit === "C"){
                convertedValue=temperature - 273.15;
                resultUnit="C";
            }else{
                convertedValue=temperature;
                resultUnit="K";
            }
            break;   
    }

    document.getElementById('result').value = convertedValue.toFixed(2) + " " + resultUnit;
}