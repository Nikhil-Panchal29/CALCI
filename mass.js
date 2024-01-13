document.getElementById("convertbtn").addEventListener("click", function () {
   
    var initialValue = parseFloat(document.getElementById("v1").value);
    var initialUnit = document.getElementsByTagName("select")[0].value;
    var finalUnit = document.getElementsByTagName("select")[1].value;
  
    
    var result;
    if (initialUnit === "m" && finalUnit === "g") {
        result = initialValue / 1000; 
    } else if (initialUnit === "m" && finalUnit === "kg") {
        result = initialValue / 1000000; 
    } else if (initialUnit === "g" && finalUnit === "m") {
        result = initialValue * 1000; 
    } else if (initialUnit === "g" && finalUnit === "kg") {
        result = initialValue / 1000; 
    } else if (initialUnit === "kg" && finalUnit === "m") {
        result = initialValue * 1000000; 
    } else if (initialUnit === "kg" && finalUnit === "g") {
        result = initialValue * 1000; 
    } else {
        result = initialValue; 
    }
  
    // Display the result
    document.getElementById("v2").value = result.toFixed(4); // Show result with 4 decimal places
});
