const button = document.querySelector('button');
 let temp = document.querySelector('input');
const dropDownFrom = document.getElementById('From');
const dropDownTo = document.getElementById('To');
const msg=document.getElementById("output");
button.addEventListener("click", (e) => {
    e.preventDefault();
    const currentTemp = (temp.value);
    const currentFrom = dropDownFrom.value;
    const currentTo = dropDownTo.value;

    console.log("Processing:", currentTemp, currentFrom, currentTo);
    getConv(currentTemp, currentFrom, currentTo);
});
function getConv(TempValue, fromValue, toValue) {
    var Result
    if (fromValue === "Celcius" && toValue === "Farenhite") {
    Result=Celf(TempValue);
    }
    if(fromValue === "Celcius" && toValue === "Kelvine"){
        Result=Celk(TempValue);
    }
    if(fromValue==="Farenhite"&& toValue==="Celcius"){
        Result=Farc(TempValue);
    }
    if(fromValue==="Kelvine"&& toValue==="Celcius"){
        Result=Kelc(TempValue);
    }
    if(fromValue==="Farenhite"&& toValue==="Kelvine"){
        Result=Fark(TempValue);
    }
    if(fromValue==="Kelvine"&& toValue==="Farenhite"){
        Result=Kelf(TempValue);}
console.log(Result);
msg.innerText=`${toValue} value of ${TempValue} is = ${Result}`;
 }
    function Celf(TempValue){
        let cel=TempValue;
        if(cel<-273.15){
            alert("Warning!!Please input valid temparature")
            return undefined
        }
        let far;
        far=32+(9*cel/5);
        return (far);
    }
    function Celk(TempValue){
        let cel=parseFloat(TempValue);
        if(cel<-273.15){
            alert("Warning!!Please input valid temparature")
            return undefined
        }
        let kel;
        kel=cel+273.15;
        return(kel+"kelvins");
    }
   function Farc(_TempValue){
    let far=_TempValue;
    let cel=5*(far-32)/9;
    return (cel+"C");
   }
     function Fark(_TempValue){
     let far=_TempValue;
     let kel=(5*(far-32)/9)+273.15;
     return (kel+"kelvins")
    }
    function Kelc(_TempValue){
        let kel=_TempValue;
        let cel=kel-273.15;
        return (cel+"C")
    }
    function Kelf(_TempValue){
        let kel=_TempValue;
        let far=(9*(kel-273.15)/5)+32;
        return (far);
    }