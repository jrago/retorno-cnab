exports.lerCNB400 = (arquivo) => {
    const tamanhoArquivo = arquivo.length;

    // 400 = cabecalho
    // 400 = rodape
    // cada boleto tem 400 posições
    // (1200 - 800) / 400 = 1 boleto
    const qtdBoletos = (tamanhoArquivo - 800) / 400;
    const inicioRodape = (tamanhoArquivo - 400);
    console.log(tamanhoArquivo);
    const cabecalho = lerCabecalho(arquivo);
    const boletos = [];
    for (let i = 0; i < qtdBoletos; i++) {
        boletos.push(lerBoletos(arquivo, i + 1))
    }

    const rodape = lerRodape(arquivo, inicioRodape);

    return {
        cabecalho,
        boletos,
        rodape
    }
};

const lerCabecalho = (arquivo) => {
    const tipoRegistro = arquivo.substr(0, 1);
    const codigoRetorno = arquivo.substr(1, 1);
    const literalRetorno = arquivo.substr(2, 7);
    const codigoServico = arquivo.substr(9, 2);
    const literalServico = arquivo.substr(11, 15);
    const agencia = arquivo.substr(26, 4);
    const zeros = arquivo.substr(30, 2);
    const conta = arquivo.substr(32, 5);
    const dac = arquivo.substr(37, 1);
    const brancos = arquivo.substr(38, 8);
    const nomeEmpresa = arquivo.substr(46, 30);
    const codigoBanco = arquivo.substr(76, 3);
    const nomeBanco = arquivo.substr(79, 15);
    const dataGeracao = arquivo.substr(94, 6);
    const densidade = arquivo.substr(100, 5);
    const unidadeDensidade = arquivo.substr(105, 3);
    const numSeqArquivoRetorno = arquivo.substr(108, 5);
    const dataCredito = arquivo.substr(113, 6);
    const brancos2 = arquivo.substr(119, 275);
    const numeroSequencial = arquivo.substr(394, 6);

    return {
        tipoRegistro,
        codigoRetorno,
        literalRetorno,
        codigoServico,
        literalServico,
        agencia,
        zeros,
        conta,
        dac,
        brancos,
        nomeEmpresa,
        codigoBanco,
        nomeBanco,
        dataGeracao,
        densidade,
        unidadeDensidade,
        numSeqArquivoRetorno,
        dataCredito,
        brancos2,
        numeroSequencial,
    }
}

const lerBoletos = (arquivo, index = 1) => {
    const linhaInicial = 400 * index;

    const tipoRegistro = arquivo.substr(linhaInicial + 0, 1);
    const codigoInscricao = arquivo.substr(linhaInicial + 1, 2); // 01 = CPF / 02 = CNPJ
    const numeroInscricao = arquivo.substr(linhaInicial + 3, 14);
    const agencia = arquivo.substr(linhaInicial + 17, 4);
    const zeros = arquivo.substr(linhaInicial + 21, 2);
    const conta = arquivo.substr(linhaInicial + 23, 5);
    const dac = arquivo.substr(linhaInicial + 28, 1);
    const brancos = arquivo.substr(linhaInicial + 29, 8);

    const identificacaoTitulo = arquivo.substr(linhaInicial + 37, 25);
    const nossoNumero = arquivo.substr(linhaInicial + 62, 8);
    const brancos2 = arquivo.substr(linhaInicial + 70, 12);

    const numCarteira = arquivo.substr(linhaInicial + 82, 3);
    const nossoNumero2 = arquivo.substr(linhaInicial + 85, 8);
    const dacNossoNumero = arquivo.substr(linhaInicial + 93, 1);
    const brancos3 = arquivo.substr(linhaInicial + 94, 13);

    const codigoCarteira = arquivo.substr(linhaInicial + 107, 1);
    const codigoOcorrencia = arquivo.substr(linhaInicial + 108, 2);
    const dataOcorrencia = arquivo.substr(linhaInicial + 110, 6);
    const numDocumento = arquivo.substr(linhaInicial + 116, 10);
    const nossoNumeroConfirmacao = arquivo.substr(linhaInicial + 126, 8);
    const brancos4 = arquivo.substr(linhaInicial + 134, 12);

    const vencimento = arquivo.substr(linhaInicial + 146, 6);
    const valorTitulo = arquivo.substr(linhaInicial + 152, 13);
    const codigoBanco = arquivo.substr(linhaInicial + 165, 3);
    const agenciaCobradora = arquivo.substr(linhaInicial + 168, 4);
    const dacAgenciaCobrado = arquivo.substr(linhaInicial + 172, 1);
    const especie = arquivo.substr(linhaInicial + 173, 2);
    const tarifaCobranca = arquivo.substr(linhaInicial + 175, 13); 
    const brancos5 = arquivo.substr(linhaInicial + 188, 26);

    const valorIOF = arquivo.substr(linhaInicial + 214, 13);
    const valorAbatimento = arquivo.substr(linhaInicial + 227, 13);
    const descontos = arquivo.substr(linhaInicial + 240, 13);
    const valorPrincipal = arquivo.substr(linhaInicial + 253, 13);
    const jurosMoraMulta = arquivo.substr(linhaInicial + 266, 13);
    const outrosCreditos = arquivo.substr(linhaInicial + 279, 13);
    const boletoDDA = arquivo.substr(linhaInicial + 292, 1);
    const brancos6 = arquivo.substr(linhaInicial + 293, 2);

    const dataCredito = arquivo.substr(linhaInicial + 295, 6);
    const instrucaoCancelada = arquivo.substr(linhaInicial + 301, 4);
    const brancos7  = arquivo.substr(linhaInicial + 305, 6);

    const zeros2 = arquivo.substr(linhaInicial + 311, 13);
    const nomePagador = arquivo.substr(linhaInicial + 324, 30);
    const brancos8 = arquivo.substr(linhaInicial + 354, 23);

    const erros = arquivo.substr(linhaInicial + 377, 8);
    const brancos9 = arquivo.substr(linhaInicial + 385, 7);

    const codLiquidacao = arquivo.substr(linhaInicial + 392, 2);
    const numeroSequencial = arquivo.substr(linhaInicial + 394, 6);

    return {
        tipoRegistro,
        codigoInscricao,
        numeroInscricao,
        agencia,
        zeros,
        conta,
        dac,
        brancos,
        identificacaoTitulo,
        nossoNumero,
        brancos2,
        numCarteira,
        nossoNumero2,
        dacNossoNumero,
        brancos3,
        codigoCarteira,
        codigoOcorrencia,
        dataOcorrencia,
        numDocumento,
        nossoNumeroConfirmacao,
        brancos4,
        vencimento,
        valorTitulo,
        codigoBanco,
        agenciaCobradora,
        dacAgenciaCobrado,
        especie,
        tarifaCobranca,
        brancos5,
        valorIOF,
        valorAbatimento,
        descontos,
        valorPrincipal,
        jurosMoraMulta,
        outrosCreditos,
        boletoDDA,
        brancos6,
        dataCredito,
        instrucaoCancelada,
        brancos7 ,
        zeros2,
        nomePagador,
        brancos8,
        erros,
        brancos9,
        codLiquidacao,
        numeroSequencial,
    }
}

const lerRodape = (arquivo, linhaInicial) => {
    const tipoRegistro = arquivo.substr(linhaInicial + 0, 1);
    const codigoRetorno = arquivo.substr(linhaInicial + 1, 1);
    const codigoServico = arquivo.substr(linhaInicial + 2, 2);
    const codigoBanco = arquivo.substr(linhaInicial + 4, 3);
    const brancos1 = arquivo.substr(linhaInicial + 7, 10);
    
    const cobrancaSimples = {
        qtdeTitulos: arquivo.substr(linhaInicial + 17, 8),
        valorTotal: arquivo.substr(linhaInicial + 25, 14),
        avisoBancario: arquivo.substr(linhaInicial + 39, 8),
    }
    const brancos2 = arquivo.substr(linhaInicial + 47, 10);

    const cobrancaVinculada = {
        qtdeTitulos: arquivo.substr(linhaInicial + 57, 8),
        valorTotal: arquivo.substr(linhaInicial + 65, 14),
        avisoBancario: arquivo.substr(linhaInicial + 79, 8),
    }
    const brancos3 = arquivo.substr(linhaInicial + 87, 90);
    
    const cobrancaDireta = {
        qtdeTitulos: arquivo.substr(linhaInicial + 177, 8),
        valorTotal: arquivo.substr(linhaInicial + 185, 14),
        avisoBancario: arquivo.substr(linhaInicial + 199, 8),
    }

    const controleArquivo = arquivo.substr(linhaInicial + 207, 5);
    const qtdeDetalhes = arquivo.substr(linhaInicial + 212, 8);
    const valorTotalInformado = arquivo.substr(linhaInicial + 220, 14);
    const brancos4 = arquivo.substr(linhaInicial + 234, 160);

    const numeroSequencial = arquivo.substr(linhaInicial + 394, 6);

    return {
        tipoRegistro,
        codigoRetorno,
        codigoServico,
        codigoBanco,
        brancos1,
        cobrancaSimples,
        brancos2,
        cobrancaVinculada,
        brancos3,
        cobrancaDireta,
        controleArquivo,
        qtdeDetalhes,
        valorTotalInformado,
        brancos4,
        numeroSequencial,
    }
}