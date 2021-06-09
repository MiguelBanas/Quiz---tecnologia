function perguntas() {
  document.getElementById("falso2").disabled = true;
  document.getElementById("falso3").disabled = true;
  document.getElementById("falso4").disabled = true;
  document.getElementById("falso5").disabled = true;
  document.getElementById("falso6").disabled = true;
  document.getElementById("falso7").disabled = true;
  document.getElementById("verdadeiro2").disabled = true;
  document.getElementById("verdadeiro3").disabled = true;
  document.getElementById("verdadeiro4").disabled = true;
  document.getElementById("verdadeiro5").disabled = true;
  document.getElementById("verdadeiro6").disabled = true;
  document.getElementById("verdadeiro7").disabled = true;
}

let pontuacao = 0;

function pergunta1(x) {
  let resposta = `A nova Lei Geral de Proteção de Dados entra em vigor a partir de agosto de 2020 e determina várias regras de como qualquer pessoa física ou jurídica, de direito público ou privado, deverá tratar o processamento de dados pessoais. Saiba tudo sobre a nova Lei Geral de Proteção de Dados!`;

  let res = document.getElementById("res1");
  if (x == 1) {
    res.style.borderStyle = "solid";
    res.style.borderColor = "#006B0C";
    res.innerHTML = `<p style="color: #18AD39;">Você acertou :]</p><br>

    ${resposta} <br>`;
    pontuacao++;
    document.getElementById("falso1").disabled = true;
    document.getElementById("verdadeiro1").disabled = true;
    document.getElementById("falso2").disabled = false;
    document.getElementById("verdadeiro2").disabled = false;
  } else {
    res.style.borderStyle = "solid";
    res.style.borderColor = "#B80D03";

    res.innerHTML = `<p style = "color: #AD071A;">Você errou :[</p><br>

      ${resposta} <br>`;

    document.getElementById("falso1").disabled = true;
    document.getElementById("verdadeiro1").disabled = true;
    document.getElementById("falso2").disabled = false;
    document.getElementById("verdadeiro2").disabled = false;
  }
}

function pergunta2(x) {
  let resposta = `A criptografia de ponta a ponta é um sistema de segurança e decodificação das mensagens, onde somente os participantes de uma conversa têm acesso a elas. Ou seja, quando a mensagem é enviada de um dispositivo, ela só é decodificada quando entregue ao destinatário. Entenda tudo sobre os sistemas de segurança dos aplicativos de mensagens!`;
  let res = document.getElementById("res2");
  if (x == 0) {
    res.style.borderStyle = "solid";
    res.style.borderColor = "#006B0C";
    res.innerHTML = `<p style="color: #18AD39;">Você acertou :]</p> <br>

      ${resposta}  <br>`;
    pontuacao++;
    document.getElementById("falso2").disabled = true;
    document.getElementById("verdadeiro2").disabled = true;
    document.getElementById("falso3").disabled = false;
    document.getElementById("verdadeiro3").disabled = false;
  } else {
    res.style.borderStyle = "solid";
    res.style.borderColor = "#B80D03";
    res.innerHTML = `<p style = "color: #AD071A;">Você errou :[</p><br>

      ${resposta}  <br>`;

    document.getElementById("falso2").disabled = true;
    document.getElementById("verdadeiro2").disabled = true;
    document.getElementById("falso3").disabled = false;
    document.getElementById("verdadeiro3").disabled = false;
  }
}

function pergunta3(x) {
  let resposta = `Sim! Conhecido também como financiamento coletivo, essa é uma modalidade de arrecadação de fundos para projetos. O nome desta prática é ‘Crowdfunding’! `;
  let res = document.getElementById("res3");
  if (x == 1) {
    res.style.borderStyle = "solid";
    res.style.borderColor = "#006B0C";
    res.innerHTML = `<p style="color: #18AD39;">Você acertou! :]</p> <br>
    ${resposta}
    <br>`;
    pontuacao++;
    document.getElementById("falso3").disabled = true;
    document.getElementById("verdadeiro3").disabled = true;
    document.getElementById("falso4").disabled = false;
    document.getElementById("verdadeiro4").disabled = false;
  } else {
    res.style.borderStyle = "solid";
    res.style.borderColor = "#B80D03";
    res.innerHTML = `<p style="color: #AD071A;">Você errou! :[</p> <br>
    ${resposta}
    <br>`;

    document.getElementById("falso3").disabled = true;
    document.getElementById("verdadeiro3").disabled = true;
    document.getElementById("falso4").disabled = false;
    document.getElementById("verdadeiro4").disabled = false;
  }
}

function pergunta4(x) {
  let resposta = `A startup Energous desenvolveu uma tecnologia de transmissão capaz de enviar energia via ondas de rádio para carregar os dispositivos.`;
  let res = document.getElementById("res4");
  if (x == 0) {
    res.style.borderStyle = "solid";
    res.style.borderColor = "#006B0C";
    res.innerHTML = `<p style="color: #18AD39;">Você acertou! :]</p><br>
    ${resposta}`;
    pontuacao++;
    document.getElementById("falso4").disabled = true;
    document.getElementById("verdadeiro4").disabled = true;
    document.getElementById("falso5").disabled = false;
    document.getElementById("verdadeiro5").disabled = false;
  } else {
    res.style.borderStyle = "solid";
    res.style.borderColor = "#B80D03";
    res.innerHTML = `<p style="color: #AD071A;">Você errou! :[</p> <br>
      ${resposta}
      <br>`;

    document.getElementById("falso4").disabled = true;
    document.getElementById("verdadeiro4").disabled = true;
    document.getElementById("falso5").disabled = false;
    document.getElementById("verdadeiro5").disabled = false;
  }
}

function pergunta5(x) {
  let resposta = `O assistente virtual pode ser definido como o comando de voz disponível no celular, que permite facilitar a vida e solucionar algumas atividades do cotidiano, como programar alarmes, fazer pesquisas, checar a previsão do tempo, entre outras. Assistentes virtuais e robôs podem facilitar seu dia a dia!`;
  let res = document.getElementById("res5");
  if (x == 0) {
    res.style.borderStyle = "solid";
    res.style.borderColor = "#006B0C";
    res.innerHTML = `<p style="color: #18AD39;">Você acertou! :]</p><br>
    ${resposta}
     `;
    pontuacao++;
    document.getElementById("falso5").disabled = true;
    document.getElementById("verdadeiro5").disabled = true;
    document.getElementById("falso6").disabled = false;
    document.getElementById("verdadeiro6").disabled = false;
  } else {
    res.style.borderStyle = "solid";
    res.style.borderColor = "#B80D03";
    res.innerHTML = `<p style="color: #AD071A;">Você errou! :[</p> <br>
      ${resposta}
      <br>`;

    document.getElementById("falso5").disabled = true;
    document.getElementById("verdadeiro5").disabled = true;
    document.getElementById("falso6").disabled = false;
    document.getElementById("verdadeiro6").disabled = false;
  }
}

function pergunta6(x) {
  let resposta = `O “cashback” é um tipo de programa de fidelidade que algumas lojas on-line e — até mesmo físicas estão adotando para se destacarem da concorrência e oferecerem um serviço atrativo para os clientes.`;
  let res = document.getElementById("res6");
  if (x == 1) {
    res.style.borderStyle = "solid";
    res.style.borderColor = "#006B0C";
    res.innerHTML = `<p style="color: #18AD39;">Você acertou!</p><br>
    ${resposta}`;
    pontuacao++;
    document.getElementById("falso6").disabled = true;
    document.getElementById("verdadeiro6").disabled = true;
    document.getElementById("falso7").disabled = false;
    document.getElementById("verdadeiro7").disabled = false;
  } else {
    res.style.borderStyle = "solid";
    res.style.borderColor = "#B80D03";
    res.innerHTML = `<p style="color: #AD071A;">Você errou! :[</p> <br>
      ${resposta}
      <br>`;

    document.getElementById("falso6").disabled = true;
    document.getElementById("verdadeiro6").disabled = true;
    document.getElementById("falso7").disabled = false;
    document.getElementById("verdadeiro7").disabled = false;
  }
}

function pergunta7(x) {
  let respostaPergunta = `Para atender a geração de crianças que já se conectam desde cedo, cada vez mais empresas apostam na criação de brinquedos mais modernos que possam se conectar à internet! `;
  let res = document.getElementById("res7");
  let resposta = document.getElementById("resposta");
  if (x == 1) {
    res.style.borderStyle = "solid";
    res.style.borderColor = "#006B0C";
    res.innerHTML = `<p style="color: #18AD39;">Você acertou! :]</p><br>

    ${respostaPergunta}`;
    pontuacao++;
    document.getElementById("falso7").disabled = true;
    document.getElementById("verdadeiro7").disabled = true;
  } else {
    res.style.borderStyle = "solid";
    res.style.borderColor = "#B80D03";
    res.innerHTML = `<p style="color: #AD071A;">Você errou! :[</p> <br>
      ${respostaPergunta}<br>`;

    document.getElementById("falso7").disabled = true;
    document.getElementById("verdadeiro7").disabled = true;
  }
  respostaFinal();
}

function respostaFinal() {
  let elResposta = document.getElementById("resposta");
  elResposta.style.border = "solid";
  elResposta.style.borderColor = "#a70000";

  if (pontuacao == 0) {
    resposta.innerHTML = `<p>Caraca... Nenhum acerto? :[ 
      <br>Pontuação total: ${pontuacao}</p>`;
  } else if (pontuacao > 0 && pontuacao < 3) {
    resposta.innerHTML = `<p>Uuuuhm... Não foi bem! :[ 
      <br>Pontuação total: ${pontuacao}</p>`;
  } else if (pontuacao >= 3 && pontuacao <= 5) {
    resposta.innerHTML = `<p>Ééééééh.... Foi mais ou menos ;]
      <br>Pontuação total: ${pontuacao}</p>`;
  } else {
    resposta.innerHTML = `<p>Aaaeeeeh.... Mandou bem demais ;]
      <br>Pontuação total: ${pontuacao}</p>`;
  }
}

function limpar() {
  location.reload();
}
