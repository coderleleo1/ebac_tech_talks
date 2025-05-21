AOS.init();
                    //         1.   2.  3.     4.                // 1. mês, em inglês e deve ser as 3 primeiras letras do mês 
const dataDoEvento = new Date("Dec 12, 2025 19:00:00");           // 2. dia | 3. ano | 4. horário
const timeStampDoEvento = dataDoEvento.getTime(); // escreve a data em forma numerica

const contaAsHoras = setInterval(function(){  // função para se repetir a cada 1000 ms ou 1 segundo
    const agora = new Date();  // pega a data atual
    const timeStampAtual = agora.getTime(); // pega o valor numerico da data atual

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual; // subtrai a data atual pelo valor da data do evento

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs); // calcula o valor dos dias até o evento. Math.floor arredonda para baixo o resultado da conta dos dias
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs); // % recupera o resto da divisão, em outras palavras, o valor quebrado após a virgula .90...
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs )
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000)
                                // innerHTML é para escrever no documento do HTML
    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if(distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000)