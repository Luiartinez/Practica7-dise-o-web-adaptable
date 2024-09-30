var nuevatareaInput = document.getElementById("nuevatarea");
var agregarbtn = document.getElementById("agregarbtn");
var listatareas = document.getElementById("listatareas");

agregarbtn.addEventListener("click", function() {
    var textotarea = nuevatareaInput.value;

    if (textotarea !== "") {
        var nuevatarea = document.createElement("li");
        nuevatarea.classList.add("tarea");

        var spantexto = document.createElement("span");
        spantexto.textContent = textotarea;
        nuevatarea.appendChild(spantexto);

        var divbotones = document.createElement("div");

        var modificarbtn = document.createElement("button");
        modificarbtn.classList.add("modificarbtn");
        modificarbtn.textContent = "modificar";

        var eliminarbtn = document.createElement("button");
        eliminarbtn.classList.add("eliminarbtn");
        eliminarbtn.textContent = "eliminar";

        eliminarbtn.addEventListener("click", function() {
            listatareas.removeChild(nuevatarea);
        });

        modificarbtn.addEventListener("click", function() {
            if (modificarbtn.textContent === "modificar") {
                modificarbtn.textContent = "guardar";

                var inputmodificacion = document.createElement("input");
                inputmodificacion.type = "text";
                inputmodificacion.value = spantexto.textContent;
                nuevatarea.replaceChild(inputmodificacion, spantexto);
            } else {
                modificarbtn.textContent = "modificar";

                var nuevotexto = nuevatarea.firstChild.value;
                spantexto.textContent = nuevotexto;

                nuevatarea.replaceChild(spantexto, nuevatarea.firstChild);
            }
        });

        divbotones.appendChild(modificarbtn);
        divbotones.appendChild(eliminarbtn);

        nuevatarea.appendChild(divbotones);
        listatareas.appendChild(nuevatarea);

        nuevatareaInput.value = "";
    } else {
        alert("Por favor, ingresa una tarea.");
    }
});
