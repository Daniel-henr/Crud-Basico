async function sortear(){
    //pegar o total de resultados
   const totalresult = Number(document.querySelector('#totalresult').value)

    //pegar o menor valor
    const menorValor = Number(document.querySelector('#menorvalor').value)

    //pegar o maior valor
    const maiorValor = Number(document.querySelector('#maiorvalor').value)

    for(let j = 0; j < 20; j++){
     //limpar resultados antigos
     const mostrarResul = document.querySelector('.results-value')
     mostrarResul.innerHTML=''

    for(let i = 0; i < totalresult; i++){
    //gerar um número aleatório entre o menor e o maior valor
    const resultado = Math.floor(Math.random() * (maiorValor - menorValor + 1)) + menorValor
    
    //Gerar um elemento HTML para o resultado
    const resultElement = document.createElement('div')
    resultElement.classList.add('result-value')
    resultElement.innerText = resultado

    //adicionar o elemento criado dentro do HTML
    mostrarResul.append(resultElement)
        }
        await wait(20)
    }


    const historicoElement = document.querySelector('.historico-value')
    historicoElement.innerHTML = ''
    for(let h = 0; h < historico.length; h++){
     const resultadoElement = document.createElement('div')
        resultadoElement.classList.add('resultado-historico')
        resultadoElement.innerText = resultado
        historicoElement.append(resultadoElement)

    }
}


function wait(tempo){
    return new Promise((resolve) =>{
        setTimeout(() => resolve(), tempo)
    })
}