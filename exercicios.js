// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  num1 = 1
  num2 = 2
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui

  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
    const alt = prompt('Digite a altura')
    const larg = prompt('Digite a largura')
    const areaRetangulo = alt * larg
    console.log(areaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const atualAno = prompt ('Digite o ano atual')
  const nascimentoAno = prompt ('Digite o ano que nasceu')
  const idade = atualAno - nascimentoAno
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) { 
  const imc = peso / (altura * altura)
  return imc.toFixed(1)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const name = prompt('Digite o seu nome')
  const age = prompt('Digite a sua idade')
  const emailAdress = prompt('Digite o seu email')
  console.log(`Meu nome é ${name}, tenho ${age} anos, e o meu email é ${emailAdress}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const favColor1 = prompt('Digite a sua primeira cor favorita')
  const favColor2 = prompt('Digite a sua segunda cor favorita')
  const favColor3 = prompt('Digite a sua terceira cor favorita')
  const coresFavoritas = [favColor1, favColor2, favColor3]
  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const msgParaAvaliador = string
  return msgParaAvaliador.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const even = custo / valorIngresso
  return even
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const verificaTamanho = string1.length === string2.length
  return verificaTamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimoIndice = array[array.length - 1]
  return ultimoIndice
}

// EXERCÍCIO 11  !!!!!
function trocaPrimeiroEUltimo(array) {
  let arraySemUltimo = array.pop()
  let arraySemPrimeiro = array.shift()

  console.log() 
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const stringIguais = string1.toLowerCase() === string2.toLowerCase()
  return stringIguais
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual13 = prompt('Qual o ano atual?')
  const anoNascimento13 = prompt('Insira o ano de nascimento de alguem')
  const rgEmissao = prompt('Qual ano foi emitida o RG dessa pessoa')
  const idade = anoAtual13 - anoNascimento13
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maioridade = prompt('você é maior de idade?')
  const ensinoMedio = prompt('você tem ensino médio completo?') 
  const disponibilidade = prompt('Você tem disbonibilidade de horario para o curso?')
  console.log(maioridade, ensinoMedio, disponibilidade, (maioridade === 'sim' && ensinoMedio === 'sim' && disponibilidade === 'sim'))
  return Boolean(maioridade === 'sim' && ensinoMedio === 'sim' && disponibilidade === 'sim')
}