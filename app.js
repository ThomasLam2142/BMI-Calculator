
let bmiElement = document.getElementById("bmiElement");
const calculateBtn = document.querySelector(".calculateButton");
const systemButton = document.querySelector(".systemButton");
const systemElement = document.querySelector(".systemElement");
let numberSystem = "Metric";


calculateBtn.addEventListener("click", ()=>{
    
    let weightnum = document.getElementById("inputWeight").value;
    let heightnum = document.getElementById("inputHeight").value;
    let bmiTotal = 0;

    console.log(weightnum);
    console.log(heightnum);

    if (numberSystem == "Metric"){
        bmiTotal = weightnum /(heightnum^2);
    }else{
        bmiTotal = (weightnum/heightnum^2)*703;
    }
    

    console.log(bmiTotal);
    bmiElement.textContent =  bmiTotal;

})

systemButton.addEventListener("click", ()=>{
    
    if(numberSystem == "Metric"){
        numberSystem = "Imperial";
        console.log("Switched to Metric");
    }else{
        numberSystem = "Metric";
        console.log("Switched to Imperial");
    }
    
    systemElement.textContent = numberSystem;


    

})