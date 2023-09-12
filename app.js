
let bmiElement = document.getElementById("bmiElement");
const calculateBtn = document.querySelector(".calculateButton");
const systemButton = document.querySelector(".systemButton");
let numberSystem = "metric"


calculateBtn.addEventListener("click", ()=>{
    
    let weightnum = document.getElementById("inputWeight").value;
    let heightnum = document.getElementById("inputHeight").value;
    let bmiTotal = 0;

    console.log(weightnum);
    console.log(heightnum);

    if (numberSystem == "metric"){
        bmiTotal = weightnum /(heightnum^2);
    }else{
        bmiTotal = (weightnum/heightnum^2)*703;
    }
    

    console.log(bmiTotal);
    bmiElement.textContent =  bmiTotal;

})

systemButton.addEventListener("click", ()=>{
    console.log("asopdidfainf");


})