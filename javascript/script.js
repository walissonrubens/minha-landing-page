document.getElementById('tel_number').addEventListener('input', function (event) {
    var input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); 
});

let buttonSubmit = document.querySelector("#submit")

buttonSubmit.addEventListener("click", (e) =>{

    let telNumber = document.querySelector("#tel_number")
    let telNumberValue = telNumber.value 

    if(telNumberValue.length < 12){
        alert('Campo "Número" minimo 12 digitos')
        e.preventDefault()
    }
    
})
