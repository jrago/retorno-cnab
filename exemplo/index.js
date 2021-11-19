const { RetornoCNAB } = require('../src/index');

const exemplo = async () => {
    const arquivo = await new RetornoCNAB().CNAB400Simples('CNAB400', './exemplo');
    console.log(arquivo);
}

exemplo();