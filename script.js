const btn = document.querySelectorAll("button.btn");
var screen = document.getElementsByTagName("input")[1];

for (let x = 0; x < btn.length; x++) {
    btn[x].addEventListener("click", function (y) {
        var print = y.target.value;
        if(screen.value.length===1&&screen.value==0 ){
            screen.value = print;
        }else{
            screen.value += print;
        }
    })
}

var his = document.getElementsByTagName("input")[0];
document.getElementsByClassName("all-clear")[0].addEventListener("click",clearResult);
const a = ()=>{}
function name() {
    
}
function result() {
    try {
    var result =screen;
    his.value = screen.value
    result.value = eval(result.value);
    } catch (error) {
        clearResult()
    }
    
}
document.addEventListener("keydown",(e)=>{
    console.log(e)
    if(e.keyCode >=48&&e.keyCode<=57 ){
        if(screen.value.length===1&&screen.value==0 ){
            screen.value = parseInt(e.key);
        }else{
            screen.value +=  parseInt(e.key);
        }
    }
    else if(e.keyCode === 8){
        backSpace()
    }
})

function clearResult() {
    console.log("clearResult");
    screen.value = "0";
    his.value = ""
}

function backSpace() {
    var result =screen;
    var remove = result.value;
    remove = remove.slice(0,-1);
    result.value = remove;
}














