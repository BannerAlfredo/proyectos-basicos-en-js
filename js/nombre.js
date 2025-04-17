var nombre = prompt("Ingresa tu nombre completo:");
        var respuesta = confirm("¿Quieres aprender JavaScript?");

        var mensaje = "<strong>Nombre ingresado:</strong> " + (nombre ? nombre : "No proporcionado") + "<br>";

        if (respuesta) {
            mensaje += "✅ <strong>Aprender JavaScript:</strong> ¡Sí, excelente decisión! 🚀";
        } else {
            mensaje += "❌ <strong>Aprender JavaScript:</strong> No por ahora... 😢";
        }

        document.getElementById("resultado").innerHTML = mensaje;