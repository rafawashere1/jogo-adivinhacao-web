class AdivinhacaoIndexView {
    txtChute = document.getElementById('txtChute');
    btnAvaliar = document.getElementById('btnAvaliar');
    btnTentarNovamente = document.getElementById('btnTentarNovamente');
    numeroSecreto = 0;
    
    constructor() {
      this.registrarEventos();
      this.obterNumeroSecreto();
    }
  
    registrarEventos() {
      this.btnAvaliar.addEventListener('click', () => this.avaliarChute());
  
      this.btnTentarNovamente.addEventListener('click', () => this.reiniciarJogo());
    }
  
    reiniciarJogo() {
      const pnlConteudo = document.getElementById('pnlConteudo');
  
      pnlConteudo.querySelector('p')?.remove();
      
      this.btnAvaliar.disabled = false;
      this.txtChute.value = '';
  
      this.obterNumeroSecreto();
    }
  
    avaliarChute() {
      const numeroInformado = this.txtChute.value;
  
      if (isNaN(numeroInformado)) {
        console.error('O valor informado precisa ser um número!');
        return;
      }
  
      const jogadorAcertou = numeroInformado == this.numeroSecreto;
  
      let mensagem = '';
  
      if (numeroInformado < this.numeroSecreto)
        mensagem = 'O número informado foi menor que o número secreto!';
      else if (numeroInformado > this.numeroSecreto)
        mensagem = 'O número informado foi maior que o número secreto!';
      else
        mensagem = 'Você venceu! Parabéns!';
  
      if (jogadorAcertou)
        this.btnAvaliar.disabled = true;
  
      this.exibirNotificacao(mensagem, jogadorAcertou);
    }
  
    exibirNotificacao(mensagem, jogadorAcertou) {
      const pnlConteudo = document.getElementById('pnlConteudo');
  
      const txtNotificacao = document.createElement('p');
      txtNotificacao.textContent = mensagem;
      
      this.classificarNotificacao(jogadorAcertou, txtNotificacao);
  
      pnlConteudo.querySelector('p')?.remove();
  
      pnlConteudo.appendChild(txtNotificacao);
    }
  
    classificarNotificacao(jogadorAcertou, txtNotificacao) {
      if(jogadorAcertou) {
        txtNotificacao.classList.remove('notificacao-erro');
        txtNotificacao.classList.add('notificacao-acerto');
        return;
      }
  
      txtNotificacao.classList.remove('notificacao-acerto');
      txtNotificacao.classList.add('notificacao-erro');
    }
  
    obterNumeroSecreto() {
      this.numeroSecreto = Math.floor(Math.random() * 20) + 1;
    }
  }
  
  window.addEventListener('load', () => new AdivinhacaoIndexView());