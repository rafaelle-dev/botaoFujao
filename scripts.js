function fuja(){
    var botaoSim = document.getElementById("sim")

    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    var maxX = larguraJanela - botaoSim.offsetWidth;
    var maxY = alturaJanela - botaoSim.offsetHeight;

    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);

    botaoSim.style.left = aleatorioX + "px";
    botaoSim.style.top = aleatorioY + "px";

}

function Perfeito(){
    alert("Que coincidência, eu também queria essa!♥")
}
