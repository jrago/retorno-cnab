# Retorno CNAB

  
#### NPM badges

<!-- [START badges] -->

[![NPM retorno-cnab package](https://img.shields.io/npm/v/retorno-cnba.svg)](https://npmjs.org/package/retorno-cnab)

[![npm downloads](https://img.shields.io/npm/dm/retorno-cnab.svg?maxAge=604800)](https://npm-stat.com/charts.html?package=retorno-cnab&from=2017-01-1)

[![npm downloads](https://img.shields.io/npm/dt/retorno-cnab.svg?maxAge=604800)](https://npm-stat.com/charts.html?package=retorno-cnab&from=2017-01-1)

<!-- [END badges] -->

# Descrição

Biblioteca em NodeJS para ler arquivo retorno CNAB.

Atualmente, só está implementado para ler os boletos do arquivo CNBA400.

O código foi desenvolvimento baseado [nesta documentação](https://download.itau.com.br/bankline/layout_cobranca_400bytes_cnab_itau.pdf) do Itau.

# Install

```javascript
npm i retorno-cnab
```

```javacript
yarn add retorno-cnab
```

# Exemplo de uso

```javascript
npm run exemplo
```
Utilizando via código:

```javascript
const { lerArquivo, lerCNB400 } = require('retorno-cnab');

const  exemplo = async () => {
	const  arquivo = await  lerArquivo('NOME_ARQUIVO', 'DIRETORIO_DO_ARQUIVO');

	const  resultado = lerCNB400(arquivo);

	console.log(resultado);
}

exemplo();
```

# Contribuição

Sinta-se livre pra adicionar novas features, criar issues e abrir pull requests.

# License
Released under the MIT License.