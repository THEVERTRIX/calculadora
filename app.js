let read_inputs = document.querySelectorAll('input[readonly]')
let selected
let operator

window.addEventListener('load', () => {
    read_inputs[0].click()
})

document.addEventListener('click', (click) => {

    if (!click.target.hasAttribute('readonly')) {

        let number = click.target.value
        if (Number(number) || number == "0") {
            selected.value += number
        }

        let clear = click.target.value
        if (clear == "C") {
            read_inputs[0].click()
            for (const input of read_inputs) {
                input.value = ""
            }
            for (const operador of document.querySelectorAll('.operador')) {
                operador.classList.remove('active')
            }
        }

        let operation = click.target.value
        if (operation == "+" || operation == "/" || operation == "-" || operation == "x") {
            if (operator != operation) {
                for (const operador of document.querySelectorAll('.operador')) {
                    operador.classList.remove('active')
                }
                operator = (operation == "x") ? "*" : operation
                read_inputs[1].click()
                click.target.classList.add("active")
            }

        } else if (operation == "=") {
            switch (operator) {
                case "+":
                    read_inputs[2].value = parseInt(read_inputs[0].value) + operator + parseInt(read_inputs[1].value) + "=" + (parseInt(read_inputs[0].value) + parseInt(read_inputs[1].value))
                    break;
                case "/":
                    read_inputs[2].value = parseInt(read_inputs[0].value) + operator + parseInt(read_inputs[1].value) + "=" + (parseInt(read_inputs[0].value) / parseInt(read_inputs[1].value))
                    break;
                case "-":
                    read_inputs[2].value = parseInt(read_inputs[0].value) + operator + parseInt(read_inputs[1].value) + "=" + (parseInt(read_inputs[0].value) - parseInt(read_inputs[1].value))
                    break;
                case "*":
                    read_inputs[2].value = parseInt(read_inputs[0].value) + operator + parseInt(read_inputs[1].value) + "=" + (parseInt(read_inputs[0].value) * parseInt(read_inputs[1].value))
                    break;
                default:
                    if (operator == undefined) {
                        read_inputs[2].value = "Seleccione un operador"
                    }
            }
            if (read_inputs[0].value.length == 0 || read_inputs[1].value.length == 0 || read_inputs[0].value.length == "" || read_inputs[1].value.length == "") {
                read_inputs[2].value = "Llena los campos"
            }
            operator = undefined
        }

    } else {
        for (const input of read_inputs) {
            input.classList.remove('active')
        }
        if (!click.target.classList.contains('result')) {
            click.target.classList.add("active")
            selected = click.target
        }
    }

})