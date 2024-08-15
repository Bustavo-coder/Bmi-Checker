"use strict"

const width = document.querySelector(".width")
const height = document.querySelector(".height")
const btnCheck = document.querySelector(".check")
const nBmi = document.querySelector(".Nbmi")
const weight = document.querySelector(".weight")
const box = document.querySelector(".box")
const box2 = document.querySelector(".box-2")
const bg = document.querySelector(".bg")

box2.classList.add("hidden")


const calbmi = (width,height) =>{
     const bmi = width / (height * height)
     nBmi.textContent = Math.round(bmi)
     if(bmi > 0 && bmi <= 18.5 ){
        weight.textContent = "Under Weight"
        bg.style.backgroundColor="#00ffff"
     }else if(bmi > 18.5 && bmi <= 24.9){
        weight.textContent = "Normal"
        bg.style.backgroundColor="#008000"

     }else if(bmi > 25.0 && bmi <= 29.9 ){
        weight.textContent = "OverWeight"
        bg.style.backgroundColor="#ffd700"
     } else if(bmi > 30 && bmi <= 34.9){
        weight.textContent = "Obese"
        bg.style.backgroundColor="#ff4500"

     }   else if(bmi > 35 && bmi <= 40.9){
        weight.textContent = "Extremly Obese"
        bg.style.backgroundColor="#8b0000"

     }else{
      weight.textContent = "In  Danger"
      bg.style.backgroundColor="#ff0000"

     }
      return  console.log(Math.round(bmi))
     
}
const checng = () =>{
    if( width.value > 0 && height.value > 0){
        calbmi(width.value, height.value)
    box.classList.toggle("hidden")
    box2.classList.toggle("hidden")

    }else{
        alert("Fill The Boxes")
    }
}


btnCheck.addEventListener("click" ,function(){
    checng()
    btnCheck.textContent = "Return"
})

document.addEventListener("keypress", function(e){
   if(e.key === "Enter"){
       checng()
    btnCheck.textContent = "Return"
   }
})