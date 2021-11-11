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