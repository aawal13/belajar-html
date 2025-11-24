function appendVelue(value){
document.getElementById("display").value += value;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}   

function calculate(){
    const display = document.getElementById("display");
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "error";
    }

}

function clear1(){
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
