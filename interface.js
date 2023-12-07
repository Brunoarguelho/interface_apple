
var volume = 5;
var powerOn = true;
var volumeIndicator = document.getElementById('volume-indicator');
var volumeIcon = document.getElementById('volume-icon');
var volumeBar = document.getElementById('volume-bar');
var screen = document.getElementById('screen');
var timeoutId;
function increaseVolume() {
    if (powerOn) { /* Só altera o volume se o iPhone estiver ligado */
        volume = Math.min(volume + 1, 10);
        updateVolume();
    }
}
function decreaseVolume() {
    if (powerOn) { /* Só altera o volume se o iPhone estiver ligado */
        volume = Math.max(volume - 1, 0);
        updateVolume();
    }
}
function togglePower() {
    if (powerOn) {
        setTimeout(function() { /* Adiciona um atraso de 2 Msegundos antes de desligar a tela */
            powerOn = false;
            updateScreen();
        }, 200); //tempo para ligar e desligar o celular
    } else {
        powerOn = true;
        screen.style.backgroundImage = "url('imagem/fundo-iphpne.jpg')"; // Adicione esta linha
        updateScreen();
    }
}
function updateVolume() {
    if (powerOn) { /* Só mostra a interface de volume se o iPhone estiver ligado */
        volumeIndicator.style.display = 'block';
        volumeIcon.style.display = 'block';
        volumeBar.style.width = (volume * 10) + '%';
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function() {
            volumeIndicator.style.display = 'none';
            volumeIcon.style.display = 'none';
        }, 5000); //tempo volume ficar visivel
    }
}
function updateScreen() {
    if (powerOn) {
        screen.style.backgroundImage = "url('imagem/fundo-iphpne.jpg')";
    } else {
        screen.style.backgroundColor = '#000'; //tela preta quando desligado
        screen.style.backgroundImage = 'none';
        volumeIndicator.style.display = 'none';
        volumeIcon.style.display = 'none';
    }
}

function togglePower() { //primeria interface some quando desliga,e reaparece quando liga.
    // Obtém os elementos
    var wifiBateria = document.getElementsByClassName('wifi-bateria')[0];
    var barraRede = document.getElementsByClassName('barra-rede')[0];
    var horas = document.getElementsByClassName('horas')[0];
    var notificacao = document.getElementsByClassName('notificacao')[0];

    if (powerOn) {
        setTimeout(function() { /* Adiciona um atraso de 2 Msegundos antes de desligar a tela */
            powerOn = false;
            // Esconde os elementos
            wifiBateria.style.display = 'none';
            barraRede.style.display = 'none';
            horas.style.display = 'none';
            notificacao.style.display = 'none';
            updateScreen();
        }, 200);

    } else {
        powerOn = true;
        // Mostra os elementos
        wifiBateria.style.display = 'block';
        barraRede.style.display = 'block';
        horas.style.display = 'block';
        notificacao.style.display = 'block';
        updateScreen();
    }
}

// ---------------------------relogio-------------------------------------
function atualizarRelogio() {
    var agora = new Date(); // obtém a data e hora atual
    var horas = agora.getHours();
    var minutos = agora.getMinutes();

    // Formata a hora e minuto para sempre terem dois dígitos
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;

    // Combina as partes da hora em uma única string
    var horario = horas + ':' + minutos;

    // Atualiza o elemento do relógio com a nova hora
    document.getElementById('Relogio').textContent = horario;

    // Chama a função novamente em 1 minuto (60000 milissegundos)
    setTimeout(atualizarRelogio, 60000);
}

// Inicia o relógio
atualizarRelogio();
/*------------------------------------------*/

document.getElementById('screen').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'flex';
});
//overlay quando clica na tela,aparece pedindo a senha
document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // impede o envio do formulário
    var password = document.getElementById('password').value;
    if (password === '0000') { // 'senha correta' escolha sua senha
        document.getElementById('overlay').style.display = 'none';
    } else {
        alert('Senha incorreta!');
    }
});
var passwordForm = document.getElementById('passwordForm');

// Em seguida, adicione um evento de clique ao elemento de sobreposição
overlay.addEventListener('click', function(event) {
    // Verifique se o clique foi fora do formulário de senha
    if (event.target === overlay) {
        // Se sim, esconda a sobreposição
        overlay.style.display = 'none';
    }
});