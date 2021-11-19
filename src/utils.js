const fs = require('fs').promises;
const path = require('path');

exports.lerArquivo = async (fileName, dir = './tmp/cnab') => {
    const conteudoArquivo = await fs.readFile(path.join(dir, `${fileName}.RET`));

    return conteudoArquivo.toString().replace(/(\r\n|\n|\r)/gm, "");
};

exports.addZeroEsquerda = (num, places = 8) => {
  if (num.toString().length > places) {
    throw new Error('Some field is in incorrect format.');
  }
  return String(num).padStart(places, '0');
};

exports.addEspacoDireita = (text, places = 8) => {
    if (text.toString().length > places) {
      throw new Error('Some field is in incorrect format.');
    }
    return String(text).padEnd(places, ' ');
};

exports.formatarNumero = (num) => {
  return (parseInt(num, 10) / 100).toFixed(2);
}

exports.formatarData = (date) => {
  if (date.trim() === ''){
    return '';
  }
  
  const dia = date.substr(0,2);
  const mes = date.substr(2,2);
  const ano = date.substr(4,2);
  return `20${ano}-${mes}-${dia}`
}