function alternarMenu() {
  document.getElementById('menu').classList.toggle('aberto');
}

function abrirAba(qual) {
  var conteudoEmpresa      = document.getElementById('aba-empresa');
  var conteudoCaminhoneiro = document.getElementById('aba-caminhoneiro');
  var botaoEmpresa         = document.getElementById('botao-empresa');
  var botaoCaminhoneiro    = document.getElementById('botao-caminhoneiro');

  conteudoEmpresa.classList.remove('mostrar');
  conteudoCaminhoneiro.classList.remove('mostrar');
  botaoEmpresa.classList.remove('ativa');
  botaoCaminhoneiro.classList.remove('ativa');

  if (qual === 'empresa') {
    conteudoEmpresa.classList.add('mostrar');
    botaoEmpresa.classList.add('ativa');
  } else {
    conteudoCaminhoneiro.classList.add('mostrar');
    botaoCaminhoneiro.classList.add('ativa');
  }
}

function enviarWhatsApp() {
  var nome  = document.getElementById('nome').value;
  var tipo  = document.getElementById('tipo').value;
  var whats = document.getElementById('whats').value;

  var mensagem = 'Ola! Quero participar do CARGOO.'
               + ' Nome: ' + nome
               + ' | Sou: ' + tipo
               + ' | WhatsApp: ' + whats;

  var numero = '5544900000000';

  var link = 'https://wa.me/' + numero + '?text=' + encodeURIComponent(mensagem);

  window.open(link, '_blank');
}
