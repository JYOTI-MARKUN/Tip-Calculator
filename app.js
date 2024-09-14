const billAmount = document.querySelector(".bill-amt");
const service = document.querySelector(".service-option")
const noOfPersons = document.querySelector("#persons")
const result = document.querySelector("#tip-amount")
const calculation = document.querySelector(".calc")
const input = document.querySelectorAll("input")
const select =document.querySelector("select")

let tipAmount = 0;

calculation.addEventListener("click",()=>{
    if(billAmount.value <= 0 ){    
        // console.log("please enter valid bill amount")
        result.classList.add("show")
        result.innerText = "Please enter valid bill amount"
      } if( service.value ==="Select"){
        result.classList.add("show")
        result.innerText = "Please make a Selection"
      }if( noOfPersons.value<=0)
      {
        result.classList.add("show")
        result.innerText = "Please enter the number of person"
      } else{

        tipAmount = (parseInt(billAmount.value)*parseFloat(service.value))/(parseInt(noOfPersons.value))
        console.log(parseInt(billAmount.value))
        console.log(parseFloat(service.value))
        console.log(parseInt(noOfPersons.value))
        console.log(tipAmount)
        result.classList.add("show")
        result.innerText = `Your Total Bill Amount including Tip is ${parseInt(billAmount.value)+tipAmount}`
      }

  
}
)

input.forEach((input)=>{
    input.addEventListener("focus",()=>{
        
    })
})






