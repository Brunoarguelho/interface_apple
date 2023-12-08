
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
        }, 2000); //tempo volume ficar visivel
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
        }, 200); //tempo desligamento

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

//-----------------------------------------------------------------

var celularLigado = true; 
var sobreposicao = document.getElementById('overlay');
var tela = document.getElementById('screen');
var formularioSenha = document.getElementById('passwordForm');

tela.addEventListener('click', function() {
    if (celularLigado) { // Só alterna a sobreposição se o celular estiver ligado
        if (sobreposicao.style.display === 'none' || sobreposicao.style.display === '') {
            sobreposicao.style.display = 'flex';
        } else {
            sobreposicao.style.display = 'none';
        }
    }
});

formularioSenha.addEventListener('click', function(event) {
    event.stopPropagation(); // Impede que o evento de clique se propague para a tela
});

document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var senha = document.getElementById('password').value;
    var telaPrincipal = document.getElementsByClassName('telaprincipal')[0];//mostra telaprincipal
    var notificacao = document.getElementsByClassName('notificacao')[0];//remove notificação
    if (senha === '0000') { //definir senha, vc pode escolher
        sobreposicao.style.display = 'none';
        telaPrincipal.style.display = 'block';
        notificacao.style.display = 'none';
    } else {
        alert('Senha incorreta!');//mensagem erro de senha
    }
});

// Supondo que você tenha uma função para alternar o estado de energia do celular
function alternarEnergia() {
    celularLigado = !celularLigado; // Alterna o estado de energia
}
// ------------------------------------------

var ligado = true;
/*tive que fazer outro tela-preta quando usuario estiver na telaprincipal */
document.querySelector('.power-button').addEventListener('click', function() {
    if (ligado) {
        document.querySelector('.tela-preta').style.display = 'block';
        setTimeout(function() {
            location.reload();
        }, 5000); // Atraso de 3 segundo antes de recarregar,porem liga o celular
        ligado = false;
    } else {
        setTimeout(function() {
            document.querySelector('.tela-preta').style.display = 'none';
            ligado = true;
        }, 10000); // tempo de ligamento
    }
});
//------------------------------------------

document.getElementById('mensagem').addEventListener('click', function() {
    var msgEscondida = document.querySelector('.msg-escondida');
    if (msgEscondida.style.display === 'none' || msgEscondida.style.display === '') {
        msgEscondida.style.display = 'block'; //mostra os icon da notificação,na tela principal
    } else {
        msgEscondida.style.display = 'none';
    }
});
//------------------------------------------

