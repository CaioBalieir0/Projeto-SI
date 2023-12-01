let alternativa = document.querySelectorAll(".alternativa");
let inpNome = document.querySelector("#inpNome");

let perguntaNome = document.querySelector("#perguntaNome");
let pergunta01 = document.querySelector("#pergunta01");
let pergunta02 = document.querySelector("#pergunta02");
let pergunta03 = document.querySelector("#pergunta03");
let pergunta04 = document.querySelector("#pergunta04");
let pergunta05 = document.querySelector("#pergunta05");
let pergunta06 = document.querySelector("#pergunta06");
let pergunta07 = document.querySelector("#pergunta07");
let resultado = document.querySelector("#resultado");

let botaoProx00 = document.querySelector("#btnPrxmNome");
let botaoProx01 = document.querySelector("#btnPrxm01");
let botaoProx02 = document.querySelector("#btnPrxm02");
let botaoProx03 = document.querySelector("#btnPrxm03");
let botaoProx04 = document.querySelector("#btnPrxm04");
let botaoProx05 = document.querySelector("#btnPrxm05");
let botaoProx06 = document.querySelector("#btnPrxm06");
let botaoProx07 = document.querySelector("#btnPrxm07");

let botaoVoltar01 = document.querySelector("#btnVoltar01");
let botaoVoltar02 = document.querySelector("#btnVoltar02");
let botaoVoltar03 = document.querySelector("#btnVoltar03");
let botaoVoltar04 = document.querySelector("#btnVoltar04");
let botaoVoltar05 = document.querySelector("#btnVoltar05");
let botaoVoltar06 = document.querySelector("#btnVoltar06");
let botaoVoltar07 = document.querySelector("#btnVoltar07");

// botaoProx00.addEventListener("click", proxNome);
// botaoProx01.addEventListener("click", proxPerg01);
// botaoProx02.addEventListener("click", proxPerg02);
// botaoProx03.addEventListener("click", proxPerg03);
// botaoProx04.addEventListener("click", proxPerg04);
// botaoProx05.addEventListener("click", proxPerg05);
// botaoProx06.addEventListener("click", proxPerg06);
// botaoProx07.addEventListener("click", proxPerg07);

// botaoVoltar01.addEventListener("click", voltarPerg01);
// botaoVoltar02.addEventListener("click", voltarPerg02);
// botaoVoltar03.addEventListener("click", voltarPerg03);
// botaoVoltar04.addEventListener("click", voltarPerg04);
// botaoVoltar05.addEventListener("click", voltarPerg05);
// botaoVoltar06.addEventListener("click", voltarPerg06);
// botaoVoltar07.addEventListener("click", voltarPerg07);
let nomeExiste = false
let radioMarcado;
function proxNome() {
  if (inpNome.value == "") {
    alert("Digite o nome corretamente");
  } else {
    for (let i = 0 ; i <= localStorage.length ; i++) {
      let key = localStorage.key(i)

      if(key == inpNome.value) {
        nomeExiste = true
      }
    }
    if (!nomeExiste) {
      
      let elementoPai = botaoProx00.parentElement;
      let perguntaSequente = document.querySelector("#pergunta01");
      perguntaSequente.classList.remove("d-none");
      perguntaSequente.classList.add("d-block");
      elementoPai.classList.add("d-none");
    } else {
      nomeExiste = false
      alert("Nome já cadastrado!")
 
    }
  }
}

function validacao(inicio) {
  let marcado = false;
  for (let i = inicio; i <= inicio + 4; i++) {
    if (alternativa[i].checked) {
      radioMarcado = alternativa[i];
      marcado = true;
      return marcado;
    } else {
      marcado = false;
    }
  }
  return marcado;
}

let somaPontuacao = 0;

function proxPerg01() {
  let inicio = 0;
  if (validacao(inicio)) {
    let elementoPai = botaoProx01.parentElement;
    let perguntaSequente = document.querySelector("#pergunta02");
    perguntaSequente.classList.remove("d-none");
    perguntaSequente.classList.add("d-block");
    
    
    elementoPai.classList.add("d-none");
  } else {
    alert("Marque alguma das alternativas");
  }
}

function proxPerg02() {
  let inicio = 5;
  if (validacao(inicio)) {
    let elementoPai = botaoProx02.parentElement;
    let perguntaSequente = document.querySelector("#pergunta03");
    perguntaSequente.classList.remove("d-none");
    elementoPai.classList.add("d-none");
  } else {
    alert("Marque alguma das alternativas");
  }
}

function proxPerg03() {
  let inicio = 10;
  if (validacao(inicio)) {
    let elementoPai = botaoProx03.parentElement;
    let perguntaSequente = document.querySelector("#pergunta04");
    perguntaSequente.classList.remove("d-none");
    elementoPai.classList.add("d-none");
  } else {
    alert("Marque alguma das alternativas");
  }
}

function proxPerg04() {
  let inicio = 15;
  if (validacao(inicio)) {
    let elementoPai = botaoProx04.parentElement;
    let perguntaSequente = document.querySelector("#pergunta05");
    perguntaSequente.classList.remove("d-none");
    elementoPai.classList.add("d-none");
  } else {
    alert("Marque alguma das alternativas");
  }
}

function proxPerg05() {
  let inicio = 20;
  if (validacao(inicio)) {
    let elementoPai = botaoProx05.parentElement;
    let perguntaSequente = document.querySelector("#pergunta06");
    perguntaSequente.classList.remove("d-none");
    elementoPai.classList.add("d-none");
  } else {
    alert("Marque alguma das alternativas");
  }
}

function proxPerg06() {
  let inicio = 25;
  if (validacao(inicio)) {
    let elementoPai = botaoProx06.parentElement;
    let perguntaSequente = document.querySelector("#pergunta07");
    perguntaSequente.classList.remove("d-none");
    elementoPai.classList.add("d-none");
  } else {
    alert("Marque alguma das alternativas");
  }
}

function proxPerg07() {
  let inicio = 30;
  if (validacao(inicio)) {
    somarPontuacao();
    let elementoPai = botaoProx07.parentElement;
    let telaResultado = resultado;
    localStorage.setItem(inpNome.value, somaPontuacao);
    // for (let i = 0; i <= localStorage.length; i++) {
    //   const key = localStorage.key(i);
    //   const valor = localStorage.getItem(key);
    //   mostraNaTabela(key, valor);
    // }
    telaResultado.classList.remove("d-none");
    elementoPai.classList.add("d-none");

    if (somaPontuacao <= 280) {
      satisfacao = "Insatisfeito";
    } else if (somaPontuacao > 280 && somaPontuacao < 420) {
      satisfacao = "Serviço mediano";
    } else {
      satisfacao = "Satisfeito";
    }
    mostraNaTabela();
    document.querySelector(
      "#pontuacao"
    ).innerHTML = `${somaPontuacao} - ${satisfacao}`
  } else {
    alert("Marque alguma das alternativas");
  }
}


function mostraNaTabela(key, valor) {
  valor = String(valor);
  console.log(key);
  console.log(valor);

}

function somarPontuacao() {
  somaPontuacao = 0;
  for (let i = 0; i < alternativa.length; i++) {
    if (alternativa[i].checked) {
      somaPontuacao += Number(alternativa[i].value);
    }
  }
}

function voltarPerg01() {
  let elementoPai = botaoVoltar01.parentElement;
  let perguntaAnterior = document.querySelector("#perguntaNome");
  perguntaAnterior.classList.remove("d-none");
  elementoPai.classList.add("d-none");
}

function voltarPerg02() {
  let elementoPai = botaoVoltar02.parentElement;
  let perguntaAnterior = document.querySelector("#pergunta01");
  perguntaAnterior.classList.remove("d-none");
  elementoPai.classList.add("d-none");
}

function voltarPerg03() {
  let elementoPai = botaoVoltar03.parentElement;
  let perguntaAnterior = document.querySelector("#pergunta02");
  perguntaAnterior.classList.remove("d-none");
  elementoPai.classList.add("d-none");
}

function voltarPerg04() {
  let elementoPai = botaoVoltar04.parentElement;
  let perguntaAnterior = document.querySelector("#pergunta03");
  perguntaAnterior.classList.remove("d-none");
  elementoPai.classList.add("d-none");
}

function voltarPerg05() {
  let elementoPai = botaoVoltar05.parentElement;
  let perguntaAnterior = document.querySelector("#pergunta04");
  perguntaAnterior.classList.remove("d-none");
  elementoPai.classList.add("d-none");
}

function voltarPerg06() {
  let elementoPai = botaoVoltar06.parentElement;
  let perguntaAnterior = document.querySelector("#pergunta05");
  perguntaAnterior.classList.remove("d-none");
  elementoPai.classList.add("d-none");
}

function voltarPerg07() {
  let elementoPai = botaoVoltar07.parentElement;
  let perguntaAnterior = document.querySelector("#pergunta06");
  perguntaAnterior.classList.remove("d-none");
  elementoPai.classList.add("d-none");
}

/*Grafico*/ 

let satisfeito = 0
let insatisfeito = 0
let mediano = 0

for(let i = 0; i <= localStorage.length; i++){

  let key = localStorage.key(i)
  let valor = localStorage.getItem(key)

  console.log(valor)


  if(valor == 0){
    valor++
  }
  if(valor <=280 && valor >0){
    insatisfeito++
    console.log(insatisfeito)
  }else if(valor <=420 && valor > 280){
    mediano++
    console.log(mediano)
  }else if(valor>420){
    satisfeito++
    console.log(satisfeito)
  }




}

const ctx = document.getElementById('myChart');
                       
                
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Insatisfeito', 'Serviço mediano', 'Satisfeito'],
    datasets: [{
      label: '# of Votes',
      data: [insatisfeito, mediano, satisfeito],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});