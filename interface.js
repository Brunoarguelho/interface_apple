
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
        screen.style.backgroundImage = "url('imagem/fundo-iphpne.jpg')"; 
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
}); // quando o celular tiver desligado

/*------------------------------------------------ */
document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var senha = document.getElementById('password').value;
    var telaPrincipal = document.getElementsByClassName('telaprincipal')[0];//mostra telaprincipal
    var notificacao = document.getElementsByClassName('notificacao')[0];//remove notificação
    if (senha === '0000') { //definir senha, vc pode escolher!
        sobreposicao.style.display = 'none';
        telaPrincipal.style.display = 'block';
        notificacao.style.display = 'none';
    } else {
        alert('Senha incorreta!');//mensagem de erro da senha!
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
        }, 5000); // Atraso de 5 segundo antes de recarregar,porem liga o celular
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

var container = document.querySelector('.paimenu');
var submenu = document.querySelector('.submenu');
var relogio = document.getElementById('Relogio');
var blocos = document.querySelector('.blocos'); 
 //quando abrir submenu,terá!
container.addEventListener('mouseover', function() {
    submenu.style.display = 'block'; //mostra
    submenu.style.transition = 'all 0.5s'; //tempo de mostra
    relogio.style.display = 'none'; //remove relogio
    blocos.style.display = 'none';  //remove butao de abrir menu app
}); 

container.addEventListener('mouseout', function() {
    submenu.style.transition = 'all 0.5s'; 
    submenu.style.display = 'none';
    relogio.style.display = 'block';
    blocos.style.display = 'block'; 
});

/*---------------------------------------------------------- */

var data = new Date(); //informa a data
var options = { weekday: 'short', day: 'numeric', month: 'short' };
var formattedDate = new Intl.DateTimeFormat('pt-BR', options).format(data);
document.getElementById('data').innerHTML = formattedDate;

/*-------------------------------------------------------------*/

var appIcons = document.querySelectorAll('.app-icon');
 //app do submenu
// Função para adicionar o evento de clique
function addClickEvent(icon) {
    icon.addEventListener('click', function() {
        // Se o ícone tem a classe 'blue', remove a classe
        if (this.classList.contains('blue')) {
            this.classList.remove('blue');
        }
        // Se o ícone não tem a classe 'blue', adiciona a classe
        else {
            this.classList.add('blue');
        }
    }); //app seleção do celular
}
// Adiciona um evento de clique a cada ícone de app-icon
appIcons.forEach(addClickEvent);

/*-------------------------------------------------------------*/

var slider = document.getElementById("brilho");
var bar = slider.querySelector(".brilhos");
var handle = slider.querySelector(".brilho-sub");
//barra de brilho do cell,porem sem o efeito
slider.addEventListener("mousedown", function(event) {
  document.addEventListener("mousemove", move);
  document.addEventListener("mouseup", function() {
    document.removeEventListener("mousemove", move);
  });

  function move(event) {
    var rect = slider.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var width = Math.min(rect.width, Math.max(0, x));
    var percentage = width / rect.width * 100;
    bar.style.width = percentage + "%";
  }
});
/*-------------------------------------------------------------*/
function expand(id) {
    var notis = document.querySelectorAll('.noti');
    notis.forEach(function(noti) {
      if (noti.id === id) { //aumenta barra de notificação dentro do submenu,quando clicar na seta.
        if (noti.classList.contains('expancao')) {
          noti.classList.remove('expancao'); //div de expanção esta dentro do css,
        } else {
          noti.classList.add('expancao');//div de expanção esta dentro do css,
        }
      } else {
        noti.classList.remove('expancao');//div de expanção esta dentro do css,
      }
    });
  }
/*----------------------------------------------------------- */

var novaTela = document.getElementById('novaTela');
var blocos = document.querySelector('.blocos');
var relogio = document.getElementById('Relogio'); 

// Inicialmente, defina o display de novaTela como 'none'
novaTela.style.display = 'none';
//mostra a aba de app gerais do celular
blocos.addEventListener('click', function() {
    if (novaTela.style.display === 'none') {
        novaTela.style.display = 'block';
        relogio.style.display = 'none'; //remove relogio
    } else {
        novaTela.style.display = 'none';
        relogio.style.display = 'block'; //mostra relogio
    }
});
/*------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function() {
    var icons = document.querySelectorAll('.icon-interagir');
    var barra = document.querySelector('.barra');
    // Define a barra para o primeiro ícone assim que a página for carregada
    var primeiroIcone = icons[0];
    barra.style.width = primeiroIcone.offsetWidth + 'px';
    barra.style.left = primeiroIcone.offsetLeft + 'px';
    icons.forEach(function(icon, index) {
      icon.addEventListener('click', function() {
        barra.style.width = icon.offsetWidth + 'px';
        barra.style.left = icon.offsetLeft + 'px';
      });
    });
  
    var telas = document.querySelectorAll('.tela');
    icons.forEach(function(icon, index) {
      icon.addEventListener('click', function() {
        telas.forEach(function(tela) {
          tela.classList.remove('ativa');
        });
        telas[index].classList.add('ativa');
      });
    });
  }); //tela seleções das especilidade dos aplicativos
/*------------------------------------------------------------ */
var currentNumber = '';
//codigo da lógica da calculadora 
function appendNumber(number) {
    currentNumber += number;
    document.getElementById('resultado').value = currentNumber;
}

function appendOperator(operator) {
    currentNumber += operator;
    document.getElementById('resultado').value = currentNumber;
}

function toggleSign() {
    if (currentNumber.charAt(0) === '-') {
        currentNumber = currentNumber.slice(1);
    } else {
        currentNumber = '-' + currentNumber;
    }
    document.getElementById('resultado').value = currentNumber;
}

function calculate() {
    currentNumber = eval(currentNumber);
    document.getElementById('resultado').value = currentNumber;
}

function clearResult() {
    currentNumber = '';
    document.getElementById('resultado').value = '';
}

document.getElementById('myimagem').addEventListener('click', function() {
    document.getElementById('blackScreen').style.display = 'block';
    document.querySelector('.blocos').style.display = 'none';
});
 //tela da calculadora
 //exibir e ocutar
document.getElementById('sair-calc').addEventListener('click', function() {
    document.getElementById('blackScreen').style.display = 'none';
    document.querySelector('.blocos').style.display = 'block';
});
/*--------------------------------------------------------------- */