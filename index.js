
const text = document.getElementById('text');
const btns = document.getElementsByClassName("active-btn");
const equalBtn = document.getElementById('equal-btn');
const clearBtn = document.getElementById('clear-btn');
const allBtn = document.getElementsByClassName("btn")
let str  = "";



Array.from(btns).forEach(btn => {
    btn.addEventListener('click' ,  function(e){
        text.value += e.target.value
    })
});

// function to calculate the value
function calculate(){
    try{
        text.value = eval(text.value).toFixed(2);
    } catch {
        text.value = 'ERROR'
    }
    
}

// Calculate based on inputs from keyword
text.addEventListener("change",calculate);

// Calculate based on clicking equal button
equalBtn.addEventListener('click',calculate) ; 

// Clear all inputs
clearBtn.addEventListener('click',function(){
    text.value = "";
})


Array.from(allBtn).forEach(btn => btn.addEventListener("mousedown", function(){
    btn.classList.add('shadow');
    btn.style.transition = " box-shadow 0.1s ease-in 0s"
}))


Array.from(allBtn).forEach(btn => btn.addEventListener("mouseup", function(){
    btn.style.transition = " box-shadow 0.1s ease-in 0s"
    btn.classList.remove('shadow');
}))

