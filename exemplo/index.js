const { lerArquivo, lerCNB400 } = require('../src/index');

const exemplo = async () => {
    const arquivo = await lerArquivo('CNAB400', './exemplo');
    const resultado = lerCNB400(arquivo);

    console.log(resultado);
}

exemplo();