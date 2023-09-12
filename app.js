
let bmiElement = document.getElementById("bmiElement");
const calculateBtn = document.querySelector(".calculateButton");
const systemButton = document.querySelector(".systemButton");
const systemElement = document.querySelector(".systemElement");

const weightType = document.getElementById("weightType");
const heightType = document.getElementById("heightType");
let numberSystem = "Metric";


calculateBtn.addEventListener("click", ()=>{
    
    let weightnum = document.getElementById("inputWeight").value;
    let heightnum = document.getElementById("inputHeight").value;
    let bmiTotal = 0;

    console.log(weightnum);
    console.log(heightnum);

    if (numberSystem == "Metric"){
        //Weight in Kg
        //Height in cm
        bmiTotal = weightnum /(heightnum^2);
    }else{
        //Weight in Pounds
        //Height in feet
        bmiTotal = (weightnum/heightnum^2)*703;
    }
    

    console.log(bmiTotal);
    bmiElement.textContent =  bmiTotal;

})

systemButton.addEventListener("click", ()=>{
    
    if(numberSystem == "Metric"){
        numberSystem = "Imperial";
        console.log("Switched to Imperial");
        heightType.textContent = "inches";
        weightType.textContent = "pounds";
    }else{
        numberSystem = "Metric";
        console.log("Switched to Metric");
        heightType.textContent = "centimeters";
        weightType.textContent = "kilograms";
    }
    
    systemElement.textContent = numberSystem;


})