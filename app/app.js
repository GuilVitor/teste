
const url = "https://api.api-futebol.com.br/v1/campeonatos/10"

 let headers = new Headers();

 headers.append('Athorization', 'Bearer test_6ed08d31465ad97311bacd734d8099')
 console.log(headers);

const options = {
 headers: {'Authorization' : 'Bearer test_6ed08d31465ad97311bacd734d8099'},
}


function buscarPartidas() {
  fetch(url, options)
 .then(resposta => {
   resposta.json()
    .then(obj => {
    mostrarPartidas(obj);
  })
})
.catch()
}



function mostrarPartidas(campeonatos) {
  console.log(campeonatos, "Isso é partidas para mobile")



  var image = document.createElement('img');
   image.setAttribute('src', campeonatos.logo)
   image.style.width='200px'
   image.style.marginLeft='-70%'


  var nome  = document.createElement('h2');
  nome.innerText = campeonatos.edicao_atual.nome_popular
  nome.style.marginTop='-150px'
  nome.style.fontSize='50px'
  nome.style.marginLeft='25%'




    document.getElementById('partidasAoVivo').append(image,nome);
  }

document.write(buscarPartidas());

////////////////////////////LOGO DO CAMPEONATO//////////////////////////////


const urltab = "https://api.api-futebol.com.br/v1/campeonatos/10/tabela"


function buscarPartidas2() {
  fetch(urltab, options)
 .then(resposta => {
   resposta.json()
    .then(obj => {
    mostrarPartidas2(obj);
  })
})
.catch()
}

function mostrarPartidas2(tabela) {
  console.log(tabela, "Isso é partidas para pc")

 for (i=0; i<tabela.length; i++){


  var ano  = document.createElement('h3');
  ano.style.marginLeft='-80%'


  var logo =  document.createElement('img');
  logo.setAttribute('src', tabela[i].time.escudo)
  logo.style.width='50px'
  logo.style.height='50px'
  logo.style.marginTop='50px'
  logo.style.marginLeft='-75%'


  var posicao = document.createElement('h3');
  posicao.innerText = tabela[i].posicao
  posicao.style.marginTop='-40px'
  posicao.style.marginLeft='-90%'

  var nomelogo = document.createElement('h4')
  nomelogo.innerText = tabela[i].time.nome_popular
  nomelogo.style.backgroundColor='#333'
  nomelogo.style.marginTop='-35px'
  nomelogo.style.marginLeft='-50%'
  nomelogo.style.color='teal'


  var ponto = document.createElement('h4')
  ponto.innerText=tabela[i].pontos
  ponto.style.backgroundColor='#333'
  ponto.style.marginTop='-40px'
  ponto.style.marginLeft='-25%'

  var vit = document.createElement('h4');
  vit.innerText=tabela[i].vitorias
  vit.style.backgroundColor='#333'
  vit.style.marginTop='-40px'
  vit.style.marginLeft='-10%'


  var empate = document.createElement('h4')
  empate.innerText=tabela[i].empates
  empate.style.backgroundColor='#333'
  empate.style.marginTop='-40px'
  empate.style.marginLeft='5%'


  var derrota =  document.createElement('h4');
  derrota.innerText=tabela[i].derrotas
  derrota.style.backgroundColor='#333'
  derrota.style.marginTop='-40px'
  derrota.style.marginLeft='20%'


  var golpro = document.createElement('h4');
  golpro.innerText=tabela[i].gols_pro
  golpro.style.backgroundColor='#333'
  golpro.style.marginTop='-40px'
  golpro.style.marginLeft='35%'

  var golcontra = document.createElement('h4');
  golcontra.innerText=tabela[i].gols_contra
  golcontra.style.backgroundColor='#333'
  golcontra.style.marginTop='-40px'
  golcontra.style.marginLeft='50%'

  var saldo = document.createElement('h4');
  saldo.innerText=tabela[i].saldo_gols
  saldo.style.backgroundColor='#333'
  saldo.style.marginTop='-40px'
  saldo.style.marginLeft='65%'

  var jogo = document.createElement('h4');
  jogo.innerText=tabela[i].jogos
  jogo.style.backgroundColor='#333'
  jogo.style.marginTop='-40px'
  jogo.style.marginLeft='80%'

  var jogopassado = document.createElement('h4');
  jogopassado.innerText=tabela[i].aproveitamento
  jogopassado.style.backgroundColor='#333'
  jogopassado.style.marginTop='-40px'
  jogopassado.style.marginLeft='93%'
  jogopassado.style.color='red'


 
    document.getElementById('partidasAoVivo2').append(logo,ano, posicao,nomelogo,ponto,vit,empate,derrota,golpro,golcontra,saldo,jogo,jogopassado);
 }
}

document.write(buscarPartidas2());


///////////////////////////////////////////////////////////////////////


const urljogo = "https://api.api-futebol.com.br/v1/campeonatos/10/rodadas/1"



function buscarjogos(){
  fetch(urljogo, options)
  .then(resposta => {
    resposta.json()
    .then(obj => {
      matamatacopa(obj);
    })
  })
  .catch()
}

function matamatacopa(fase){
  console.log(fase, 'isso é fases da copa do brasil.')



  var rodada = document.createElement('h3')
  rodada.innerText=fase.partidas[0].placar

  var rodadacasa = document.createElement('img')
  rodadacasa.setAttribute('src', fase.partidas[0].time_mandante.escudo)
  rodadacasa.style.width='70px'

  var rodadafora = document.createElement('img')
  rodadafora.setAttribute('src', fase.partidas[0].time_visitante.escudo)
  rodadafora.style.width='70px'
  rodadafora.style.marginLeft='200px'
  rodadafora.style.marginTop='-100px'

  var jogo1 = document.createElement('h3')
  jogo1.innerText=fase.nome
  jogo1.style.color='red'

  var data = document.createElement('h3')
  data.innerText=fase.partidas[0].data_realizacao

  var hora = document.createElement('h3')
  hora.innerText=fase.partidas[0].hora_realizacao

  

///////////////////////PARTIDA 1///////////////////////////

var rodada2 = document.createElement('h3')
rodada2.innerText=fase.partidas[1].placar

var rodadacasa2 = document.createElement('img')
rodadacasa2.setAttribute('src', fase.partidas[1].time_mandante.escudo)
rodadacasa2.style.width='70px'

var rodadafora2 = document.createElement('img')
rodadafora2.setAttribute('src', fase.partidas[1].time_visitante.escudo)
rodadafora2.style.width='70px'
rodadafora2.style.marginLeft='200px'
rodadafora2.style.marginTop='-100px'

var jogo2 = document.createElement('h3')
jogo2.innerText=fase.nome
jogo2.style.color='red'
jogo2.style.marginTop='20px'


var data2 = document.createElement('h3')
data2.innerText=fase.partidas[1].data_realizacao

var hora2 = document.createElement('h3')
hora2.innerText=fase.partidas[1].hora_realizacao

///////////////////////////// PARTIDA 2 //////////////////////////

var rodada3 = document.createElement('h3')
rodada3.innerText=fase.partidas[2].placar

var rodadacasa3 = document.createElement('img')
rodadacasa3.setAttribute('src', fase.partidas[2].time_mandante.escudo)
rodadacasa3.style.width='70px'

var rodadafora3 = document.createElement('img')
rodadafora3.setAttribute('src', fase.partidas[2].time_visitante.escudo)
rodadafora3.style.width='70px'
rodadafora3.style.marginLeft='200px'
rodadafora3.style.marginTop='-100px'

var jogo3 = document.createElement('h3')
jogo3.innerText=fase.nome
jogo3.style.color='red'
jogo3.style.marginTop='20px'


var data3 = document.createElement('h3')
data3.innerText=fase.partidas[2].data_realizacao

var hora3 = document.createElement('h3')
hora3.innerText=fase.partidas[2].hora_realizacao

//////////////////////////// PARTIDA 3 /////////////////////////

var rodada4 = document.createElement('h3')
rodada4.innerText=fase.partidas[3].placar

var rodadacasa4 = document.createElement('img')
rodadacasa4.setAttribute('src', fase.partidas[3].time_mandante.escudo)
rodadacasa4.style.width='70px'

var rodadafora4 = document.createElement('img')
rodadafora4.setAttribute('src', fase.partidas[3].time_visitante.escudo)
rodadafora4.style.width='70px'
rodadafora4.style.marginLeft='200px'
rodadafora4.style.marginTop='-100px'

var jogo4 = document.createElement('h3')
jogo4.innerText=fase.nome
jogo4.style.color='red'
jogo4.style.marginTop='20px'


var data4 = document.createElement('h3')
data4.innerText=fase.partidas[3].data_realizacao

var hora4 = document.createElement('h3')
hora4.innerText=fase.partidas[3].hora_realizacao

///////////////////////////PARTIDA 4 //////////////////////////

var rodada5 = document.createElement('h3')
rodada5.innerText=fase.partidas[4].placar

var rodadacasa5 = document.createElement('img')
rodadacasa5.setAttribute('src', fase.partidas[4].time_mandante.escudo)
rodadacasa5.style.width='70px'

var rodadafora5 = document.createElement('img')
rodadafora5.setAttribute('src', fase.partidas[4].time_visitante.escudo)
rodadafora5.style.width='70px'
rodadafora5.style.marginLeft='200px'
rodadafora5.style.marginTop='-100px'

var jogo5 = document.createElement('h3')
jogo5.innerText=fase.nome
jogo5.style.color='red'
jogo5.style.marginTop='20px'


var data5 = document.createElement('h3')
data5.innerText=fase.partidas[4].data_realizacao

var hora5 = document.createElement('h3')
hora5.innerText=fase.partidas[4].hora_realizacao

///////////////////////////////PARTIDA 5//////////////////////////

var rodada6 = document.createElement('h3')
rodada6.innerText=fase.partidas[5].placar

var rodadacasa6 = document.createElement('img')
rodadacasa6.setAttribute('src', fase.partidas[5].time_mandante.escudo)
rodadacasa6.style.width='70px'

var rodadafora6 = document.createElement('img')
rodadafora6.setAttribute('src', fase.partidas[5].time_visitante.escudo)
rodadafora6.style.width='70px'
rodadafora6.style.marginLeft='200px'
rodadafora6.style.marginTop='-100px'

var jogo6 = document.createElement('h3')
jogo6.innerText=fase.nome
jogo6.style.color='red'
jogo6.style.marginTop='20px'


var data6 = document.createElement('h3')
data6.innerText=fase.partidas[5].data_realizacao

var hora6 = document.createElement('h3')
hora6.innerText=fase.partidas[5].hora_rea


/////////////////////////////////////////// parte 6 //////////////////

var rodada7 = document.createElement('h3')
rodada7.innerText=fase.partidas[6].placar

var rodadacasa7 = document.createElement('img')
rodadacasa7.setAttribute('src', fase.partidas[6].time_mandante.escudo)
rodadacasa7.style.width='70px'

var rodadafora7 = document.createElement('img')
rodadafora7.setAttribute('src', fase.partidas[6].time_visitante.escudo)
rodadafora7.style.width='70px'
rodadafora7.style.marginLeft='200px'
rodadafora7.style.marginTop='-100px'

var jogo7 = document.createElement('h3')
jogo7.innerText=fase.nome
jogo7.style.color='red'
jogo7.style.marginTop='20px'


var data7 = document.createElement('h3')
data7.innerText=fase.partidas[6].data_realizacao

var hora7 = document.createElement('h3')
hora7.innerText=fase.partidas[6].hora_rea

/////////////////////////////////////////// parte 7 //////////////////

var rodada8 = document.createElement('h3')
rodada8.innerText=fase.partidas[7].placar

var rodadacasa8 = document.createElement('img')
rodadacasa8.setAttribute('src', fase.partidas[7].time_mandante.escudo)
rodadacasa8.style.width='70px'

var rodadafora8 = document.createElement('img')
rodadafora8.setAttribute('src', fase.partidas[7].time_visitante.escudo)
rodadafora8.style.width='70px'
rodadafora8.style.marginLeft='200px'
rodadafora8.style.marginTop='-100px'

var jogo8 = document.createElement('h3')
jogo8.innerText=fase.nome
jogo8.style.color='red'
jogo8.style.marginTop='20px'


var data8 = document.createElement('h3')
data8.innerText=fase.partidas[7].data_realizacao

var hora8 = document.createElement('h3')
hora8.innerText=fase.partidas[7].hora_rea


/////////////////////////////////////////// parte 8 //////////////////

var rodada9 = document.createElement('h3')
rodada9.innerText=fase.partidas[8].placar

var rodadacasa9 = document.createElement('img')
rodadacasa9.setAttribute('src', fase.partidas[8].time_mandante.escudo)
rodadacasa9.style.width='70px'

var rodadafora9 = document.createElement('img')
rodadafora9.setAttribute('src', fase.partidas[8].time_visitante.escudo)
rodadafora9.style.width='70px'
rodadafora9.style.marginLeft='200px'
rodadafora9.style.marginTop='-100px'

var jogo9 = document.createElement('h3')
jogo9.innerText=fase.nome
jogo9.style.color='red'
jogo9.style.marginTop='20px'


var data9 = document.createElement('h3')
data9.innerText=fase.partidas[8].data_realizacao

var hora9 = document.createElement('h3')
hora9.innerText=fase.partidas[8].hora_rea


/////////////////////////////////////////// parte 9 //////////////////

var rodada10 = document.createElement('h3')
rodada10.innerText=fase.partidas[9].placar

var rodadacasa10 = document.createElement('img')
rodadacasa10.setAttribute('src', fase.partidas[9].time_mandante.escudo)
rodadacasa10.style.width='70px'

var rodadafora10 = document.createElement('img')
rodadafora10.setAttribute('src', fase.partidas[9].time_visitante.escudo)
rodadafora10.style.width='70px'
rodadafora10.style.marginLeft='200px'
rodadafora10.style.marginTop='-100px'

var jogo10 = document.createElement('h3')
jogo10.innerText=fase.nome
jogo10.style.color='red'
jogo10.style.marginTop='20px'


var data10 = document.createElement('h3')
data10.innerText=fase.partidas[9].data_realizacao

var hora10 = document.createElement('h3')
hora10.innerText=fase.partidas[9].hora_rea




  document.getElementById("partidasAoVivo3").append(jogo1,rodada,data,hora,rodadacasa,rodadafora,jogo2,rodada2,data2,hora2,rodadacasa2,rodadafora2,jogo3,rodada3,data3,hora3,rodadacasa3,rodadafora3, jogo4,rodada4,data4,hora4,rodadacasa4,rodadafora4,jogo5,rodada5,data5,hora5,rodadacasa5,rodadafora5,jogo6,rodada6,data6,hora6,rodadacasa6,rodadafora6,jogo7,rodada7,data7,hora7,rodadacasa7,rodadafora7,jogo8,rodada8,data8,hora8,rodadacasa8,rodadafora8,jogo9,rodada9,data9,hora9,rodadacasa9,rodadafora9);
 
}



document.write(buscarjogos());


  
//////////////////////////////////////////////////////////////////////////////

const urlpartida = "https://api.api-futebol.com.br/v1/partidas/4843"


function estatisticadapartida(){

  fetch(urlpartida, options)
    .then(resposta =>{
      resposta.json()
      .then(obj =>{
        partida(obj)
      })
    })
    .catch()
}

   function partida(informacao){
     console.log(informacao, 'isso é informacao da partida')



   }

   estatisticadapartida();









///////////////////////////////////////////////////////////////////////////////



const imgs = document.getElementById("img");
const img1 = document.querySelectorAll("#img img");

let idx1 = 0;

function carrossel (){
  idx1++

  if(idx1 > img1.length - 1){
    idx1 = 0;
  }

  imgs.style.transform = `translateX(${-idx1 * 865}px)`;

}

setInterval(carrossel, 5000);
/////////////////////////////////////////////////////////////////////////////////


const imgss = document.getElementById("pcimg");
const img2 = document.querySelectorAll("#pcimg img");

let idx2 = 0;

function carrosseu (){
  idx2++

  if(idx2 > img2.length - 1){
    idx2 = 0;
  }

  imgss.style.transform = `translateX(${-idx2 * 350}px)`;

}

setInterval(carrosseu, 5000);

