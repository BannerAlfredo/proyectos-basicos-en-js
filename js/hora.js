    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();

    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    var mensaje = "";
    if (hora >= 12 && hora < 18) {
        mensaje = "☕ Son las " + hora + ":" + minutos + " horas: ¡Buenas tardes, hora de un cafecito!";
    } else if (hora >= 18 && hora < 24) {
        mensaje = "🌙 Son las " + hora + ":" + minutos + " horas: ¡Buenas noches, que descanses!";
    } else {
        mensaje = "🌅 Son las " + hora + ":" + minutos + " horas: ¡Buenos días, empieza con energía!";
    }

    document.getElementById("resultado").innerHTML = mensaje;