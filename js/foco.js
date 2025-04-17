function foco(valor){
            var objeto = document.getElementById("myImage");
            var estado = document.getElementById("estado");

            if (valor === "on") {
                objeto.setAttribute("src", "../imagenes/foco_on.gif");
                estado.textContent = "💡 El foco está encendido";
            } else {
                objeto.setAttribute("src", "../imagenes/foco_off.gif");
                estado.textContent = "🔌 El foco está apagado";
            }
        }