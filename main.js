let display = document.getElementById('display')
let buttons = document.querySelectorAll('button')

let string = ''

buttons.forEach(element => {
    element.addEventListener('click', (b) => {
        if (b.target.innerText == '=') {
            string = String(eval(string))
            display.value = string;
        }

        else if (b.target.innerText == 'C') {
            string = ''
            display.value = string;

        }
        else {

            string += b.target.innerText
            display.value = string
        }
    })

})

document.getElementById("display").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
       
    }
});