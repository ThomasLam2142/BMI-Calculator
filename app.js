
let bmiElement = document.getElementById("bmiElement");

const calculateBtn = document.querySelector(".calculateButton");


calculateBtn.addEventListener("click", ()=>{
    
    let weightnum = document.getElementById("inputWeight").value;
    let heightnum = document.getElementById("inputHeight").value;

    console.log(weightnum);
    console.log(heightnum);
    let bmiTotal = weightnum /(heightnum^2);
    console.log(bmiTotal);
    bmiElement.textContent =  bmiTotal;

})