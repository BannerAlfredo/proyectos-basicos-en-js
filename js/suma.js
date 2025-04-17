var numero1 = prompt("Ingresa el primer número:");
    var numero2 = prompt("Ingresa el segundo número:");

    var num1 = parseFloat(numero1);
    var num2 = parseFloat(numero2);

    var resultadoTexto = "";

    if (isNaN(num1) || isNaN(num2)) {
        resultadoTexto = "😅 ¡Eso no son números válidos!";
    } else {
        var suma = num1 + num2;
        resultadoTexto = "🧮 La suma de " + num1 + " + " + num2 + " es: " + suma;
    }

    document.getElementById("resultado").innerHTML = resultadoTexto;