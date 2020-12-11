const showPassword = document.getElementById('show-pass');
const inputUser = document.getElementById('login-user');
const inputPass = document.getElementById('login-pass');
const btnForm = document.getElementById('btn-form');
const form = document.getElementById('login-form');

//Change the color of body
function colorChange() {
    form.style.backgroundColor = form.style.backgroundColor == "black" ? "crimson" : "black"; 
}

//Toggle button text
function btnChange(){
    const value = btnForm.getAttribute('value') == "Let's go" ? "Ready to die?" : "Let's go";
    btnForm.setAttribute("value", value);
}

function btnColorChange(){
    btnForm.style.backgroundColor = form.style.backgroundColor == "crimson" ? "black" : "crimson";
}

showPassword.addEventListener('click', ()=>{
    const type = inputPass.getAttribute('type') === "password" ? "text" : "password";
    inputPass.setAttribute("type", type);

    this.classList.toggle("fa fa-slash");
})

//timer
var tmp = setInterval(()=>{
    colorChange();
    btnChange();
    btnColorChange();
},2000);

console.log(inputUser.length);
form.addEventListener('submit', (e)=>{

    var existErr = false;
    if(inputUser.value == "" || inputPass.value == ""){
        alert("Please, fill in the empty boxes.\n Or Dracula will come for you")
        existErr = true;
    }

    if(existErr){
        e.preventDefault();
    }
})