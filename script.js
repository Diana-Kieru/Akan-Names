let userData=document.getElementById(form)
userData.addEventListener("submit", (e)=>{
    e.preventDefault()
    alert("hi")
    let p=userData.gender.value
    console.log(p)
})

//array
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


function checkDay(){
    let DD =document.getElementById("day").value 
    let MM =document.getElementById("month").value
    let date =document.getElementById("year").value
    let CC =date.substring(0,2)
    let YY =date.substring(2)
    let gender =document.calculate.gender.value
   let d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    
    if(DD <= 0 || DD > 31){
        alert("invalid date!")               

    }
    else if((MM<= 0) || (MM > 12) ){
        alert("Invalid month")

    }
    if(gender == "male"){
        document.getElementById("result").innerHTML ="Your name is " + maleNames[d]
    }
    else if(gender == "female"){
        document.getElementById("result").innerHTML ="Your name is " + femaleNames[d]
    }
    
    
}