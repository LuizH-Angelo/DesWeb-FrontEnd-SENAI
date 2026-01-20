function soma() {

    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)
    var resp = document.getElementById("resposta")
    //não pode deixar console.log nos codigos
    //console.log (typeof numero1, typeof numero2)
    resp.textContent = numero1 + numero2
}

function subtracao() {

    var numero3 = parseFloat(document.getElementById("n3").value)
    var numero4 = parseFloat(document.getElementById("n4").value)
    var resp = document.getElementById("resposta-sub")
    resp.textContent = numero3 - numero4
}

function multiplicacao() {

    var numero5 = parseFloat(document.getElementById("n5").value)
    var numero6 = parseFloat(document.getElementById("n6").value)
    var resp = document.getElementById("resposta-mult")
    resp.textContent = numero5 * numero6
}

function divisao() {

    var numero7 = parseFloat(document.getElementById("n7").value)
    var numero8 = parseFloat(document.getElementById("n8").value)
    var resp = document.getElementById("resposta-div")

    if (numero8 == 0) {
        resp.textContent = "Erro! Divisão por zero, altere o divisor."

    } else {

        resp.textContent = "Resultado: " + (numero7 / numero8).toFixed(2)
    }
}